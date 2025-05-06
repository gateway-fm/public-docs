import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/RpcHomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          RPC Knowledge Base
        </Heading>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/category/rpc/">
            Get Started
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
      title={`RPC Documentation | Gateway.fm`}
      description="Knowledge base for Hight Performant RPC API"
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
