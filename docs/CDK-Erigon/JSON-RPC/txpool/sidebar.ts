import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/txpool/txpool-json-rpc-api",
    },
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/txpool/txpool-content",
      label: "txpool_content",
      className: "api-method post",
    },
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/txpool/txpool-inspect",
      label: "txpool_inspect",
      className: "api-method post",
    },
    {
      type: "doc",
      id: "CDK-Erigon/JSON-RPC/txpool/txpool-status",
      label: "txpool_status",
      className: "api-method post",
    },
  ],
};

export default sidebar.apisidebar; 