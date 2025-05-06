import React from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

// Utility functions for json-rpc
const getBaseUrl = (url: string) => {
  if (!url) return "https://rpc.stavanger.gateway.fm";

  try {
    // Handle absolute URLs
    if (url.includes("://")) {
      const parsedUrl = new URL(url);
      return parsedUrl.origin;
    }

    // For relative URLs, we need context
    // Try to extract server URL from the page
    if (typeof document !== "undefined") {
      // Check for servers in OpenAPI definition
      const serverElement = document.querySelector(".server-description");
      if (serverElement && serverElement.textContent) {
        const serverUrl = serverElement.textContent.trim();
        if (serverUrl.includes("://")) {
          return new URL(serverUrl).origin;
        }
      }
    }

    // If all else fails, use the default
    return "https://rpc.stavanger.gateway.fm";
  } catch (e) {
    console.error("Failed to parse URL:", url, e);
    return "https://rpc.stavanger.gateway.fm";
  }
};

export default function MethodEndpoint({
  method,
  path,
  context,
}: {
  method: string;
  path: string;
  context?: "operation" | "endpoint";
}): React.ReactElement {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  // Display the full base URL, not just the path
  const displayPath = getBaseUrl(path);

  // We keep the original path in a data attribute for reference
  return (
    <div
      className={clsx(
        styles.methodEndpoint,
        context === "operation" && styles.operation,
        context === "endpoint" && styles.endpoint,
      )}
      data-method={method}
      data-path={path}
      data-server-url={displayPath}
    >
      <span className={styles.method}>{method}</span>
      <span className={styles.path}>{displayPath}</span>
    </div>
  );
}
