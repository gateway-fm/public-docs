---
slug: /
title: Home
---

Welcome to the home for all CDK Erigon Node API methods and [Polygon zkEVM-specific Node API](https://github.com/0xPolygonHermez/cdk-erigon?tab=readme-ov-file#zkevm-specific-api-support) methods, indicated with the `zkevm_` namespace.

## What is Polygon CDK Erigon?

CDK Erigon is a fork of [Erigon](https://github.com/erigontech/erigon?tab=readme-ov-file#erigon), optimized for syncing with the Polygon zkEVM network.

Due to Erigon's high-performance as an Ethereum client, CDK Erigon nodes do not require advanced hardware or weeks to sync in _full archive node_ mode.

CDK Erigon is therefore a highly configurable, modular node that can be implemented as a sequencer or RPC node in a ZK-rollup setting.

These nodes are essential infrastructure for building L2 scalability solutions for Ethereum.

Their major benefits are fast synchronisation times and reduced gas costs for users, without compromising decentralization and security.

## What is Polygon CDK Erigon API?

Polygon CDK Erigon API is an easy and standardised way to access blockchain data pertaining to Polygon zkEVM network events.

Applications must connect to an RPC node in order to read data from the Polygon CDK Erigon API.

Polygon zkEVM node is compatible with the Ethereum RPC specification, and support most of the methods from Ethereum’s [JSON-RPC specification](https://ethereum.github.io/execution-apis/api-documentation/).

Polygon zkEVM node implements a unique `zkevm_` namespace for accessing additional information relevant to the Layer 2 networking.
