import React, { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

const DEFAULT_BASE_URL = "https://rpc.stavanger.gateway.fm";

const resolveBaseUrl = (url: string): string => {
  try {
    if (!url) return DEFAULT_BASE_URL;
    if (url.includes("://")) {
      return new URL(url).origin;
    }
    const apiElement = document.querySelector("[data-server-url]");
    const fromAttr = apiElement?.getAttribute("data-server-url");
    if (fromAttr && fromAttr.includes("://")) {
      return new URL(fromAttr).origin;
    }
    return DEFAULT_BASE_URL;
  } catch {
    return DEFAULT_BASE_URL;
  }
};

const getMethodFromPath = (path: string) => {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  if (!cleanPath.includes("/")) return cleanPath;
  const parts = cleanPath.split("/");
  return parts[parts.length - 1] || "";
};

const createJsonRpcRequest = (method: string, params: any[] = []) => ({
  jsonrpc: "2.0",
  id: 1,
  method,
  params,
});

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return bytes + " bytes";
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1048576).toFixed(1) + " MB";
};

export default function SendButton(props: any): React.ReactElement {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [response, setResponse] = useState(null);
  const [requestInfo, setRequestInfo] = useState<{ url: string; body: any } | null>(null);
  const [isResponseOpen, setIsResponseOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverUrl, setServerUrl] = useState(DEFAULT_BASE_URL);

  useEffect(() => {
    if (props.url) {
      try {
        const resolved = resolveBaseUrl(props.url);
        setServerUrl(resolved);
      } catch {
        setServerUrl(DEFAULT_BASE_URL);
      }
    }
  }, [props.url]);

  const getRequestBody = () => {
    if (props.body) return props.body;
    let methodName = "";
    if (props.path) methodName = getMethodFromPath(props.path);
    if (methodName) return createJsonRpcRequest(methodName, []);
    return { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
  };

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      const body = getRequestBody();
      setRequestInfo({ url: serverUrl, body });
      const xhr = new XMLHttpRequest();
      xhr.open("POST", serverUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        setIsLoading(false);
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            setResponse(data);
            setIsResponseOpen(true);
            setShowSuccess(true);
            setShowError(false);
            setTimeout(() => setShowSuccess(false), 2000);
          } catch {
            setShowError(true);
            setShowSuccess(false);
            setTimeout(() => setShowError(false), 2000);
          }
        } else {
          setShowError(true);
          setShowSuccess(false);
          setTimeout(() => setShowError(false), 2000);
        }
      };
      xhr.onerror = function () {
        setIsLoading(false);
        setShowError(true);
        setShowSuccess(false);
        setTimeout(() => setShowError(false), 2000);
      };
      xhr.send(JSON.stringify(body));
    } catch {
      setIsLoading(false);
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const closeResponse = () => {
    setIsResponseOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeResponse();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isResponseOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isResponseOpen]);

  return (
    <div className={styles.sendButtonContainer}>
      <button
        className={clsx(
          styles.sendButton,
          showSuccess && styles.success,
          showError && styles.error,
          isLoading && styles.loading,
        )}
        onClick={sendRequest}
        disabled={isLoading}
      >
        {isLoading
          ? "Sending..."
          : showSuccess
          ? "Success!"
          : showError
          ? "Error!"
          : "Send Request"}
      </button>

      {requestInfo && (
        <div className={styles.requestInfoContainer}>
          <h3>Request Details</h3>
          <div>
            <strong>URL:</strong> {requestInfo.url}
          </div>
          <div className={styles.requestMethod}>
            <strong>Method:</strong> POST
          </div>
          <div>
            <strong>Body:</strong>
            <pre className={styles.requestContent}>{JSON.stringify(requestInfo.body, null, 2)}</pre>
          </div>
        </div>
      )}

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
          <pre className={styles.inlineResponseContent}>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {response &&
        isResponseOpen &&
        createPortal(
          <div className={styles.responseOverlay} onClick={closeResponse}>
            <div className={styles.responseContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.responseHeader}>
                <h3>Response</h3>
                <div className={styles.responseControls}>
                  <span className={styles.responseSize}>
                    {formatBytes(JSON.stringify(response).length)}
                  </span>
                  <button className={styles.closeButton} onClick={closeResponse} aria-label="Close">
                    ×
                  </button>
                </div>
              </div>
              <pre className={styles.responseContent}>{JSON.stringify(response, null, 2)}</pre>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
