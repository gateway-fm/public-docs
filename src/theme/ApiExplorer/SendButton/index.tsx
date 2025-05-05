import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';

// Utility functions for JSON-RPC
const getBaseUrl = (url: string) => {
  if (!url) return 'https://rpc.stavanger.gateway.fm';
  
  try {
    // Handle absolute URLs
    if (url.includes('://')) {
      const parsedUrl = new URL(url);
      return parsedUrl.origin;
    }
    
    // For relative URLs, we need context
    // Try to find server URL from document
    if (typeof document !== 'undefined') {
      const apiElement = document.querySelector('[data-server-url]');
      if (apiElement && apiElement.getAttribute('data-server-url')) {
        return apiElement.getAttribute('data-server-url') || '';
      }
    }
    
    // If all else fails, use the default
    return 'https://rpc.stavanger.gateway.fm';
  } catch (e) {
    console.error('Failed to parse URL:', url, e);
    return 'https://rpc.stavanger.gateway.fm';
  }
};

const getMethodFromPath = (path: string) => {
  if (!path) return '';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For paths like /eth_call, the whole path is the method
  if (!cleanPath.includes('/')) {
    return cleanPath;
  }
  
  // For more complex paths, take the last segment
  const parts = cleanPath.split('/');
  return parts[parts.length - 1] || '';
};

const createJsonRpcRequest = (method: string, params: any[] = []) => {
  return {
    jsonrpc: '2.0',
    id: 1,
    method,
    params,
  };
};

// Format file size for display
const formatBytes = (bytes: number) => {
  if (bytes < 1024) return bytes + ' bytes';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
};

// This is a completely custom SendButton that REPLACES the OpenAPI plugin's functionality
export default function SendButton(props: any): React.ReactElement {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [response, setResponse] = useState(null);
  const [requestInfo, setRequestInfo] = useState<{url: string, body: any} | null>(null);
  const [isResponseOpen, setIsResponseOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Extract request body from props or generate a basic one
  const getRequestBody = () => {
    // First check if body is provided in props
    if (props.body) {
      return props.body;
    }
    
    // Extract the method name from the path or props
    let methodName = '';
    if (props.path) {
      methodName = getMethodFromPath(props.path);
    }
    
    // If we have a method name, create a JSON-RPC request
    if (methodName) {
      return createJsonRpcRequest(methodName, []);
    }
    
    // Fallback default body
    return {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_blockNumber',
      params: []
    };
  };
  
  const sendRequest = async () => {
    try {
      setIsLoading(true);
      
      // Extract the server URL from props.url
      const serverUrl = props.url ? getBaseUrl(props.url) : "https://rpc.stavanger.gateway.fm";
      const body = getRequestBody();
      
      console.log('[Custom SendButton] Original URL:', props.url);
      console.log('[Custom SendButton] Server URL (origin):', serverUrl);
      console.log('[Custom SendButton] Request body:', JSON.stringify(body, null, 2));
      
      setRequestInfo({
        url: serverUrl,
        body
      });
      
      // Make the request ourselves with XMLHttpRequest to ensure complete control
      const xhr = new XMLHttpRequest();
      xhr.open('POST', serverUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.onload = function() {
        setIsLoading(false);
        
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            setResponse(data);
            setIsResponseOpen(true);
            setShowSuccess(true);
            setShowError(false);
            
            setTimeout(() => {
              setShowSuccess(false);
            }, 2000);
          } catch (e) {
            console.error('Error parsing response:', e);
            setShowError(true);
            setShowSuccess(false);
            
            setTimeout(() => {
              setShowError(false);
            }, 2000);
          }
        } else {
          console.error('HTTP error:', xhr.status, xhr.statusText);
          setShowError(true);
          setShowSuccess(false);
          
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      };
      
      xhr.onerror = function() {
        console.error('Network error occurred');
        setIsLoading(false);
        setShowError(true);
        setShowSuccess(false);
        
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      };
      
      // Send the request
      xhr.send(JSON.stringify(body));
    } catch (error) {
      console.error('Error sending request:', error);
      setIsLoading(false);
      setShowError(true);
      setShowSuccess(false);
      
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  
  // Close the response modal
  const closeResponse = () => {
    setIsResponseOpen(false);
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeResponse();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isResponseOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isResponseOpen]);
  
  // Log props on mount for debugging
  useEffect(() => {
    console.log('[Custom SendButton] Props:', props);
    if (props.url) {
      console.log('[Custom SendButton] Server URL (origin):', getBaseUrl(props.url));
    }
    if (props.path) {
      console.log('[Custom SendButton] Method from path:', getMethodFromPath(props.path));
    }
  }, [props]);
  
  return (
    <div className={styles.sendButtonContainer}>
      <button
        className={clsx(
          styles.sendButton,
          showSuccess && styles.success,
          showError && styles.error,
          isLoading && styles.loading
        )}
        onClick={sendRequest}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : showSuccess ? 'Success!' : showError ? 'Error!' : 'Send Request'}
      </button>
      
      {requestInfo && (
        <div className={styles.requestInfoContainer}>
          <h3>Request Details</h3>
          <div><strong>URL:</strong> {requestInfo.url}</div>
          <div className={styles.requestMethod}>
            <strong>Method:</strong> POST
          </div>
          <div>
            <strong>Body:</strong>
            <pre className={styles.requestContent}>
              {JSON.stringify(requestInfo.body, null, 2)}
            </pre>
          </div>
        </div>
      )}
      
      {/* Inline version (small preview) */}
      {response && !isResponseOpen && (
        <div className={styles.inlineResponse}>
          <div className={styles.responseHeader}>
            <h3>Response</h3>
            <button 
              className={styles.closeButton} 
              onClick={() => setIsResponseOpen(true)}
              aria-label="Expand"
            >
              ↗
            </button>
          </div>
          <pre className={styles.inlineResponseContent}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
      
      {/* Modal overlay for full response */}
      {response && isResponseOpen && createPortal(
        <div className={styles.responseOverlay} onClick={closeResponse}>
          <div className={styles.responseContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.responseHeader}>
              <h3>Response</h3>
              <div className={styles.responseControls}>
                <span className={styles.responseSize}>
                  {formatBytes(JSON.stringify(response).length)}
                </span>
                <button 
                  className={styles.closeButton} 
                  onClick={closeResponse}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <pre className={styles.responseContent}>
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 