---
title: Intro
sidebar_position: 1
---

# Introduction to Gateway Documentation

Gateway provides cutting-edge infrastructure for Web3 builders, with a focus on L2 solutions powered by our high-performance node implementations. This documentation covers our key products and technologies.

## CDK-Erigon: Our High-Performance Node

CDK-Erigon is a high-performance fork of [Erigon Ethereum client](https://github.com/erigontech/erigon), for syncing Polygon zkEVM protocol networks. Built with speed and efficiency in mind, it delivers exceptional performance as a sequencer and RPC node.

### Background

Developed by the Gateway R&D team over an 18-month period, CDK-Erigon represents a significant engineering effort focused on performance optimization and usability improvements. The node implementation serves as the backbone for Gateway's L2 deployment offerings, and is the default node of choice in our [Presto platform](https://gateway.fm/presto).

### Key Performance Features

- **Blazing Fast Block Times**: 250ms block times make for a low latency chain
- **High Throughput**: Handle up to 30 MGas/s continous throughput, enabling performance to rival Coinbase Base (see https://www.growthepie.xyz/fundamentals/throughput)
- **Efficient Storage**: Optimized for low disk footprint compared to other node implementations (Erigon's efficient storage is utilized in CDK-Erigon)
- **High-Performance RPC**: Deliver fast responses when querying blockchain data
- **Rapid Sync**: Quick bootstrapping through custom data streaming protocol

## Documentation Sections

### Getting Started

- [What is CDK-Erigon?](/CDK-Erigon/what-is-cdk-erigon) - Overview and background
- [Deploy Testnet](/CDK-Erigon/deploy-testnet) - Quick start guide for testnet deployment

### Technical Reference

- [Configuration Options](/CDK-Erigon/configuration-options) - Detailed settings and parameters
- [RPC Endpoints](/CDK-Erigon/rpc-endpoints) - Available API endpoints for integration
- [JSON-RPC APIs](/CDK-Erigon/JSON-RPC/eth/ethereum-json-rpc-api) - Comprehensive API reference

### Project Information

- [Roadmap](/CDK-Erigon/roadmap) - Upcoming features and development plans
- [Releases](/CDK-Erigon/releases) - Latest versions and changelog information
