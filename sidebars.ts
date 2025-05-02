import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import ethSidebar from './docs/CDK-Erigon/JSON-RPC/eth/sidebar';
import zkevmSidebar from './docs/CDK-Erigon/JSON-RPC/zkevm/sidebar';
// Import will be used after generating documentation
import txpoolSidebar from './docs/CDK-Erigon/JSON-RPC/txpool/sidebar';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'CDK-Erigon',
      collapsed: false,
      items: [
        'CDK-Erigon/what-is-cdk-erigon',
        'CDK-Erigon/releases',
        'CDK-Erigon/roadmap',
        'CDK-Erigon/deploy-testnet',
        'CDK-Erigon/configuration-options',
        {
          type: 'category',
          label: 'JSON-RPC',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'CDK-Erigon/rpc-endpoints',
          },
          items: [
            {
              type: 'category',
              label: 'eth',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api',
              },
              items: ethSidebar,
            },
            {
              type: 'category',
              label: 'zkevm',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'CDK-Erigon/JSON-RPC/zkevm/polygon-zkevm-node-api',
              },
              items: zkevmSidebar,
            },
            {
              type: 'category',
              label: 'txpool',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'CDK-Erigon/JSON-RPC/txpool/txpool-json-rpc-api',
              },
              items: txpoolSidebar,
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
