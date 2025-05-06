---
title: Resource Scaling
sidebar_label: Resource Scaling
---

# Resource Scaling

Efficient resource scaling is essential for maintaining the performance and reliability of validator nodes. This guide provides insights into managing various resources effectively.

## Disk & Storage

- **Disk Type**: Use SSDs for validators. NVMe drives offer higher performance but are more costly and may not be necessary unless pushing node limits.
- **Monitoring**: Continuously monitor disk space (see [Monitoring](monitoring.md)). Nodes use databases that grow due to fragmentation, even when pruning data.
- **Free Space**: Maintain at least 20% free disk space to ensure smooth operations.
- **Disk Expansion**: Expand disks as needed. Ensure a clean shutdown of nodes before expansion to prevent data corruption, especially for non-transactional databases.

## Network

- **Peer Connectivity**: A robust network of peers ensures high participation rates. Aim for a symmetric network with good throughput (100mb/s+) and proper external IP access.
- **Peer Count**: Handle 100-200 peers per node to increase the likelihood of timely attestation inclusion, leading to higher rewards.

## CPU

- **Resource Requirements**: Both nodes and validator clients require significant CPU resources for syncing, consensus verification, and block building.
- **Minimum Specs**: Do not go below 16GHz for each component: CL, EL, and Validator Client.

## Uptime & Failover

- **Uptime Importance**: Maximize uptime to ensure optimal performance, despite generous requirements ([Slashing And Penalties](../basics/slashing-and-penalties.md)).
- **Redundancy**: Some [validator clients](/category/validator-clients/) support redundant setups, monitoring multiple nodes simultaneously.
- **Failover**: Refer to the [HA section](/category/high-availability/) for detailed failover strategies.

## Further Reading

Explore additional resources to enhance your understanding of resource scaling and management.
