---
sidebar_position: 3
title: Configuration Options
---

# CDK-Erigon Configuration Options

CDK-Erigon is a highly configurable node implementation for the Polygon zkEVM protocol. It can be deployed as a sequencer, or RPC node with various operational modes to suit different requirements for performance, security, and cost optimization.

## Operational Modes

CDK-Erigon supports several operational modes, each with different security and performance characteristics.

### Validium Mode

[Validium](https://wiki.polygon.technology/docs/cdk/validium-vs-rollup/) is the primary mode of operation for CDK-Erigon, offering optimal cost and performance with strong security guarantees.

In Validium mode, transaction data is kept off-chain while state validity is proven on-chain through zero-knowledge proofs. This significantly reduces gas costs compared to rollups while maintaining security.

#### Data Availability Options

In validium configurations, the approach to data availability (DA) is a critical design choice:

- **Local DA (Recommended)**: Stores transaction data locally on sequencer and/or validator nodes. This approach provides:
  - Lowest operational costs as data isn't stored on L1 or external DA solutions
  - Full control over your data storage infrastructure
  - Highest performance with minimal latency
  - Suitable for enterprise or application-specific chains
  
- **Alternative DA Solutions**: CDK-Erigon can also be integrated with various external DA solutions:
  - **Celestia**: A modular data availability layer specifically designed for blockchain systems
  - **Avail**: A data availability-focused blockchain built to serve as a secure base layer
  - **EigenDA**: A decentralized data availability solution built on Ethereum
  - **Custom DACs**: Data Availability Committees with configurable security parameters

Each DA solution offers different tradeoffs between decentralization, cost, and performance. The integration of these alternative solutions requires additional configuration and potentially custom development.

#### Pessimistic Proof (PP) + AggLayer

This configuration operates with:

- **[Pessimistic Proof](https://polygon.technology/blog/major-development-upgrade-for-a-multistack-future-pessimistic-proofs-live-on-agglayer-mainnet)**: A proof system developed by Polygon that assumes potential malicious behavior from connected chains. It allows transaction execution to proceed while verification occurs asynchronously, effectively prioritizing performance without compromising security guarantees.
- **[AggLayer](https://polygon.technology/agglayer)**: Polygon's Aggregation Layer technology that connects multiple ZK-secured chains through a common bridge and protocol. AggLayer aggregates ZK proofs from connected chains and provides a cryptographic guarantee of safety for cross-chain interoperability. This technology enables:
  - Unified liquidity across connected chains
  - Native token transfers without wrapping
  - Cross-chain transactions without the security risks of traditional bridges
  - Reduction of gas costs through amortization across connected chains

**Use case**: Ideal for high-throughput applications like gaming, NFT marketplaces, and DeFi platforms that require fast finality and low transaction costs.

#### Full Execution Proof (FEP)

The [FEP configuration](https://wiki.polygon.technology/docs/zkEVM/architecture/execution/):

- Generates complete validity proofs for each state transition using zero-knowledge cryptography
- Produces cryptographic proofs verifying every transaction's execution down to the opcode level
- Provides stronger security assurances at the cost of higher computational requirements
- Suitable for applications requiring maximum transaction verification guarantees

**Use case**: Recommended for high-value financial applications, institutional services, or compliance-focused applications that require maximum security guarantees.

### Rollup Mode

[Rollup mode](https://wiki.polygon.technology/docs/cdk/validium-vs-rollup/) is a less common configuration for CDK-Erigon that:

- Posts all transaction data directly to Ethereum L1
- Provides maximum data availability guarantees through Ethereum's security model
- Involves higher operational costs due to Ethereum gas fees for posting transaction data
- Maximizes security at the expense of cost-efficiency

**Use case**: Best for applications where data availability is critical, such as critical financial infrastructure or applications with regulatory requirements for public data availability.

### Sovereign Type1 Mode

Sovereign Type1 is a configuration that offers complete chain independence while maintaining Ethereum compatibility:

- Uses the Type1 (Patricia Merkle Trie) state structure for full Ethereum compatibility
- Operates as a standalone blockchain with its own security model and governance
- Can connect to the AggLayer
- Enables projects to launch their own dedicated chain with custom parameters while still benefiting from the broader ecosystem
- Supports integration with Ethereum through Pessimistic Proofs while maintaining independent operation

**Use case**: Ideal for projects requiring a dedicated blockchain with custom tokenomics, governance, or specialized performance characteristics while maintaining interoperability with the broader ecosystem.

## State Trie Types

CDK-Erigon supports two different state storage implementations, each offering different tradeoffs between compatibility and performance.

### Type1 (Patricia Merkle Trie - PMT)

- Implementation of the standard [Ethereum hexary Patricia Merkle Trie](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/) structure
- Uses the same hash functions and storage format as the Ethereum mainnet
- Provides full compatibility with existing Ethereum tooling and infrastructure
- Supports familiar development workflows for Ethereum developers
- Compatible with standard EVM inspection and debugging tools

**Use case**: Recommended when maximum compatibility with existing Ethereum tools, infrastructure, and development workflows is required.

### Type2 (Sparse Merkle Trie - SMT)

- Uses a binary [Sparse Merkle Trie](https://wiki.polygon.technology/docs/zkEVM/architecture/libraries/#state-management) structure specifically optimized for zero-knowledge proof generation
- More efficient for zkEVM-specific operations and proof generation
- Delivers better performance for certain operations but with some compatibility tradeoffs
- **Important Limitation**: When operating in Full Execution Proof mode, Type2 is currently limited to Berlin hardfork EVM mode of operation with some zkEVM-specific modifications

**Use case**: Better for performance-critical applications that can work within the constraints of Berlin hardfork compatibility.

## Hardfork Support

- **Type2 (SMT)**: Limited to [Berlin hardfork](https://ethereum.org/en/history/#berlin) with specific EVM adaptations when in FEP mode
- **Both Type1 and Type2**: Support [Pectra](https://www.eip7212.com/) (latest hardfork) and all associated EIPs when running in Pessimistic Proof mode (enabled via the traditional hardfork enablement in Erigon chainspec file)

## Configuration Matrix

| Feature | Validium+PP | Validium+FEP | Rollup | Sovereign Type1 |
|---------|------------|-------------|--------|-----------------|
| Data Availability | Off-chain | Off-chain | On-chain (L1) | Custom |
| Proof System | Pessimistic | Full Execution | Full Execution | Pessimistic |
| Cost Efficiency | Highest | Medium | Lowest | Custom |
| Security Level | High | Very High | Highest | Customizable |
| Supported State Trie | Type1 & Type2 | Type1 & Type2 (Berlin) | Type1 & Type2 | Type1 |
| Hardfork Support | Latest (Pectra) | Latest with Type1, Berlin with Type2 | Latest | Latest (Pectra) |

For detailed configuration options and parameters, refer to the [CDK-Erigon GitHub repository](https://github.com/gateway-fm/cdk-erigon).

These configuration options allow for deploying CDK-Erigon in various scenarios, balancing between performance, cost, and security requirements.

