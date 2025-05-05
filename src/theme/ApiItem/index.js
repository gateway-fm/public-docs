import React, { useEffect } from "react";
import ApiItem from "@theme-original/ApiItem";
import { useLocation } from "@docusaurus/router";
import ApiMethodList from "@theme/ApiMethodList";

const injectAxiosInterceptor = () => {
  if (typeof window !== "undefined" && window.axios && !window.__axiosInterceptorInjected) {
    window.__axiosInterceptorInjected = true;
    const originalRequest = window.axios.request;
    window.axios.request = function (config) {
      if (
        config.url &&
        (config.url.includes("/eth_") ||
          config.url.includes("/web3_") ||
          config.url.includes("/net_") ||
          config.url.includes("/zkevm_") ||
          config.url.includes("/txpool_"))
      ) {
        config.url = config.url.split("/").slice(0, 3).join("/");
      }
      return originalRequest.call(this, config);
    };
  }
};

export default function ApiItemWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    injectAxiosInterceptor();

    const script = document.createElement("script");
    script.textContent = `
      (function() {
        const originalFetch = window.fetch;
        window.fetch = function(input, init) {
          if (typeof input === 'string' && (
            input.includes('/eth_') ||
            input.includes('/web3_') ||
            input.includes('/net_') ||
            input.includes('/zkevm_') ||
            input.includes('/txpool_')
          )) {
            try {
              const url = new URL(input);
              input = url.origin;
            } catch (e) {}
          }
          return originalFetch.call(this, input, init);
        };

        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, ...rest) {
          if (typeof url === 'string' && (
            url.includes('/eth_') ||
            url.includes('/web3_') ||
            url.includes('/net_') ||
            url.includes('/zkevm_') ||
            url.includes('/txpool_')
          )) {
            try {
              const urlObj = new URL(url);
              url = urlObj.origin;
            } catch (e) {}
          }
          return originalOpen.call(this, method, url, ...rest);
        };
      })();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  return <ApiItem {...props} />;
}
