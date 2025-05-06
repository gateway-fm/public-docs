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
    title: "Basics",
    description: <>Learn the fundamentals of validators and the staking process in blockchain networks.</>,
    link: "/category/validators/",
    linkText: "Learn More",
  },
  {
    title: "High Availability",
    description: <>Guidelines for deploying and managing validators to ensure high availability and reliability.</>,
    link: "/category/high-availability",
    linkText: "Deployment Guide",
  },
  {
    title: "Nodes",
    description: <>Explore the variety of client options available for validator nodes and their features.</>,
    link: "/category/validator-nodes",
    linkText: "View Options",
  },
  {
    title: "Security",
    description: (
      <>Best practices for managing validator nodes securely and protecting private keys from threats.</>
    ),
    link: "/category/security",
    linkText: "Best Practices",
  },
];

function Feature({ title, description, link, linkText }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className="padding-horiz--md padding-vert--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <div className={styles.featureCardLink}>
            <Link className="button button--secondary button--sm" to={link}>
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
