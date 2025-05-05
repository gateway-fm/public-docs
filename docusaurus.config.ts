import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gateway.fm Documentation',
  tagline: 'High-performance infrastructure for Polygon zkEVM',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.gateway.fm',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gateway-fm',
  projectName: 'public-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem",
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic", // configured for preset-classic
        config: {
          eth: {
            specPath: "api-specs/cdk-erigon.yaml",
            outputDir: "docs/CDK-Erigon/JSON-RPC/eth",
            sidebarOptions: {
              // groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          zkevm: {
            specPath: "api-specs/zkevm-methods.yaml",
            outputDir: "docs/CDK-Erigon/JSON-RPC/zkevm",
            sidebarOptions: {
              // groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          txpool: {
            specPath: "api-specs/txpool.yaml",
            outputDir: "docs/CDK-Erigon/JSON-RPC/txpool",
            sidebarOptions: {
              // Comment out or remove the groupPathsBy to not group by tag
              // groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Gateway.fm',
      logo: {
        alt: 'Gateway.fm Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          to: '/cdk-erigon',
          label: 'CDK-Erigon',
          position: 'left',
        },
        {
          to: '/validators',
          label: 'Validators',
          position: 'left',
        },
        {
          to: '/rpc',
          label: 'RPC',
          position: 'left',
        },
        {
          href: 'https://gateway.fm',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/gateway-fm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Validators',
              to: '/catalog/validators',
            },
            {
              label: 'CDK-Erigon',
              to: '/CDK-Erigon/what-is-cdk-erigon',
            },
            {
              label: 'Deployment Guide',
              to: '/CDK-Erigon/deploy-testnet',
            },
            {
              label: 'Configuration',
              to: '/CDK-Erigon/configuration-options',
            }
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Presto',
              href: 'https://gateway.fm/presto',
            },
            {
              label: 'RPC',
              href: 'https://gateway.fm/rpc',
            },
            {
              label: 'Blueprints',
              href: 'https://gateway.fm/presto/#blueprints',
            },
            {
              label: 'Staking',
              href: 'https://gateway.fm/staking',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/gateway_eth',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/gateway-fm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gateway-fm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gateway.fm`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
