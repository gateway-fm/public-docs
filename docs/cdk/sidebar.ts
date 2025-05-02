import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cdk/polygon-zkevm-node-api",
    },
    {
      type: "category",
      label: "eth_blockNumber",
      items: [
        {
          type: "doc",
          id: "cdk/eth-block-number",
          label: "eth_blockNumber",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_call",
      items: [
        {
          type: "doc",
          id: "cdk/eth-call",
          label: "eth_call",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_chainId",
      items: [
        {
          type: "doc",
          id: "cdk/eth-chain-id",
          label: "eth_chainId",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_estimateGas",
      items: [
        {
          type: "doc",
          id: "cdk/eth-estimate-gas",
          label: "eth_estimateGas",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_gasPrice",
      items: [
        {
          type: "doc",
          id: "cdk/eth-gas-price",
          label: "eth_gasPrice",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getBalance",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-balance",
          label: "eth_getBalance",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getBlockByHash",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-block-by-hash",
          label: "eth_getBlockByHash",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getBlockTransactionCountByHash",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-block-transaction-count-by-hash",
          label: "eth_getBlockTransactionCountByHash",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getBlockTransactionCountByNumber",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-block-transaction-count-by-number",
          label: "eth_getBlockTransactionCountByNumber",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getCode",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-code",
          label: "eth_getCode",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getFilterChanges",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-filter-changes",
          label: "eth_getFilterChanges",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getLogs",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-logs",
          label: "eth_getLogs",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getStorageAt",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-storage-at",
          label: "eth_getStorageAt",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getTransactionByBlockHashAndIndex",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-transaction-by-block-hash-and-index",
          label: "eth_getTransactionByBlockHashAndIndex",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getTransactionByBlockNumberAndIndex",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-transaction-by-block-number-and-index",
          label: "eth_getTransactionByBlockNumberAndIndex",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getTransactionByHash",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-transaction-by-hash",
          label: "eth_getTransactionByHash",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getTransactionCount",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-transaction-count",
          label: "eth_getTransactionCount",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_getTransactionReceipt",
      items: [
        {
          type: "doc",
          id: "cdk/eth-get-transaction-receipt",
          label: "eth_getTransactionReceipt",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_newBlockFilter",
      items: [
        {
          type: "doc",
          id: "cdk/eth-new-block-filter",
          label: "eth_newBlockFilter",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_newFilter",
      items: [
        {
          type: "doc",
          id: "cdk/eth-new-filter",
          label: "eth_newFilter",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_newPendingTransactionFilter",
      items: [
        {
          type: "doc",
          id: "cdk/eth-new-pending-transaction-filter",
          label: "eth_newPendingTransactionFilter",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_sendRawTransaction",
      items: [
        {
          type: "doc",
          id: "cdk/eth-send-raw-transaction",
          label: "eth_sendRawTransaction",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_syncing",
      items: [
        {
          type: "doc",
          id: "cdk/eth-syncing",
          label: "eth_syncing",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "eth_uninstallFilter",
      items: [
        {
          type: "doc",
          id: "cdk/eth-uninstall-filter",
          label: "eth_uninstallFilter",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "web3_clientVersion",
      items: [
        {
          type: "doc",
          id: "cdk/web-3-client-version",
          label: "web3_clientVersion",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
