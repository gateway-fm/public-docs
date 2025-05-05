/**
 * Utility functions for handling JSON-RPC URLs and requests
 */

/**
 * Extract the base URL (origin) from a URL string
 * @param {string} url - The URL string to extract from
 * @returns {string} The base URL (origin only, no path)
 */
export const getBaseUrl = (url) => {
  if (!url) return 'https://rpc.stavanger.gateway.fm';
  
  try {
    // Handle absolute URLs
    if (url.includes('://')) {
      const parsedUrl = new URL(url);
      return parsedUrl.origin;
    }
    
    // For relative URLs, we need context
    // Try to find server URL from document
    const apiElement = document.querySelector('[data-server-url]');
    if (apiElement && apiElement.getAttribute('data-server-url')) {
      return apiElement.getAttribute('data-server-url');
    }
    
    // If all else fails, use the default
    return 'https://rpc.stavanger.gateway.fm';
  } catch (e) {
    console.error('Failed to parse URL:', url, e);
    return 'https://rpc.stavanger.gateway.fm';
  }
};

/**
 * Extract the method name from a JSON-RPC path
 * @param {string} path - The path to extract from (e.g., "/eth_call")
 * @returns {string} The method name (e.g., "eth_call")
 */
export const getMethodFromPath = (path) => {
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

/**
 * Create a JSON-RPC request body from a method name
 * @param {string} method - The method name (e.g., "eth_call")
 * @param {Array} params - The parameters for the method
 * @returns {Object} A JSON-RPC request body
 */
export const createJsonRpcRequest = (method, params = []) => {
  return {
    jsonrpc: '2.0',
    id: 1,
    method,
    params,
  };
};

/**
 * Determine if a URL is a JSON-RPC method URL
 * @param {string} url - The URL to check
 * @returns {boolean} True if it's a JSON-RPC method URL
 */
export const isJsonRpcMethodUrl = (url) => {
  if (!url) return false;
  
  return (
    url.includes('/eth_') || 
    url.includes('/web3_') || 
    url.includes('/net_') || 
    url.includes('/zkevm_') || 
    url.includes('/txpool_')
  );
}; 