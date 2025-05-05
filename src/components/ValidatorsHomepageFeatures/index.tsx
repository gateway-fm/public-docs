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
    description: <>Basics of the validators and staking.</>,
    link: "/validators/intro",
    linkText: "Learn More",
  },
  {
    title: "High Availability",
    description: <>How to deploy and manage your validators in high availability mode.</>,
    link: "/validators/high-availability",
    linkText: "Deployment Guide",
  },
  {
    title: "Nodes",
    description: <>Learn about diversity of the clients.</>,
    link: "/validators/nodes",
    linkText: "View Options",
  },
  {
    title: "Security",
    description: (
      <>How to mange your validator nodes securely and how to protect your private keys.</>
    ),
    link: "/validators/security",
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

export default function ValidatorsHomepageFeatures(): ReactNode {
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
