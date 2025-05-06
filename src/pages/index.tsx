import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Gateway.fm Documentation
        </Heading>
        <p className="hero__subtitle">High-performance blockchain infrastructure</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/cdk-erigon">
            CDK-Erigon Documentation
          </Link>
        </div>
      </div>
      <div className={styles.heroShape}></div>
    </header>
  );
}

function ProductCard({ title, description, link, linkText, icon }) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={styles.productCard}>
        <div className={styles.productIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.productCardLink}>
          <Link className="button button--secondary button--sm" to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Gateway.fm Documentation`}
      description="Technical documentation for Gateway.fm products and services"
    >
      <HomepageHeader />
      <main>
        <div className={styles.introSection}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2" className={styles.sectionTitle}>
                  Blockchain Infrastructure Solutions
                </Heading>
                <p className={styles.sectionDescription}>
                  Gateway.fm provides high-performance blockchain infrastructure solutions for
                  developers, validators and enterprises. Our documentation covers installation,
                  configuration, and API details for all our products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.products}>
          <div className="container">
            <div className="row">
              <ProductCard
                title="cdk-erigon"
                description="High-performance node implementation optimized for the Polygon zkEVM protocol networks."
                link="/cdk-erigon"
                linkText="Documentation"
                icon="⚡"
              />
              <ProductCard
                title="Validators"
                description="Welcome to the Ethereum Validator Knowledge Base, where you can find resources
about Ethereum staking and Gateway.FM validator service."
                link="/validators"
                linkText="Documentation"
                icon="⚡"
              />
              <ProductCard
                title="RPC"
                description="High-performance RPC service for Ethereum and Polygon zkEVM networks."
                link="/rpc"
                linkText="Documentation"
                icon="⚡"
              />
              {/* Additional product cards can be added here as they become available */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
