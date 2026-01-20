---
sidebar_position: 6
title: RPC Endpoints
---

# RPC Endpoints

CDK-Erigon provides json-rpc API endpoints for interacting with RPC nodes. These APIs are divided into namespaces:

## Ethereum JSON-RPC API

The standard Ethereum JSON-RPC API methods allow applications to interact with the blockchain in the same way they would with any Ethereum-compatible network.

[Explore Ethereum JSON-RPC API →](/cdk-erigon/json-rpc/eth/ethereum-json-rpc-api)

## zkEVM JSON-RPC API

The zkEVM-specific json-rpc API provides methods unique to the Polygon zkEVM implementation, including batch management, verification status, and other zkEVM-specific functionality.

[Explore zkEVM JSON-RPC API →](/cdk-erigon/json-rpc/zkevm/polygon-zkevm-node-api)

## Network Information

When connecting to cdk-erigon, you can use the following default endpoints:

### Local Node

- HTTP: `http://localhost:8545`
- WebSocket: `ws://localhost:8546`

### Gateway Public Endpoints

Gateway also provides a managed public testnet:

#### Stavanger Testnet

- HTTP: `https://rpc.stavanger.gateway.fm`
- WebSocket: `wss://rpc.stavanger.gateway.fm/ws`

## Security Recommendations

When exposing RPC endpoints, consider these security best practices:

1. Use TLS/SSL for all public-facing endpoints
2. Implement authentication mechanisms (API keys or JWT tokens)
3. Configure firewalls to restrict access to trusted IPs
4. Limit exposed API methods to only what is necessary

## Archival RPC by default

 All rollup RPC nodes operated by Gateway are archival. This means the standard RPC endpoint we provide is an archival endpoint (historical state is retained and queryable).
