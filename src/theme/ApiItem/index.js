import React from 'react';
import ApiItem from '@theme-original/ApiItem';
import { useLocation } from '@docusaurus/router';
import ApiMethodList from "@theme/ApiMethodList";

// Global monkey patch for axios if it exists
const injectAxiosInterceptor = () => {
  if (typeof window !== 'undefined' && window.axios) {
    console.log('Patching axios for JSON-RPC path handling');
    const originalRequest = window.axios.request;
    window.axios.request = function(config) {
      if (config.url && (
        config.url.includes('/eth_') || 
        config.url.includes('/web3_') || 
        config.url.includes('/net_') || 
        config.url.includes('/zkevm_') || 
        config.url.includes('/txpool_')
      )) {
        console.log('Intercepted axios request to JSON-RPC path:', config.url);
        config.url = config.url.split('/').slice(0, 3).join('/'); // Keep only the origin
      }
      return originalRequest.call(this, config);
    };
  }
};

// This script ensures the URL in any HTTP request doesn't include /eth_ or similar method paths
const script = document.createElement('script');
script.textContent = `
  (function() {
    // Intercept fetch
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
      if (typeof input === 'string' && (
        input.includes('/eth_') || 
        input.includes('/web3_') || 
        input.includes('/net_') || 
        input.includes('/zkevm_') || 
        input.includes('/txpool_')
      )) {
        console.log('FETCH INTERCEPTED:', input);
        try {
          const url = new URL(input);
          input = url.origin;
          console.log('FIXED FETCH URL:', input);
        } catch (e) {
          console.error('Failed to parse URL:', input, e);
        }
      }
      return originalFetch.call(this, input, init);
    };

    // Intercept XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...rest) {
      if (typeof url === 'string' && (
        url.includes('/eth_') || 
        url.includes('/web3_') || 
        url.includes('/net_') || 
        url.includes('/zkevm_') || 
        url.includes('/txpool_')
      )) {
        console.log('XHR INTERCEPTED:', url);
        try {
          const urlObj = new URL(url);
          url = urlObj.origin;
          console.log('FIXED XHR URL:', url);
        } catch (e) {
          console.error('Failed to parse XHR URL:', url, e);
        }
      }
      return originalOpen.call(this, method, url, ...rest);
    };
  })();
`;
document.head.appendChild(script);

export default function ApiItemWrapper(props) {
  const location = useLocation();
  
  // Use the pathname to determine the page type
  const pathname = location.pathname;
  
  // Check if current page is an API info page based on the URL pattern
  const isEthereumApiInfo = pathname === '/CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api/';
  const isTxpoolApiInfo = pathname === '/CDK-Erigon/JSON-RPC/txpool/txpool-json-rpc-api/';
  const isZkevmApiInfo = pathname === '/CDK-Erigon/JSON-RPC/zkevm/polygon-zkevm-node-api/';
  
  // Determine which API this page belongs to
  let apiName = null;
  if (isEthereumApiInfo) {
    apiName = 'eth';
  } else if (isTxpoolApiInfo) {
    apiName = 'txpool';
  } else if (isZkevmApiInfo) {
    apiName = 'zkevm';
  }

  // Inject our custom code to ensure all requests go to the base URL
  React.useEffect(() => {
    injectAxiosInterceptor();
  }, [location]);

  return <ApiItem {...props} />;
} 