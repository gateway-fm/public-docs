---
title: The Merge
sidebar_position: 1
---

# The Merge

The Merge is the process of transitioning Ethereum from a Proof-Of-Work (PoW) to a Proof-Of-Stake (PoS) consensus mechanism. This significant upgrade aims to improve the network's scalability, security, and sustainability.

## What is The Merge?

The Merge refers to the integration of the existing Ethereum mainnet with the Beacon Chain, which is the PoS blockchain. This integration allows Ethereum to transition from PoW, where miners validate transactions, to PoS, where validators take on this role.

## Technical Details

The Merge is technically achieved through a special protocol between two nodes: the **Consensus Layer** (formerly known as the Beacon Chain) and the **Execution Layer** (formerly known as eth1). The Consensus Layer handles consensus, block production, and fork choice rules, while the Execution Layer is responsible for executing transactions and maintaining the blockchain state.

## Implications for Stakers

For stakers, The Merge means running two nodes side-by-side: one for the Consensus Layer and one for the Execution Layer. These nodes must be run in a one-to-one relationship. Running multiple Consensus Layers per Execution Layer is not allowed by the specification, and running multiple Execution Layers per Consensus Layer is untested and not recommended.

## Benefits of The Merge

- **Energy Efficiency**: PoS significantly reduces the energy consumption of the Ethereum network compared to PoW.
- **Security**: PoS enhances network security by making it more costly and difficult to attack the network.
- **Scalability**: The Merge lays the groundwork for future scalability upgrades, such as sharding, which will further increase the network's capacity.

## Further Reading

- [Nodes](/category/validator-nodes/)
- [Ethereum Foundation Blog on The Merge](https://ethereum.org/en/roadmap/merge/)
- [Ethereum 2.0 Specifications](https://github.com/ethereum/eth2.0-specs)
