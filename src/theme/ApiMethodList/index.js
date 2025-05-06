import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function ApiMethodList({ apiName }) {
  const apiMappings = {
    eth: {
      title: "Ethereum json-rpc API",
      description: "Standard Ethereum json-rpc API methods",
      basePath: "/cdk-erigon/json-rpc/eth",
      categories: [
        {
          name: "Chain State",
          methods: [
            {
              id: "eth-block-number",
              name: "eth_blockNumber",
              description: "Returns the number of the most recent block",
            },
            {
              id: "eth-chain-id",
              name: "eth_chainId",
              description: "Returns the chain ID used for signing replay-protected transactions",
            },
            {
              id: "eth-syncing",
              name: "eth_syncing",
              description: "Returns an object with data about the sync status",
            },
          ],
        },
        {
          name: "Block Information",
          methods: [
            {
              id: "eth-get-block-by-hash",
              name: "eth_getBlockByHash",
              description: "Returns information about a block by its hash",
            },
            {
              id: "eth-get-block-by-number",
              name: "eth_getBlockByNumber",
              description: "Returns information about a block by its number",
            },
            {
              id: "eth-get-block-transaction-count-by-hash",
              name: "eth_getBlockTransactionCountByHash",
              description: "Returns the number of transactions in a block by block hash",
            },
            {
              id: "eth-get-block-transaction-count-by-number",
              name: "eth_getBlockTransactionCountByNumber",
              description: "Returns the number of transactions in a block by block number",
            },
          ],
        },
        {
          name: "Transaction Information",
          methods: [
            {
              id: "eth-get-transaction-by-hash",
              name: "eth_getTransactionByHash",
              description: "Returns information about a transaction by hash",
            },
            {
              id: "eth-get-transaction-by-block-hash-and-index",
              name: "eth_getTransactionByBlockHashAndIndex",
              description: "Returns information about a transaction by block hash and index",
            },
            {
              id: "eth-get-transaction-by-block-number-and-index",
              name: "eth_getTransactionByBlockNumberAndIndex",
              description: "Returns information about a transaction by block number and index",
            },
            {
              id: "eth-get-transaction-receipt",
              name: "eth_getTransactionReceipt",
              description: "Returns the receipt of a transaction by hash",
            },
          ],
        },
        {
          name: "State Queries",
          methods: [
            {
              id: "eth-call",
              name: "eth_call",
              description: "Executes a new message call without creating a transaction",
            },
            {
              id: "eth-get-balance",
              name: "eth_getBalance",
              description: "Returns the balance of an account",
            },
            {
              id: "eth-get-code",
              name: "eth_getCode",
              description: "Returns the code at a given address",
            },
            {
              id: "eth-get-storage-at",
              name: "eth_getStorageAt",
              description: "Returns the value from a storage position at a given address",
            },
            {
              id: "eth-get-transaction-count",
              name: "eth_getTransactionCount",
              description: "Returns the number of transactions sent from an address",
            },
          ],
        },
        {
          name: "Transactions",
          methods: [
            {
              id: "eth-estimate-gas",
              name: "eth_estimateGas",
              description: "Returns an estimation of gas needed for a transaction",
            },
            {
              id: "eth-gas-price",
              name: "eth_gasPrice",
              description: "Returns the current gas price in wei",
            },
            {
              id: "eth-fee-history",
              name: "eth_feeHistory",
              description: "Returns a collection of historical gas information",
            },
            {
              id: "eth-max-priority-fee-per-gas",
              name: "eth_maxPriorityFeePerGas",
              description: "Returns an estimate of the max priority fee per gas",
            },
            {
              id: "eth-send-raw-transaction",
              name: "eth_sendRawTransaction",
              description: "Submits a pre-signed transaction for broadcast",
            },
          ],
        },
        {
          name: "Filters",
          methods: [
            {
              id: "eth-get-filter-changes",
              name: "eth_getFilterChanges",
              description: "Returns an array of logs which occurred since last poll",
            },
            {
              id: "eth-get-logs",
              name: "eth_getLogs",
              description: "Returns an array of all logs matching a given filter object",
            },
            {
              id: "eth-new-block-filter",
              name: "eth_newBlockFilter",
              description: "Creates a filter to notify when a new block arrives",
            },
            {
              id: "eth-new-filter",
              name: "eth_newFilter",
              description: "Creates a filter object based on filter options",
            },
            {
              id: "eth-new-pending-transaction-filter",
              name: "eth_newPendingTransactionFilter",
              description: "Creates a filter to notify for new pending transactions",
            },
            {
              id: "eth-uninstall-filter",
              name: "eth_uninstallFilter",
              description: "Uninstalls a filter with given id",
            },
          ],
        },
      ],
    },
    txpool: {
      title: "Txpool json-rpc API",
      description: "Methods for interacting with the transaction pool",
      basePath: "/cdk-erigon/json-rpc/txpool",
      categories: [
        {
          name: "Transaction Pool",
          methods: [
            {
              id: "txpool-content",
              name: "txpool_content",
              description: "Returns a detailed listing of all transactions in the pool",
            },
            {
              id: "txpool-inspect",
              name: "txpool_inspect",
              description: "Returns a human-readable overview of transaction pool contents",
            },
            {
              id: "txpool-status",
              name: "txpool_status",
              description: "Returns the number of transactions in the transaction pool",
            },
          ],
        },
      ],
    },
    zkevm: {
      title: "zkEVM json-rpc API",
      description: "Methods for interacting with zkEVM nodes",
      basePath: "/cdk-erigon/json-rpc/zkevm",
      categories: [
        {
          name: "Batch Information",
          methods: [
            {
              id: "zkevm-batch-number",
              name: "zkevm_batchNumber",
              description: "Returns the current batch number",
            },
            {
              id: "zkevm-batch-number-by-block-number",
              name: "zkevm_batchNumberByBlockNumber",
              description: "Returns the batch number associated with the given block number",
            },
            {
              id: "zkevm-get-batch-by-number",
              name: "zkevm_getBatchByNumber",
              description: "Returns information about a specific batch of transactions",
            },
          ],
        },
        {
          name: "Verification Status",
          methods: [
            {
              id: "zkevm-consolidated-block-number",
              name: "zkevm_consolidatedBlockNumber",
              description: "Returns the latest consolidated block number",
            },
            {
              id: "zkevm-is-block-consolidated",
              name: "zkevm_isBlockConsolidated",
              description: "Returns whether a block is consolidated or not",
            },
            {
              id: "zkevm-virtual-batch-number",
              name: "zkevm_virtualBatchNumber",
              description: "Returns the latest virtual batch number",
            },
            {
              id: "zkevm-verified-batch-number",
              name: "zkevm_verifiedBatchNumber",
              description: "Returns the latest verified batch number",
            },
          ],
        },
      ],
    },
  };

  const apiData = apiMappings[apiName] || null;

  if (!apiData) return <div>API data not found for {apiName}</div>;

  return (
    <div className={styles.apiMethodList}>
      <h2>Available Methods</h2>
      {apiData.categories.map((category) => (
        <div key={category.name} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category.name}</h3>
          <ul className={styles.methodList}>
            {category.methods.map((method) => (
              <li key={method.id} className={styles.methodItem}>
                <Link to={`${apiData.basePath}/${method.id}`} className={styles.methodLink}>
                  {method.name}
                </Link>
                <span className={styles.methodDescription}> – {method.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
