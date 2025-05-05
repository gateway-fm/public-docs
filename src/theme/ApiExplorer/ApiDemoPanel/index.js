import React, { useEffect } from "react";

/**
 * This is a sneaky component that injects a script to fix JSON-RPC URLs.
 * We're doing this because the OpenAPI plugin might be using different methods
 * to make HTTP requests that we can't easily override.
 */
export default function ApiDemoPanel(props) {
  useEffect(() => {
    // Inject a script that intercepts and modifies all network requests
    const script = document.createElement("script");
    script.id = "json-rpc-url-fix";

    // Only add the script once
    if (!document.getElementById("json-rpc-url-fix")) {
      script.textContent = `
        (function() {
          console.log('JSON-RPC URL fix script initialized');

          // Override URL class
          const OriginalURL = window.URL;
          window.URL = function(url, base) {
            // Check if this is a JSON-RPC URL with method in path
            if (typeof url === 'string' && (
              url.includes('/eth_') ||
              url.includes('/web3_') ||
              url.includes('/net_') ||
              url.includes('/zkevm_') ||
              url.includes('/txpool_')
            )) {
              console.log('JSON-RPC URL intercepted:', url);
              try {
                // Parse the URL
                const urlObj = new OriginalURL(url, base);

                // Store the method as a custom property
                const methodMatch = urlObj.pathname.match(/\\/(\\w+)/);
                if (methodMatch) {
                  urlObj._jsonRpcMethod = methodMatch[1];

                  // Create a new URL with just the origin
                  const fixedUrl = urlObj.origin;
                  console.log('Fixed JSON-RPC URL:', fixedUrl);

                  // Pass to original constructor
                  return new OriginalURL(fixedUrl, base);
                }
              } catch (e) {
                console.error('Failed to fix JSON-RPC URL:', url, e);
              }
            }

            // For non-JSON-RPC URLs or if fixing failed, proceed normally
            return new OriginalURL(url, base);
          };

          // Copy all properties and prototype from original URL
          for (const prop in OriginalURL) {
            if (OriginalURL.hasOwnProperty(prop)) {
              window.URL[prop] = OriginalURL[prop];
            }
          }
          window.URL.prototype = OriginalURL.prototype;

          // Override XMLHttpRequest
          const originalOpen = XMLHttpRequest.prototype.open;
          XMLHttpRequest.prototype.open = function(method, url, ...rest) {
            if (typeof url === 'string' && (
              url.includes('/eth_') ||
              url.includes('/web3_') ||
              url.includes('/net_') ||
              url.includes('/zkevm_') ||
              url.includes('/txpool_')
            )) {
              console.log('XHR intercepted:', url);
              try {
                const urlObj = new OriginalURL(url);
                url = urlObj.origin;
                console.log('Fixed XHR URL:', url);
              } catch (e) {
                console.error('Failed to parse XHR URL:', url, e);
              }
            }
            return originalOpen.call(this, method, url, ...rest);
          };

          // Override fetch
          const originalFetch = window.fetch;
          window.fetch = function(input, init) {
            if (typeof input === 'string' && (
              input.includes('/eth_') ||
              input.includes('/web3_') ||
              input.includes('/net_') ||
              input.includes('/zkevm_') ||
              input.includes('/txpool_')
            )) {
              console.log('Fetch intercepted:', input);
              try {
                const urlObj = new OriginalURL(input);
                input = urlObj.origin;
                console.log('Fixed fetch URL:', input);
              } catch (e) {
                console.error('Failed to parse fetch URL:', input, e);
              }
            }
            return originalFetch.call(this, input, init);
          };

          // Also try to find and modify all API client instances
          setInterval(() => {
            // Look for any objects that might be an API client
            for (const key in window) {
              try {
                const obj = window[key];
                if (obj && typeof obj === 'object' && obj.axios) {
                  // Looks like an axios-based API client
                  if (!obj._patched) {
                    console.log('Found possible API client:', key);

                    // Patch the axios instance
                    const originalRequest = obj.axios.request;
                    obj.axios.request = function(config) {
                      if (config.url && (
                        config.url.includes('/eth_') ||
                        config.url.includes('/web3_') ||
                        config.url.includes('/net_') ||
                        config.url.includes('/zkevm_') ||
                        config.url.includes('/txpool_')
                      )) {
                        console.log('Axios request intercepted:', config.url);
                        try {
                          const urlObj = new OriginalURL(config.url);
                          config.url = urlObj.origin;
                          console.log('Fixed axios URL:', config.url);
                        } catch (e) {
                          console.error('Failed to parse axios URL:', config.url, e);
                        }
                      }
                      return originalRequest.call(this, config);
                    };

                    obj._patched = true;
                  }
                }
              } catch (e) {
                // Ignore errors from accessing certain properties
              }
            }
          }, 1000);
        })();
      `;

      document.head.appendChild(script);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
