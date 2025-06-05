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
    description: <>Ethereum RPC provides a standard interface for interacting with Ethereum nodes.</>,
    link: "/category/rpc/",
    linkText: "Learn More",
  },
  {
    title: "Gnosis",
    description: <>Gnosis RPC enables seamless access to the Gnosis blockchain services.</>,
    link: "/rpc/gnosis",
    linkText: "Gnosis",
  },
  {
    title: "Soroban",
    description: <>Soroban RPC provides tools for engaging with the Soroban blockchain platform.</>,
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
