import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

/**
 * Component that generates a categorized list of API endpoints based on sidebar data
 * 
 * @param {Object} props Component props
 * @param {string} props.sidebarPath Path to the sidebar file to parse (e.g., 'eth' or 'zkevm')
 * @returns {JSX.Element} Rendered component
 */
export default function ApiEndpointsList({ sidebarPath }) {
  // Import the sidebar data dynamically
  let sidebarData;
  try {
    // Dynamic import based on the provided sidebar path
    if (sidebarPath === 'eth') {
      sidebarData = require('../../docs/CDK-Erigon/JSON-RPC/eth/sidebar').default;
    } else if (sidebarPath === 'zkevm') {
      sidebarData = require('../../docs/CDK-Erigon/JSON-RPC/zkevm/sidebar').default;
    } else if (sidebarPath === 'txpool') {
      sidebarData = require('../../docs/CDK-Erigon/JSON-RPC/txpool/sidebar').default;
    } else {
      return <div>Error: Invalid sidebar path specified.</div>;
    }
  } catch (error) {
    console.error('Error loading sidebar data:', error);
    return <div>Error loading API endpoints. Please check console for details.</div>;
  }

  // Filter out the intro document (first item)
  const introItem = sidebarData[0]; // Usually the first item is the intro page
  const otherItems = sidebarData.slice(1);
  
  // Check if there are category items or if it's a flat structure
  const categories = otherItems.filter(item => item.type === 'category');
  const endpoints = otherItems.filter(item => item.type === 'doc');
  
  // No endpoints found in either structure
  if ((categories.length === 0 && endpoints.length === 0) || 
      (categories.length > 0 && categories.every(cat => !cat.items || cat.items.length === 0))) {
    return <div>No API endpoints found.</div>;
  }

  return (
    <div className="api-endpoints-list">
      <h2>Available Endpoints</h2>
      
      {/* If we have categories, render them */}
      {categories.length > 0 && (
        categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{category.label}</h3>
            <ul>
              {category.items.map((endpoint, endpointIndex) => (
                <li key={endpointIndex}>
                  <Link to={`/CDK-Erigon/JSON-RPC/${sidebarPath}/${endpoint.id.split('/').pop()}`}>
                    {endpoint.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
      
      {/* If we have flat endpoints, render them without category */}
      {endpoints.length > 0 && (
        <ul>
          {endpoints.map((endpoint, endpointIndex) => (
            <li key={endpointIndex}>
              <Link to={`/CDK-Erigon/JSON-RPC/${sidebarPath}/${endpoint.id.split('/').pop()}`}>
                {endpoint.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 