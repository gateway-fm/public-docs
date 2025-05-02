import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api",
    },
    {
      type: "category",
      label: "Chain State",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-block-number",
          label: "eth_blockNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-chain-id",
          label: "eth_chainId",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-syncing",
          label: "eth_syncing",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "State Queries",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-call",
          label: "eth_call",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-balance",
          label: "eth_getBalance",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-code",
          label: "eth_getCode",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-storage-at",
          label: "eth_getStorageAt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-transaction-count",
          label: "eth_getTransactionCount",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Block Information",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-block-by-hash",
          label: "eth_getBlockByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-block-transaction-count-by-hash",
          label: "eth_getBlockTransactionCountByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-block-transaction-count-by-number",
          label: "eth_getBlockTransactionCountByNumber",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction Information",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-transaction-by-block-hash-and-index",
          label: "eth_getTransactionByBlockHashAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-transaction-by-block-number-and-index",
          label: "eth_getTransactionByBlockNumberAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-transaction-by-hash",
          label: "eth_getTransactionByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-transaction-receipt",
          label: "eth_getTransactionReceipt",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-estimate-gas",
          label: "eth_estimateGas",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-gas-price",
          label: "eth_gasPrice",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-send-raw-transaction",
          label: "eth_sendRawTransaction",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Filters",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-filter-changes",
          label: "eth_getFilterChanges",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-get-logs",
          label: "eth_getLogs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-new-block-filter",
          label: "eth_newBlockFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-new-filter",
          label: "eth_newFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-new-pending-transaction-filter",
          label: "eth_newPendingTransactionFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/eth-uninstall-filter",
          label: "eth_uninstallFilter",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Web3",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/eth/web-3-client-version",
          label: "web3_clientVersion",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
