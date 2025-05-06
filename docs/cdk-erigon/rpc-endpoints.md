---
sidebar_position: 4
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

Gateway also provides managed public endpoints for the zkEVM networks:

#### Mainnet

- HTTP: `https://zkevm.gateway.fm/v1/mainnet`
- WebSocket: `wss://zkevm.gateway.fm/ws/v1/mainnet`

#### Testnet

- HTTP: `https://zkevm.gateway.fm/v1/testnet`
- WebSocket: `wss://zkevm.gateway.fm/ws/v1/testnet`

## Security Recommendations

When exposing RPC endpoints, consider these security best practices:

1. Use TLS/SSL for all public-facing endpoints
2. Implement authentication mechanisms (API keys or JWT tokens)
3. Configure firewalls to restrict access to trusted IPs
4. Limit exposed API methods to only what is necessary
