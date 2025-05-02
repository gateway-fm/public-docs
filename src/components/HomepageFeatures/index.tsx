import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CDK-Erigon',
    description: (
      <>
        A high-performance, enterprise-grade node implementation optimized
        for the Polygon zkEVM protocol networks.
      </>
    ),
    link: '/CDK-Erigon/what-is-cdk-erigon',
    linkText: 'Learn More',
  },
  {
    title: 'Deploy Testnet',
    description: (
      <>
        Get started with testnet deployment and configure your CDK-Erigon
        node to connect to the network.
      </>
    ),
    link: '/CDK-Erigon/deploy-testnet',
    linkText: 'Deployment Guide',
  },
  {
    title: 'Configuration Options',
    description: (
      <>
        Explore the various configuration options available for
        customizing your CDK-Erigon node.
      </>
    ),
    link: '/CDK-Erigon/configuration-options',
    linkText: 'View Options',
  },
  {
    title: 'Ethereum JSON-RPC API',
    description: (
      <>
        Standard Ethereum JSON-RPC API methods for interacting with the 
        Ethereum blockchain through your CDK-Erigon node.
      </>
    ),
    link: '/CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api',
    linkText: 'API Reference',
  },
  {
    title: 'zkEVM JSON-RPC API',
    description: (
      <>
        Polygon zkEVM-specific JSON-RPC API methods for tracking the status 
        of transactions in the zkEVM consensus process.
      </>
    ),
    link: '/CDK-Erigon/JSON-RPC/zkevm/polygon-zkevm-node-api',
    linkText: 'API Reference',
  },
  {
    title: 'RPC Endpoints',
    description: (
      <>
        Connect to Gateway's infrastructure using our high-performance
        RPC endpoints for Polygon zkEVM networks.
      </>
    ),
    link: '/CDK-Erigon/rpc-endpoints',
    linkText: 'View Endpoints',
  }
];

function Feature({ title, description, link, linkText }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className="padding-horiz--md padding-vert--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <div className={styles.featureCardLink}>
            <Link
              className="button button--secondary button--sm"
              to={link}>
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row row--gap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
