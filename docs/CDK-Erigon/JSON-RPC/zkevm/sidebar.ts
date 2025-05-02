import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/zkevm/polygon-zkevm-node-api",
    },
    {
      type: "category",
      label: "Batch Information",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-batch-number",
          label: "zkevm_batchNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-batch-number-by-block-number",
          label: "zkevm_batchNumberByBlockNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-get-batch-by-number",
          label: "zkevm_getBatchByNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-verified-batch-number",
          label: "zkevm_verifiedBatchNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-virtual-batch-number",
          label: "zkevm_virtualBatchNumber",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Verification Status",
      items: [
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-consolidated-block-number",
          label: "zkevm_consolidatedBlockNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-is-block-consolidated",
          label: "zkevm_isBlockConsolidated",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "CDK-Erigon/JSON-RPC/zkevm/zkevm-is-block-virtualized",
          label: "zkevm_isBlockVirtualized",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
