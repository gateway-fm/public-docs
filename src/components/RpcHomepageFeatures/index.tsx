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
    title: "Ethereum",
    description: <>Ethereum RPC</>,
    link: "/category/rpc/",
    linkText: "Learn More",
  },
  {
    title: "Fantom",
    description: <>Fantom RPC.</>,
    link: "/rpc/fantom",
    linkText: "Deployment Guide",
  },
  {
    title: "Gnosis",
    description: <>Gnosis.</>,
    link: "/rpc/gnosis",
    linkText: "Gnosis",
  },
  {
    title: "Lukso",
    description: <>Lukso .</>,
    link: "/rpc/lukso",
    linkText: "Lukso",
  },
  {
    title: "Soroban",
    description: <>Soroban.</>,
    link: "/rpc/soroban",
    linkText: "Soroban",
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
