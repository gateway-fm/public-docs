import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/PrestoHomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Presto Knowledge Base
        </Heading>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/category/presto/">
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
    <Layout title={`Presto Documentation | Gateway.fm`} description="Knowledge base for Presto">
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
                  Presto is a cutting-edge platform designed specifically for web3 applications. It
                  serves as a comprehensive solution that enables developers to quickly and
                  effortlessly deploy their very own zkEVM Rollup, a powerful scaling solution on
                  the Ethereum network. With Presto, developers can take full advantage of the
                  benefits offered by zkEVM Rollup technology, such as enhanced scalability, reduced
                  transaction costs, and improved transaction speeds.
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
