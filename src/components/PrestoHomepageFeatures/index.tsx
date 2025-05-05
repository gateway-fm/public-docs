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
    title: "Fundamentals",
    description: <>Basics about Presto product.</>,
    link: "/category/fundamentals/",
    linkText: "Learn More",
  },
  {
    title: "Overview of Presto",
    description: <>.</>,
    link: "/category/overview/",
    linkText: "Learn More",
  },
  {
    title: "For Developers",
    description: <>.</>,
    link: "/category/features-for-developers/",
    linkText: "Learn More",
  },
  {
    title: "For Enterprise Customers",
    description: <>.</>,
    link: "/category/for-enterprise-customers/",
    linkText: "Learn More",
  },
  {
    title: "Pricing and Trials",
    description: <>.</>,
    link: "/category/pricing-and-trial/",
    linkText: "Check it out",
  },
  {
    title: "Stavanger Testnet",
    description: <>.</>,
    link: "/category/stavanger-testnet/",
    linkText: "Try it out",
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
