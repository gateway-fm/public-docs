import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          CDK-Erigon Documentation
        </Heading>
        <p className="hero__subtitle">
          Welcome to the Ethereum Validator Knowledge Base, where you can find resources about
          Ethereum staking and Gateway.FM validator service.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/CDK-Erigon/what-is-cdk-erigon">
            Get Started
          </Link>
          <Link
            className={clsx("button button--outline button--lg", styles.buttonLight)}
            to="/CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api"
          >
            API Reference
          </Link>
        </div>
      </div>
      <div className={styles.heroShape}></div>
    </header>
  );
}

export default function Page(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`CDK-Erigon Documentation | Gateway.fm`}
      description="High-performance node implementation for Polygon zkEVM protocol networks"
    >
      <HomepageHeader />
      <main>
        <div className={styles.introSection}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2" className={styles.sectionTitle}>
                  Built for Performance and Reliability
                </Heading>
                <p className={styles.sectionDescription}>
                  CDK-Erigon is a high-performance, enterprise-grade node implementation
                  specifically optimized for the Polygon zkEVM protocol networks. Built on the
                  robust Erigon architecture and maintained by Gateway.fm, it delivers unparalleled
                  efficiency, reliability, and synchronization speeds for your blockchain
                  infrastructure needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
