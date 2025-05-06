---
sidebar_position: 2
title: Deploy Testnet
---

# Testnet Deployment Quickstart

This guide will help you quickly setup a local testing environment. To do this we will use Kurtosis-CDK. It will allow you to get started in a few commands, but remain powerful enough that you can dig deeper into more advanced functionality later.

## What is Kurtosis-CDK?

Kurtosis-CDK is an open-source tool that leverages Kurtosis to deploy a cdk-erigon based stack. This setup allows you to deploy and interact with a local CDK network, specifically configured for a validium setup.

## What is a Validium Setup?

A validium is a Layer 2 scaling solution which stores data off-chain. This approach offers high throughput and low costs.

## Prerequisites

- **Docker**: Make sure Docker is installed and running
- **Git**: For cloning repositories (if needed)
- **Terminal**: Command line access

## Installation & Setup

### 1. Install Kurtosis

**macOS:**

```bash
brew install kurtosis-tech/tap/kurtosis-cli
```

**Linux:**

```bash
curl -sSL https://get.kurtosis.com/install.sh | sh
```

Optional: Set up command-line completion for easier usage:

```bash
# Follow the instructions at:
# https://docs.kurtosis.com/guides/adding-command-line-completion
```

### 2. Install Cast (from Foundry)

Cast is a command-line tool for interacting with the Ethereum blockchain. The following command works on both macOS and Linux:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Follow the prompts to complete the installation, then run:

```bash
foundryup
```

### 3. Special Steps for Apple Silicon Macs

This step is only required for Apple Silicon Mac users. Linux users can skip this section.

If you're using an Apple Silicon Mac (M1/M2/M3), you might need additional steps for the prover image:

```bash
# Set Docker to use AMD64 platform
export DOCKER_DEFAULT_PLATFORM=linux/amd64

# Pull the prover image manually
docker pull hermeznetwork/zkevm-prover:v8.0.0-RC14-fork.12
```

Note: You may need to enable Rosetta support in Docker Desktop settings before running these commands.

## Deploying the Network

### Quick Deploy (10 minutes)

To quickly deploy a CDK network with default settings (works on both macOS and Linux):

```bash
kurtosis run --enclave cdk github.com/0xPolygon/kurtosis-cdk
```

This command creates an enclave named "cdk" and pulls the configuration directly from the GitHub repository.

### Start from Local Repository (Optional)

If you've cloned the kurtosis-cdk repository (works on both macOS and Linux):

```bash
# Navigate to your kurtosis-cdk directory
cd path/to/kurtosis-cdk

# Start the network from local files
kurtosis run --enclave cdk .
```

## Inspecting and Interacting with the Network

### View Network Layout

The following commands work on both macOS and Linux:

```bash
kurtosis enclave inspect cdk
```

This command shows all running services and their ports.

### Set Environment Variables for Tools

```bash
# Get the RPC endpoint for an Erigon node
export ETH_RPC_URL="$(kurtosis port print cdk cdk-erigon-node-001 rpc)"

# Verify connection by checking block number
cast block-number
```

### Find Important Service Endpoints

The following commands work on both macOS and Linux:

```bash
# L1 Node RPC endpoint
kurtosis port print cdk cdk-erigon-node-001 rpc

# Sequencer RPC endpoint
kurtosis port print cdk cdk-erigon-sequencer-001 rpc

# Sequencer Data Streamer endpoint
kurtosis port print cdk cdk-erigon-sequencer-001 data-streamer
```

## Monitoring and Debugging

### View Service Logs

The following commands work on both macOS and Linux:

```bash
# View aggregation layer logs
kurtosis service logs cdk agglayer --follow

# View sequencer logs
kurtosis service logs cdk cdk-erigon-sequencer-001 --follow
```

## Advanced: Building from Source

This command works on both macOS and Linux with Docker installed:

```bash
DOCKER_TAG=cdk-erigon:local make docker
```

## Cleanup

When you're done with your environment (works on both macOS and Linux):

```bash
# Clean up the specific enclave
kurtosis enclave rm cdk

# Or clean up everything
kurtosis clean --all
```

## Interacting with the Network

Once your network is running, you can interact with it using any Ethereum json-rpc compatible tool:

- **Cast**: For quick command-line operations

  ```bash
  # Get the latest block number
  cast block-number

  # Get chain ID
  cast chain-id

  # Get accounts
  cast accounts
  ```

- **Web3.js, ethers.js, or web3.py**: For programmatic interactions
- **MetaMask**: Configure a custom RPC using the endpoint from `kurtosis port print cdk cdk-erigon-node-001 rpc`

## Common Issues and Solutions

- **Docker Issues**: If containers fail to start, try restarting Docker
- **Port Conflicts**: If ports are already in use, Kurtosis will automatically use alternative ports
- **Image Download Issues**: For Apple Silicon, make sure you've set the Docker platform correctly

## Next Steps

- Explore deploying smart contracts to your local network
- Learn how to customize your deployment
- Explore the CDK architecture and components

## Resources

- [Kurtosis Documentation](https://docs.kurtosis.com/)
- [cdk-erigon Repository](https://github.com/0xPolygon/cdk-erigon)
- [Kurtosis-CDK Repository](https://github.com/0xPolygon/kurtosis-cdk)
