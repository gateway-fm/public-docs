import React, { useEffect } from "react";

// Root component that wraps the entire app
export default function Root({ children }) {
  useEffect(() => {
    // Only run this code in the browser
    if (typeof window !== "undefined") {
      console.log("Root component mounted, initializing json-rpc URL fix");

      // Create a script element to inject our URL fixing code
      const script = document.createElement("script");
      script.id = "json-rpc-global-fix";

      // Only add this script once
      if (!document.getElementById("json-rpc-global-fix")) {
        script.textContent = `
          (function() {
            console.log('json-rpc global URL fix active');

            // The main goal: prevent URLs with json-rpc method names in the path
            // we need to intercept at multiple levels to ensure it works

            // --- LEVEL 1: Override the URL constructor ---
            const OriginalURL = window.URL;
            window.URL = function(url, base) {
              // Check if this is a json-rpc URL with method in path
              if (typeof url === 'string' && (
                url.includes('/eth_') ||
                url.includes('/web3_') ||
                url.includes('/net_') ||
                url.includes('/zkevm_') ||
                url.includes('/txpool_')
              )) {
                console.log('json-rpc URL constructor intercepted:', url);
                try {
                  // Parse the URL
                  const urlObj = new OriginalURL(url, base);
                  // Create a new URL with just the origin
                  const fixedUrl = urlObj.origin;
                  console.log('Fixed json-rpc URL:', fixedUrl);
                  return new OriginalURL(fixedUrl, base);
                } catch (e) {
                  console.error('Failed to fix json-rpc URL:', url, e);
                }
              }

              // For non-json-rpc URLs or if fixing failed, proceed normally
              return new OriginalURL(url, base);
            };

            // Copy all properties and prototype from original URL
            for (const prop in OriginalURL) {
              if (OriginalURL.hasOwnProperty(prop)) {
                window.URL[prop] = OriginalURL[prop];
              }
            }
            window.URL.prototype = OriginalURL.prototype;

            // --- LEVEL 2: Override XMLHttpRequest ---
            const originalOpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url, ...args) {
              if (typeof url === 'string' && (
                url.includes('/eth_') ||
                url.includes('/web3_') ||
                url.includes('/net_') ||
                url.includes('/zkevm_') ||
                url.includes('/txpool_')
              )) {
                console.log('json-rpc XHR intercepted:', url);
                try {
                  const urlObj = new OriginalURL(url);
                  url = urlObj.origin;
                  console.log('Fixed json-rpc XHR URL:', url);
                } catch (e) {
                  console.error('Failed to fix json-rpc XHR URL:', url, e);
                }
              }
              return originalOpen.call(this, method, url, ...args);
            };

            // --- LEVEL 3: Override fetch ---
            const originalFetch = window.fetch;
            window.fetch = function(input, init) {
              if (typeof input === 'string' && (
                input.includes('/eth_') ||
                input.includes('/web3_') ||
                input.includes('/net_') ||
                input.includes('/zkevm_') ||
                input.includes('/txpool_')
              )) {
                console.log('json-rpc fetch intercepted:', input);
                try {
                  const urlObj = new OriginalURL(input);
                  input = urlObj.origin;
                  console.log('Fixed json-rpc fetch URL:', input);
                } catch (e) {
                  console.error('Failed to fix json-rpc fetch URL:', input, e);
                }
              }
              return originalFetch.call(this, input, init);
            };

            // --- LEVEL 4: Look for axios and other HTTP clients ---
            const patchInterval = setInterval(() => {
              // Check for axios global
              if (window.axios && !window.axios._jsonRpcPatched) {
                console.log('Found global axios, patching it');
                const originalRequest = window.axios.request;
                window.axios.request = function(config) {
                  if (config.url && (
                    config.url.includes('/eth_') ||
                    config.url.includes('/web3_') ||
                    config.url.includes('/net_') ||
                    config.url.includes('/zkevm_') ||
                    config.url.includes('/txpool_')
                  )) {
                    console.log('json-rpc axios request intercepted:', config.url);
                    try {
                      const urlObj = new OriginalURL(config.url);
                      config.url = urlObj.origin;
                      console.log('Fixed json-rpc axios URL:', config.url);
                    } catch (e) {
                      console.error('Failed to fix json-rpc axios URL:', config.url, e);
                    }
                  }
                  return originalRequest.call(this, config);
                };
                window.axios._jsonRpcPatched = true;
              }

              // Scan for any buttons or forms that might trigger API requests
              const sendButtons = document.querySelectorAll('button');
              for (const button of sendButtons) {
                if (button.textContent.includes('Send') && !button._jsonRpcPatched) {
                  console.log('Found potential API send button:', button);
                  const originalClick = button.onclick;
                  button.onclick = function(e) {
                    console.log('Send button clicked, URL fix active');
                    if (originalClick) return originalClick.call(this, e);
                  };
                  button._jsonRpcPatched = true;
                }
              }
            }, 1000);

            // Clean up on page unload
            window.addEventListener('beforeunload', () => {
              clearInterval(patchInterval);
            });
          })();
        `;

        // Add the script to the head to ensure it runs early
        document.head.appendChild(script);
      }
    }
  }, []);

  // Just render the children
  return <>{children}</>;
}
