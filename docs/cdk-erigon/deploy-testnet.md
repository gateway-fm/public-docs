# Manually Running a CDK-Erigon **zkEVM** Testnet Against Sepolia

This guide outlines the steps to manually deploy and run a Polygon CDK L2 zkEVM chain using `cdk-erigon` as the execution client, anchored to the Sepolia L1 testnet, and utilizing a Data Availability Committee (DAC).

:::note
- Report any content issues on our docs repo: https://github.com/gateway-fm/public-docs
:::

## Introduction

The goal is to set up a functional L2 **zkEVM** network with `cdk-erigon` as the sequencer and execution environment. Transaction data will be managed by a DAC, with attestations anchored to Sepolia L1 for data availability guarantees. This involves deploying L1 contracts (including those specific to Validium and DAC management from the `zkevm-contracts` repository, and `PolygonRollupManager` from `zkevm-contracts`), configuring and running DAC nodes, and then setting up the L2 components (`cdk-erigon`, `cdk-node`).

## Prerequisites

### Software:
*   **Git**: For cloning repositories, and package installation.
*   **Go**: Version 1.21+ (for `cdk-erigon`, `cdk-node`, DAC nodes).
*   **Node.js & npm**: For L1 contract deployment tools (Hardhat). The `zkevm-contracts` repository specifies Node.js v16.x, while `zkevm-contracts` is more flexible. Using a Node Version Manager (nvm) is recommended (ensure v16.x is active for `zkevm-contracts` steps).
*   **Docker**: (Recommended) For running components in isolated environments.
*   **Build Essentials**: `make`, C++ compiler (like `g++`). For Debian/Ubuntu, you can install these with `sudo apt-get update && sudo apt-get install build-essential g++`. For `cdk-erigon` dependencies, you\'ll also need `libgmp-dev` and `libomp-dev`.
*   **Ethereum Tools**: `cast` (from Foundry) or `curl` for interacting with RPC endpoints.

### L1 Setup (Sepolia):
*   **Sepolia RPC Endpoint**: OurCustom RPC provider with gas fee configuration or [run your own local Sepolia node](https://docs.erigon.tech/nodes/ethereum)).
*   **Funded Sepolia Account**: An Ethereum account (EOA) with sufficient Sepolia ETH from a [Faucet](https://docs.metamask.io/developer-tools/faucet/) to deploy L1 contracts and pay for transaction fees. You will need its private key.

## Phase 1: L1 Contract Deployment (on Sepolia)

The L2 Validium chain requires a set of smart contracts deployed on L1 (Sepolia). The primary contracts for the Validium functionality (`PolygonZKEVM`, `PolygonDataCommittee.sol`, PolygonZkEVM-specific Bridge & Global Exit Root, and Verifier) as well as the L2 genesis configuration will be generated and deployed using the `gateway-fm/zkevm-contracts` repository. The `PolygonRollupManager` will be deployed using the `0xPolygonHermez/zkevm-contracts` repository and configured with the outputs from `zkevm-contracts`.

### Part 1.A: Setup, Generate L2 Genesis, and Deploy Validium Suite from `zkevm-contracts`

1.  **Clone and Prepare `zkevm-contracts` Repository (on VM):**
    ```bash
    # Navigate to your main CDK setup directory, e.g., ~/cdk-testnet-setup/
    cd ~/cdk-testnet-setup/ 
    git clone https://github.com/gateway-fm/zkevm-contracts.git
    cd zkevm-contracts
    # Ensure you are using a compatible Node.js version (e.g., v16.x via nvm)
    # nvm use 16 
    npm install 
    ```
    *   This repository contains `PolygonZkEVM.sol`, `PolygonDataCommittee.sol`, Validium-specific versions of `PolygonZkEVMBridge.sol` and `PolygonZkEVMGlobalExitRoot.sol`, `FflonkVerifier.sol`, and their deployment/genesis scripts.

2.  **Configure Hardhat and Environment for `zkevm-contracts` (on VM):**
    *   **Create `.env` file** in `~/cdk-testnet-setup/zkevm-contracts/` with your Sepolia provider URL
        ```env
        # ~/cdk-testnet-setup/zkevm-contracts/.env
        SEPOLIA_PROVIDER_URL=https://ethereum-sepolia-rpc.publicnode.com 
        # INFURA_PROJECT_ID=your_infura_id (if your provider URL template in hardhat.config.js needs it)
        ```
    *   **If you aren't using Infura, update `hardhat.config.js`** in `~/cdk-testnet-setup/zkevm-contracts/` to ensure the `sepolia` network configuration correctly uses `process.env.SEPOLIA_PROVIDER_URL`.
    *   **For testing you can also add `MNEMONIC` to this file, and addresses will be derived, however this is not recommended for obvious reasons.**

3.  **Configure `deployment/deploy_parameters.json` in `zkevm-contracts` (on VM):**
    *   Navigate to `~/cdk-testnet-setup/zkevm-contracts/deployment/`.
    *   Copy `deploy_parameters.json.example` to `deploy_parameters.json`.
    *   Edit `deploy_parameters.json` (set `"deployerPvtKey"`, your EOA for admin roles, L2 `"chainID"`, `"forkID"`, `"maticTokenAddress":"0x0...0"`, `"realVerifier": true`, `"setupEmptyCgit add .ommittee": false`, etc.).
    *   You need 8 addresses (and private keys):
        - `Deployer` (`deployerPvtkey`, `PolygonZkEVMDeployerAddress`)
        - `Initial Polygon zkEVM Deployer Owner` (`initialPolygonZkEVMDeployerOwner`)
        - `Polygon zkEVM Owner` (`zkEVMOwner`)
        - `Matic Token` (`maticTokenAddress`)
        - `Timelock` (`timelockAddress`)
        - `Admin` (`admin`)
        - `Trusted Aggregator` (`trustedAggregator`)
        - `Trusted Sequencer` (`trustedSequencer`)
    * You need to configure the other options as you see fit:
        - `forkID` 12 is recommended
        - `chainID` you can select this
        - `trustedSequencerURL` will be the URL of your cdk-erigon sequencer
        - `salt` this is required if you wish to redeploy using the same addresses (in the case of any issues, e.g. deployer runs out of funds)

4.  **Prepare testnet deploy**
    *   **If you are not using Infura, edit the `deployment/testnet/prepareTestnet.js` to use `process.env.SEPOLIA_PROVIDER_URL` instead of the Infura URL
    *   ** Run the script**
        ```bash
        npm prepare:testnet:PolygonZkEVM:sepolia
        ```
    *   ** Successful output will show 

5. **Run `deploy:PolygonZkEVM:sepolia`

4.  **Run Deployment Scripts from `zkevm-contracts` (on VM):**
    *   Ensure you are in the `~/cdk-testnet-setup/zkevm-contracts/` directory.
    *   **Generate L2 Genesis for zkEVM:**
        ```bash
        # This script runs on a local Hardhat network by default to generate genesis.json
        npx hardhat run deployment/1_createGenesis.js 
        ```
        This script creates `deployment/genesis.json` which defines the L2 genesis state for the zkEVM chain. This file (and its `root` hash) will be crucial.
    *   **Deploy PolygonZkEVMDeployer:**
        ```bash
        npx hardhat run deployment/2_deployPolygonZkEVMDeployer.js --network sepolia
        ```
        This script deploys `PolygonZkEVMDeployer.sol` and updates `deployment/deploy_parameters.json` with its address. Verify this update.
    *   **Deploy Core zkEVM Contracts:**
        ```bash
        # Make sure .openzeppelin/sepolia.json does NOT exist before running if you had previous failed attempts
        # rm -f .openzeppelin/sepolia.json 
        npx hardhat run deployment/3_deployContracts.js --network sepolia
        ```
        This script deploys `PolygonDataCommittee.sol`, `PolygonZkEVM.sol`, the Validium-specific Bridge, Global Exit Root, and `FflonkVerifier.sol`. It requires `deployment/genesis.json` (created by `1_createGenesis.js`) and creates `deployment/deploy_output.json` with contract addresses.

5.  **Collect Deployed Addresses and L2 Genesis Info from `zkevmm-contracts`:**
    *   The L2 genesis file is `~/cdk-testnet-setup/zkevm-contracts/deployment/genesis.json`. This will be used for `cdk-erigon` L2 node configuration.
    *   Open `~/cdk-testnet-setup/zkevm-contracts/deployment/deploy_output.json`.
    *   Note down addresses for: `PolygonDataCommitteeAddress`, `PolygonZkEVMAddress`, `bridgeAddress` (Validium Bridge), `polygonZkEVMGlobalExitRootAddress` (Validium GER), `verifierAddress` (`FflonkVerifier.sol`), `proxyAdminAddress`.

### Part 1.B: Setup and Deploy `PolygonRollupManager` from `zkevm-contracts`

1.  **Prepare `zkevm-contracts` Repository (on VM):**
    *   Navigate to `~/cdk-testnet-setup/zkevm-contracts/`.
    *   Ensure `SEPOLIA_PROVIDER` and `CDK_L1_PRIVATE_KEY` are exported.
    *   `hardhat.config.ts` should be correctly set up.
    *   **EIP-155 Compliance Note:** When running deployment scripts from `zkevm-contracts` against a live network like Sepolia, ensure that transactions are EIP-155 compliant. If you encounter "legacy pre-eip-155 transactions not supported" errors:
        *   Verify that `hardhat.config.ts` in `zkevm-contracts` correctly specifies the `chainId` (e.g., `11155111` for Sepolia) for your target network.
        *   Ensure the deployment scripts (e.g., `2_deployPolygonZKEVMDeployer.ts`, `3_deployContracts.ts`, `4_createRollup.ts`) are correctly loading and using a signer that is properly initialized with the network's provider (which includes the `chainId`). The scripts might need modification if they default to a signer that isn't EIP-155 aware or if they manually construct transactions without including the `chainId`. The private key for the deployer should be loaded via `process.env.CDK_L1_PRIVATE_KEY`.

2.  **Configure `deployment/v2/deploy_parameters.json` in `zkevm-contracts` (on VM):**
    *   Set `"admin"`, `"initialZkEVMDeployerOwner"` to your EOA.
    *   Use a fresh `"salt"`.
    *   Set `"test": true`.
    *   `"polTokenAddress"`: `"0x0000000000000000000000000000000000000000"`.

3.  **Configure `deployment/v2/create_rollup_parameters.json` in `zkevm-contracts` (on VM):**
    *   `"chainID"`: Your L2 Chain ID (e.g., `20240517` - must match value in `zkevm-contracts/deployment/deploy_parameters.json`).
    *   `"forkID"`: (e.g., `11` - must match).
    *   `"adminZkEVM"`, `"trustedSequencer"`: Your EOA.
    *   `"useValidium"`: `true`.
    *   `"cdkValidiumAddress"`: Address from `zkevm-contracts/deployment/deploy_output.json`.
    *   `"cdkDataCommitteeAddress"`: Address from `zkevm-contracts/deployment/deploy_output.json`.
    *   `"bridgeAddress"`: Validium Bridge address from `zkevm-contracts/deployment/deploy_output.json`.
    *   `"globalExitRootAddress"`: Validium GER address from `zkevm-contracts/deployment/deploy_output.json`.
    *   `"maticAddress"`: Verifier address (`FflonkVerifier`) from `zkevm-contracts/deployment/deploy_output.json`.
    *   `"genesisRoot"`: The `"root"` hash from `~/cdk-testnet-setup/zkevm-contracts/deployment/genesis.json`.
    *   `"gasTokenAddress"`: `"0x0000000000000000000000000000000000000000"`.

4.  **Run Deployment Scripts from `zkevm-contracts` (on VM):**
    *   Ensure you are in `~/cdk-testnet-setup/zkevm-contracts/`.
    *   **Deploy PolygonZkEVMDeployer (utility):**
        ```bash
        npx hardhat run deployment/v2/2_deployPolygonZKEVMDeployer.ts --network sepolia
        ```
        Updates `deploy_parameters.json` in `zkevm-contracts`.
    *   **Deploy PolygonRollupManager:**
        ```bash
        # IMPORTANT: Before running, ensure 3_deployContracts.ts in zkevm-contracts
        # will NOT attempt to deploy PolygonZkEVM.sol (if FflonkVerifier is used),
        # its own Bridge, or its own GER. Modify script or parameters as needed.
        # Goal: ONLY deploy PolygonRollupManager and its ProxyAdmin from this script.
        # rm -f .openzeppelin/sepolia.json # If needed for a clean slate
        npx hardhat run deployment/v2/3_deployContracts.ts --network sepolia
        ```
        This creates `deployment/v2/deploy_output.json` (in `zkevm-contracts`). Note the `PolygonRollupManager` address.
    *   **Finalize L1 Setup (Create Rollup):**
        *   Ensure the `PolygonRollupManager` address is correctly referenced or implicitly used by `4_createRollup.ts` (e.g. it might read it from `zkevm-contracts/deployment/v2/deploy_output.json`).
        ```bash
        npx hardhat run deployment/v2/4_createRollup.ts --network sepolia
        ```
        This script reads `create_rollup_parameters.json` and links `PolygonRollupManager` with the deployed Validium contracts.
    *   **(Note: `1_createGenesis.ts` from `zkevm-contracts` is now considered redundant as the definitive L2 genesis (root hash and allocs) should come from `zkevm-contracts/deployment/genesis.json`.)**

### Part 1.C: Consolidated L1 Contract Addresses

(List of contracts remains similar, but source and genesis file are now clearer)

---
(Rest of the guide for Phase 2 onwards will need to be updated to use addresses and the genesis file from `zkevm-contracts` for cdk-erigon setup.)

This revised structure should be more accurate. The main remaining challenge is ensuring `3_deployContracts.ts` in `zkevm-contracts` can be controlled to only deploy `PolygonRollupManager` without conflicts if its verifier/bridge/GER are not needed.

## Phase 2: L2 Genesis and Component Configuration

### 1. L2 Genesis Files (for `cdk-erigon` "Dynamic Chain Configuration")

The L1 contract deployment script `1_createGenesis.ts` (from `zkevm-contracts`) produces a `genesis.json` file. This file contains the initial L2 state, including account allocations and a crucial `root` hash. We will use a utility script from `cdk-erigon` to transform this `genesis.json` into the format required by `cdk-erigon` for its dynamic configuration, and extract the `root` hash.

Assume:
*   You have cloned the `0xPolygonHermez/cdk-erigon` repository on your VM, e.g., at `~/cdk-erigon`.
*   The `genesis.json` from `1_createGenesis.ts` is located at `~/cdk-testnet-setup/zkevm-contracts/deployment/v2/genesis.json` on your VM.
*   You have created your L2 configuration directory on your VM, e.g., `~/my-cdk-l2-config`.

**A. Generating `dynamic-{yournetwork}-allocs.json`:**

The `cdk-erigon` repository contains a Go utility script at `cmd/hack/allocs/main.go` that converts the `genesis.json` (output by `zkevm-contracts`) into the `allocs.json` format that `cdk-erigon` expects.

1.  **Navigate to the script directory (on your VM):**
    ```bash
    cd ~/cdk-erigon/cmd/hack/allocs
    ```
    If you haven't cloned `cdk-erigon` yet, do so first:
    ```bash
    git clone https://github.com/0xPolygonHermez/cdk-erigon.git ~/cdk-erigon
    cd ~/cdk-erigon/cmd/hack/allocs
    ```

2.  **Run the script:**
    The script takes the input `genesis.json` file as an argument and outputs `allocs.json` in the current directory (`~/cdk-erigon/cmd/hack/allocs/`).
    ```bash
    go run main.go ~/cdk-testnet-setup/zkevm-contracts/deployment/v2/genesis.json
    ```
    This will create a file named `allocs.json`.

3.  **Move and Rename the Output:**
    Move the generated `allocs.json` to your L2 configuration directory and rename it according to your network name (e.g., `testnet16may`).
    ```bash
    # Example:
    mv ~/cdk-erigon/cmd/hack/allocs/allocs.json ~/my-cdk-l2-config/dynamic-testnet16may-allocs.json
    ```
    Replace `testnet16may` with your chosen `{yournetwork}` name. This `dynamic-{yournetwork}-allocs.json` file now defines the L2 genesis block's account allocations in the correct format for `cdk-erigon`.

**B. Creating `dynamic-{yournetwork}-chainspec.json` and Extracting the `root` Hash:**

This file defines L2-specific parameters, including the genesis `root` hash.

1.  **Extract the `root` hash:**
    The original `genesis.json` file (e.g., `~/cdk-testnet-setup/zkevm-contracts/deployment/v2/genesis.json`) contains a top-level `root` field. Its value is the state root that `cdk-erigon` needs for the chainspec.
    Open `~/cdk-testnet-setup/zkevm-contracts/deployment/v2/genesis.json` on your VM (e.g., using `cat` or `less`) and find the `root` value. It will look something like this:
    ```json
    {
      "root": "0x6656f117f77edbf25369f77f876f97e7ea2ba450243575b482bd22e5edfcc6c6", // <-- THIS IS THE VALUE YOU NEED
      "genesis": [
        // ... allocations ...
      ]
      // ... other fields ...
    }
    ```
    Copy this `root` hash value.

2.  **Create `dynamic-{yournetwork}-chainspec.json`:**
    In your L2 configuration directory (e.g., `~/my-cdk-l2-config`), create a file named `dynamic-testnet16may-chainspec.json` (again, replace `testnet16may` with your actual network name). Populate it with the following structure, inserting the `root` hash you extracted:

    ```json
    {
      "root": "0xYOUR_EXTRACTED_ROOT_HASH_FROM_GENESIS.JSON_HERE",
      "chainId": 20240517, // Replace with your L2 Chain ID (must match create_rollup_parameters.json)
      "forkID": 13,       // Replace with your ForkID (must match create_rollup_parameters.json and CDK_VERSION_MATRIX.MD)
      "consensus": {
        "engine": "ethereal",
        "ethereal": {
          "blockPeriod": 2,
          "blockGasLimit": 30000000
        }
      },
      "homesteadBlock": 0,
      "eip150Block": 0,
      "eip155Block": 0,
      "eip158Block": 0,
      "byzantiumBlock": 0,
      "constantinopleBlock": 0,
      "petersburgBlock": 0,
      "istanbulBlock": 0,
      "muirGlacierBlock": 0,
      "berlinBlock": 0,
      "londonBlock": 0,
      "arrowGlacierBlock": 0,
      "grayGlacierBlock": 0,
      "shanghaiTime": 0,
      "cancunTime": 0,
      "pragueTime": 0
    }
    ```
    *   **Crucially, replace `0xYOUR_EXTRACTED_ROOT_HASH_FROM_GENESIS.JSON_HERE` with the actual `root` value you copied.**
    *   Ensure `chainId` and `forkID` precisely match what you used in `create_rollup_parameters.json` and what your L1 contracts were deployed for. For example, if your `create_rollup_parameters.json` had `chainID: 20240517` and `forkID: 13`, use those exact values here.
    *   The hardfork activation blocks/times (e.g., `homesteadBlock`, `shanghaiTime`) should generally be set to `0` for a new custom chain, meaning all features are active from genesis. Consult `cdk-erigon` documentation or examples for specific version recommendations if you have different requirements.

*   **`dynamic-{yournetwork}-conf.json`**: Additional L2 node configurations if required by `cdk-erigon`. This might include gas limits, fee structures, etc. For an initial setup, this file might not be strictly necessary if defaults are acceptable or most settings are covered in the main `dynamic-{yournetwork}.yaml` configuration file for `cdk-erigon`. Refer to `cdk-erigon` documentation if you encounter issues that suggest this file is needed.

This method ensures your `allocs.json` is correctly formatted for `cdk-erigon` and that the `chainspec.json` uses the authentic `root` hash from your L1-derived genesis.

**Summary of Core L2 Configuration Files for `cdk-erigon` Dynamic Setup:**

For `cdk-erigon` to run with dynamic configuration, the key files you prepare are:

1.  **Main YAML Configuration File (e.g., `dynamic-testnet16may.yaml`)**:
    *   This is the primary file you pass to the `cdk-erigon` command (e.g., via the `--config` flag).
    *   It contains most operational parameters for the node, such as network settings (ports, APIs), paths (`datadir`, `zkevm.genesis-config-path`), L1 connection details, L1 contract addresses, sequencer settings (including private keys if `cdk-erigon` is sending batches), logging levels, and various `zkevm.*` tuning parameters.

2.  **Genesis Allocations File (e.g., `dynamic-testnet16may-allocs.json`)**:
    *   Located in the directory specified by `zkevm.genesis-config-path` in your main YAML file.
    *   Defines the initial state of accounts on your L2 chain, including pre-funded accounts and pre-deployed contract code and storage. This file is generated using the `cdk-erigon` utility script from the `genesis.json` output of the L1 contract deployment process.

3.  **Genesis Chainspec File (e.g., `dynamic-testnet16may-chainspec.json`)**:
    *   Also located in the directory specified by `zkevm.genesis-config-path`.
    *   Defines fundamental, immutable properties of the L2 chain established at genesis. This includes the genesis state `root` hash, your unique L2 `chainId`, the `forkID` for the CDK version, consensus engine parameters (like block period and gas limit), and activation blocks/times for various Ethereum hardforks (typically all set to 0 for a new chain to enable all features from the start).

4.  **Genesis Configuration File (e.g., `dynamic-testnet16may-conf.json`)**:
    *   This file also resides in the directory specified by `zkevm.genesis-config-path` and is required for dynamic chain configurations.
    *   It is used for additional overrides or specific chain parameters relevant at genesis that are not covered by `chainspec.json` or the main YAML file. The specific parameters it might contain can vary based on `cdk-erigon` version and detailed chain setup needs. If `cdk-erigon` expects particular settings in this file, its documentation or startup behavior would typically guide its content. For example, it might include overrides for gas parameters or fee collector addresses if not set elsewhere or if a distinct genesis-time configuration is needed for these.

With these files correctly prepared, `cdk-erigon` can initialize and operate your custom L2 chain.

### 2. `cdk-erigon` Configuration

Create `dynamic-{yournetwork}.yaml` in your L2 config directory. This is the main configuration file for `cdk-erigon`.

```yaml
# Example structure for dynamic-{yournetwork}.yaml
# (Refer to cdk-erigon's hermezconfig-cardona.yaml.example and dynamic config docs)

# Basic settings
datadir: "/data/cdk-erigon-data" # Path to store L2 chain data
chain: "dynamic-{yournetwork}"   # Must match your genesis file naming convention
http: true
http.addr: "0.0.0.0"
http.port: 8545
http.api: ["eth", "net", "web3", "zkevm", "txpool"] # IMPORTANT: Include "zkevm"
private.api.addr: "localhost:9091"                 # For cdk-erigon internal/debug APIs

# L2 Chain Parameters
zkevm.l2-chain-id: {YOUR_L2_CHAIN_ID} # e.g., 2001

# L1 Configuration (Sepolia)
zkevm.l1-chain-id: 11155111 # Sepolia Chain ID
zkevm.l1-rpc-url: "{YOUR_SEPOLIA_RPC_URL}"
# zkevm.l1-first-block: {L1_BLOCK_NUMBER_OF_FIRST_CONTRACT_DEPLOYMENT} # Optional: for faster initial sync

# L1 Contract Addresses (FROM PHASE 1)
zkevm.address-sequencer: "{DEPLOYED_POLYGONROLLUPMANAGER_CONTRACT_ADDRESS_ON_SEPOLIA}" # This contract manages sequencer rights and receives batches.
zkevm.address-zkevm: "{DEPLOYED_POLYGONZKEVM_CONTRACT_ADDRESS_ON_SEPOLIA}"
zkevm.address-rollup: "{DEPLOYED_POLYGONROLLUPMANAGER_CONTRACT_ADDRESS_ON_SEPOLIA}"
zkevm.address-ger-manager: "{DEPLOYED_POLYGONZKEVMGLOBALEXITROOT_CONTRACT_ADDRESS_ON_SEPOLIA}"
# zkevm.address-bridge: "{DEPLOYED_BRIDGE_CONTRACT_ADDRESS_ON_SEPOLIA}" # If cdk-erigon needs it directly
# zkevm.address-dac: "{DEPLOYED_DATACOMMITTEE_CONTRACT_ADDRESS_ON_SEPOLIA}" # If cdk-erigon interacts with L1 DAC contract

# Data Stream (if cdk-node or other components consume it)
# zkevm.data-stream-port: 9092
# zkevm.data-stream-host: "0.0.0.0"

# Sequencer Specific Config (If cdk-erigon is the sequencer)
# zkevm.executor-urls: "http://localhost:50071" # URL of your zkevm-prover/executor mock or real
# zkevm.executor-strict: true # Set to false for mock proving without verification (dev only)
# zkevm.l2-sequencer-rpc-url: "http://localhost:8545" # Itself, if sequencer
# zkevm.l2-datastreamer-url: "ws://localhost:9092" # If providing a data stream

# Other settings from cdk-erigon examples (timeouts, cache, SMT, etc.)
# ...
```
*   **Paths to Genesis**: `cdk-erigon` will look for `dynamic-{yournetwork}-allocs.json`, etc., in a directory specified by `--zkevm.genesis-config-path` or relative to its execution/config if structured correctly. The `kurtosis-cdk` Starlark scripts (`cdk_erigon.star`) show how these files are made available to the `cdk-erigon` service.

### 3. `cdk-node` Configuration (Sequence Sender / Aggregator)

The `cdk-node` component (from `0xPolygon/cdk` or `0xPolygonHermez/zkevm-node` if using older stack) is responsible for preparing batches of L2 transactions and submitting them to the L1. If `cdk-erigon` is not set as the sequencer, `cdk-node` can also take on the sequencer role. Additionally, if a prover is integrated, `cdk-node` can manage the aggregation of proofs.
It usually takes a TOML configuration file.

*   Create a `config.toml` for `cdk-node`.
*   **Key Parameters**:
    *   L1 RPC URL (Sepolia) and L1 Chain ID.
    *   Deployed L1 contract addresses (`PolygonZkEVM.sol`, `PolygonRollupManager.sol`).
    *   L2 `cdk-erigon` RPC endpoint (e.g., `http://localhost:8545`).
    *   L2 Chain ID.
    *   **L1 Signer Configuration**: Private key of the Sepolia account that will pay for sending batch data to L1.
    *   Batching parameters (max batch size, timeout).
    *   Data Availability configuration (e.g., whether to post to L1 calldata, or to a DAC).
    *   Prover endpoint (if using a real or mock prover for aggregation). `kurtosis-cdk` configures this for its prover service.
    *   Log level and paths.

```toml
# Example structure for cdk-node config.toml
# (This is a generic structure; refer to actual cdk-node/zkevm-node documentation for specifics)

[Log]
  Level = "info"
  Outputs = ["stderr"]

[EthTxManager] # Manages L1 transactions
  L1JsonRPC = "{YOUR_SEPOLIA_RPC_URL}"
  L1ChainID = 11155111
  PrivateKey = "{YOUR_L1_SEQUENCER_ACCOUNT_PRIVATE_KEY}" # Account to send batches to L1
  # Other gas price/nonce settings

[Etherman] # Interacts with L1 contracts
  URL = "{YOUR_SEPOLIA_RPC_URL}"
  PolygonZkEVMAddress = "{DEPLOYED_POLYGONZKEVM_CONTRACT_ADDRESS_ON_SEPOLIA}" # Used for reading L2 state and events.
  RollupManagerAddress = "{DEPLOYED_POLYGONROLLUPMANAGER_CONTRACT_ADDRESS_ON_SEPOLIA}" # Primary contract for sending batch information and interacting with sequencer details.
  DACAddress = "{DEPLOYED_DATACOMMITTEE_CONTRACT_ADDRESS_ON_SEPOLIA}" # For Validium
  # Potentially other L1 contract addresses

[Synchronizer] # Syncs L2 state with L1 events
  L1InfoTreeUpdatePeriod = 100 # Example
  PollingPeriod = "2s"

[L2GasPriceSuggester]
  Enabled = true
  DefaultGasPrice = 1000000000 # 1 Gwei

[RPC] # RPC server for cdk-node itself (if it runs one, or for internal comms)
  Host = "0.0.0.0"
  Port = "9090" # Example port

[SequenceSender]
  CDKErigonJsonRPCURL = "http://localhost:8545" # Your cdk-erigon L2 RPC
  # Batching parameters (MaxTxsPerBatch, MaxBatchBytesSize, MaxBatchTime)

[DataAvailability] # Configuration for Data Availability
  Mode = "DAC" # "Calldata" for Rollup, "DAC" for Validium
  # DAC Specific Configuration (if Mode = "DAC")
  # DAC nodes are typically run as separate services. cdk-node needs to know how to interact with them.
  # This might involve a central discovery service or direct gRPC/HTTP endpoints of DAC nodes.
  # Example (highly dependent on the DAC implementation in 0xPolygon/cdk-data-availability):
  # DACHost = "dac-coordinator.yourdomain.com" # Or an IP
  # DACPort = "50051"
  # DACContractAddress = "{DEPLOYED_DATACOMMITTEE_CONTRACT_ADDRESS_ON_SEPOLIA}" # For fetching committee info
  # Detailed DAC node configuration and setup is specific to the `0xPolygon/cdk-data-availability` implementation.
  # If you require assistance deploying and configuring a robust DAC for your Validium chain, Gateway.fm offers support and managed solutions. ([https://gateway.fm](https://gateway.fm))

[Aggregator] # If cdk-node also handles aggregation with a prover
  Enabled = true # or false if only sequencing
  ProverURL = "http://localhost:50071" # URL of your zkevm-prover (mock or real)
  # Aggregation parameters

# ... other sections as per cdk-node documentation ...
```
*   *Examine the `kurtosis-cdk` files that configure and launch the `cdk-node` equivalent (e.g., `cdk_sequencer_node.star` or similar) to understand its specific config file structure and parameters, especially for DAC integration.*

## Phase 3: Building and Running Components

### 1. Build `cdk-erigon`
```bash
git clone https://github.com/0xPolygonHermez/cdk-erigon.git
cd cdk-erigon
# Ensure Go version is correct, and C++ build tools (g++, libgmp-dev, libomp-dev) are installed
make build-libs # If on x86 Linux for optimal performance. For other architectures (e.g., macOS ARM), this step might be skipped or have alternatives; consult cdk-erigon documentation if issues arise.
make cdk-erigon
# The binary will be in ./build/bin/cdk-erigon
```

### 2. Build `cdk-node`
The `cdk-node` repository is typically `0xPolygon/cdk`.
```bash
git clone https://github.com/0xPolygon/cdk.git
cd cdk/cdk-node # Or the relevant subdirectory for the node
# Follow build instructions, likely using 'go build' or a Makefile
make build # Or similar, check its README
# The binary will be in a 'dist' or 'build' folder
```

### 3. Running `cdk-erigon`
Ensure your L2 configuration directory (e.g., `my-cdk-chain-config`) with `dynamic-{yournetwork}.yaml` and the genesis JSON files is accessible.

```bash
# Set this if cdk-erigon will be the sequencer
export CDK_ERIGON_SEQUENCER=1

# Path to your cdk-erigon binary and config file
/path/to/cdk-erigon/build/bin/cdk-erigon \
  --config=/path/to/my-cdk-chain-config/dynamic-{yournetwork}.yaml \
  --zkevm.genesis-config-path=/path/to/my-cdk-chain-config/ # Directory of allocs, chainspec etc.
  # Add other CLI flags as needed (e.g., --datadir if not in YAML)
```
*   `cdk-erigon` will initialize its data directory and start syncing/sequencing. Monitor its logs.

### 3.5. (For Validium) Running the Data Availability Committee (DAC) Nodes

If you're setting up a Validium, you need to run Data Availability Committee (DAC) nodes. These nodes store the L2 transaction data off-L1 and provide attestations.

*   **Get DAC Node Software**:
    *   The DAC node software is typically found in a repository like `0xPolygon/cdk-data-availability`.
    ```bash
    git clone https://github.com/0xPolygon/cdk-data-availability.git
    cd cdk-data-availability
    ```
*   **Build DAC Nodes**:
    *   Follow the build instructions in the repository (likely Go-based).
*   **Configure DAC Nodes**:
    *   Each DAC node will require configuration, including:
        *   Its own private key for signing attestations.
        *   Connection details for other DAC nodes (for P2P communication).
        *   Connection to the L1 `DataCommittee.sol` contract to know the current committee members and rules.
        *   Storage backend for the L2 data.
        *   Network ports for listening to data from `cdk-node` and for inter-DAC communication.
    *   *Refer to the `0xPolygon/cdk-data-availability` repository for example configurations and startup scripts.*
*   **Run DAC Nodes**:
    *   Start multiple DAC nodes (as per your committee size and fault tolerance requirements).
    *   Ensure they can communicate with each other and with your `cdk-node` (which will send data to them).

### 4. Running `cdk-node`
```bash
# Path to your cdk-node binary and its config.toml
/path/to/cdk-node/binary \
  --config /path/to/my-cdk-chain-config/cdk-node-config.toml
  # Add other CLI flags as needed
```
*   `cdk-node` will connect to `cdk-erigon` and Sepolia. 
*   If `cdk-erigon` is the main sequencer (`CDK_ERIGON_SEQUENCER=1` set for it), `cdk-node` acts as a **Sequence Sender**, taking blocks produced by `cdk-erigon` and posting them to L1 (or DAC).
*   If `cdk-erigon` is *not* the sequencer, `cdk-node` itself will sequence transactions from the L2 tx pool.
*   It will start processing L2 transactions, forming batches, and sending them to L1 (or to DAC for Validium). Monitor its logs.

## Phase 4: (Optional) Prover Setup

For a true zkEVM, a prover generates validity proofs for L2 batches. For development and testing, a **mock prover** is often used.

*   **Mock Prover**:
    *   The `kurtosis-cdk` package typically deploys a mock version of the `zkevm-prover` (`0xPolygonHermez/zkevm-prover`).
    *   `cdk-erigon` (if sequencing and configured for it) or `cdk-node` (if aggregating) needs to be configured with the mock prover's endpoint (e.g., `zkevm.executor-urls` in `cdk-erigon.yaml` or `ProverURL` in `cdk-node.toml`).
    *   If running a mock prover, you'd clone `0xPolygonHermez/zkevm-prover`, build it, and run its mock/gRPC server component.
*   **Real Prover**:
    *   Integrating a real prover is complex and resource-intensive. Refer to the `0xPolygonHermez/zkevm-prover` documentation.

## Phase 5: (Optional) Bridge Setup

If you deployed the `PolygonZkEVMBridge.sol` and want to test bridging:

*   **Bridge Service**: `0xPolygonHermez/zkevm-bridge-service` might be needed to facilitate communication between L1/L2 and query bridge state. Configure it with L1/L2 RPCs and contract addresses.
*   **Bridge UI**: `0xPolygonHermez/zkevm-bridge-ui` provides a web interface. Configure it with the bridge service endpoint and contract addresses.
*   The `kurtosis-cdk` package often includes these (`cdk_bridge_infra.star`).

## Phase 6: Verification and Interaction

1.  **Check Node Syncing**:
    *   `cdk-erigon` logs should indicate its progress and connection to L1.
    *   `cdk-node` logs should show interaction with `cdk-erigon`, L1 batch submissions, and (for Validium) interaction with DAC nodes.

2.  **L2 RPC Queries**:
    *   Get L2 Chain ID:
        ```bash
        cast chain-id --rpc-url http://localhost:8545
        ```
    *   Get Latest L2 Block Number:
        ```bash
        cast block-number --rpc-url http://localhost:8545
        ```
    *   Get Balance of a Pre-funded Account (from your `allocs.json`):
        ```bash
        cast balance {ACCOUNT_ADDRESS} --rpc-url http://localhost:8545
        ```

3.  **Check Batch Status (zkEVM RPCs)**:
    These RPCs are exposed by `cdk-erigon` if the `zkevm` API is enabled.
    *   `zkevm_batchNumber`: Latest batch number produced by the L2 sequencer.
    *   `zkevm_virtualBatchNumber`: Latest batch whose data has been sent to L1.
    *   `zkevm_verifiedBatchNumber`: Latest batch that has been proven on L1 (will stay at 0 or low if using a mock prover that doesn't submit real proofs or if no aggregator submits proofs).
    ```bash
    curl -X POST --data '{"jsonrpc":"2.0","method":"zkevm_batchNumber","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
    curl -X POST --data '{"jsonrpc":"2.0","method":"zkevm_virtualBatchNumber","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
    curl -X POST --data '{"jsonrpc":"2.0","method":"zkevm_verifiedBatchNumber","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
    ```

4.  **Check L1 on Sepolia**:
    *   Use a Sepolia block explorer to monitor your L1 sequencer account for outgoing transactions (batch submissions to `PolygonZkEVM.sol`).
    *   Check events emitted by your L1 contracts.

## Important Considerations

*   **Private Keys**: Securely manage private keys for L1 contract deployment, the L1 batch sequencer account (used by `cdk-node`), and DAC node operators. Do not hardcode them directly in version-controlled files without a proper secrets management strategy.
    *   **Example using environment variables**: Before running scripts that require a private key (e.g., for L1 batch submissions by `cdk-node`), you can export it:
        ```bash
        export L1_SEQUENCER_PRIVATE_KEY="0xabcdef123456..."
        ```
        Then, ensure your `cdk-node` configuration or startup script can read this environment variable.
*   **Data Availability (DA)**:
    *   **Rollup**: Data is posted to L1 (e.g., Ethereum calldata). `cdk-node` config `DataAvailability.Mode = "Calldata"`.
    *   **Validium**: Data is stored off-chain by a Data Availability Committee (DAC). `cdk-node` config `DataAvailability.Mode = "DAC"`. This requires running separate DAC nodes from `0xPolygon/cdk-data-availability` and deploying `DataCommittee.sol` on L1. Your `cdk-node` needs to be configured to send data to these DAC nodes.
*   **Component Versions**: Ensure `cdk-erigon`, `cdk-node`, L1 contracts, DAC nodes (if Validium), and prover (if used) are compatible versions for the targeted CDK fork ID. The `CDK_VERSION_MATRIX.MD` in `kurtosis-cdk` can be a reference.
*   **Logging**: Increase log verbosity on components during setup for easier troubleshooting.
*   **Resource Requirements**: `cdk-erigon` can be resource-intensive (RAM, CPU, disk). Ensure your machine meets the minimum requirements. DAC nodes will also require resources.
*   **Troubleshooting**: Setting up these components involves multiple interactions. Pay close attention to the logs of each component (`cdk-erigon`, `cdk-node`, DAC nodes). Common issues include network connectivity problems between components, incorrect L1 contract addresses, insufficient funds on L1 accounts, or L1 RPC issues. If you encounter persistent issues or need help diagnosing complex problems, Gateway.fm offers dedicated support packages. ([https://gateway.fm](https://gateway.fm))

This detailed guide should provide a solid foundation for manually setting up your `cdk-erigon` testnet. Remember that the Polygon CDK ecosystem is rapidly evolving, so always refer to the official documentation of each component for the most up-to-date instructions and configurations.

## Phase 7: Connecting to Polygon AggLayer

Once your CDK chain (Rollup or Validium) is stable and meets certain criteria, you might consider connecting it to the Polygon AggLayer for enhanced interoperability within the Polygon ecosystem.

### 1. Understanding the AggLayer
The AggLayer is a protocol designed to unify liquidity and state across multiple ZK-powered L2s. It allows for cross-chain interactions without compromising security, leveraging ZK proofs.

### 2. Prerequisites for AggLayer Integration
*   **Stable and Secure Chain**: Your CDK chain must be demonstrably stable, secure, and well-maintained.
*   **Compatible L1 Contracts**: Your L1 contracts, especially `PolygonZkEVMGlobalExitRoot.sol` (or its AggLayer-compatible version), must be correctly deployed and configured. The AggLayer relies on these contracts for cross-chain message passing and state verification.
*   **CDK Version Compatibility**: Your CDK stack (execution client, consensus, contracts) must be compatible with the AggLayer's current requirements. This might involve specific fork IDs or component versions.
*   **Data Availability**: The AggLayer will need to be able to verify the data availability of your chain. For Validiums, this means your DAC mechanism must be robust and auditable.
*   **Proving**: Your chain must be producing valid ZK proofs for its state transitions, and these proofs must be verifiable by the AggLayer's contracts.
*   **Permissioning**: Initially, connecting to the AggLayer is likely a permissioned process, coordinated with the Polygon Labs team.

### 3. How to Approach Polygon for AggLayer Connection
*   **Official Documentation**:
    *   Start by thoroughly reviewing the official Polygon CDK and AggLayer documentation. Look for specific guides or requirements for connecting a CDK chain to the AggLayer. This documentation will be the most up-to-date source.
    *   Check sites like [docs.polygon.technology](https://docs.polygon.technology/cdk/) and any specific AggLayer developer portals.
*   **Community Channels**:
    *   Engage with the Polygon developer community on platforms like Discord or the Polygon Forum. Developers and Polygon team members there can often provide guidance or point you to the right resources.
*   **Polygon Support/Implementation Partners**:
    *   For more direct engagement, you might need to reach out through official Polygon support channels or contact one of their listed Implementation Partners who specialize in CDK deployments.
*   **Technical Review**:
    *   Be prepared for a technical review process. The Polygon team will likely need to assess your chain's architecture, security, L1 contract setup, and operational readiness before allowing integration with the AggLayer.
*   **AggLayer Specific Configurations**:
    *   There might be specific configurations or additional "AggLayer bridge/adapter" contracts that need to be deployed or configured on your chain or on L1 to interface with the AggLayer. The `cdk-erigon` README mentions an `zkevm.address-ger-manager` which is likely the `PolygonZkEVMGlobalExitRootAddress` and is critical for AggLayer. Ensure `zkevm.l1-first-block` in `cdk-erigon` config is set to the L1 block where the GER Manager contract (`PolygonZkEVMGlobalExitRoot.sol`) was deployed if you are targeting AggLayer. This ensures that `cdk-erigon` correctly processes events from this contract from the very beginning, which is essential for the AggLayer integration.
    *   The `zkevm.inject-gers` flag in `cdk-erigon` (defaulting to true) is also relevant for injecting L1 information into the scalable contract and GER manager, which is important for AggLayer.

### 4. Key L1 Contract for AggLayer
*   **`PolygonZkEVMGlobalExitRoot.sol`**: This contract is central to enabling cross-chain communication and withdrawals, which are foundational for the AggLayer's functionality. Its correct deployment and linking to your rollup are critical.

Connecting to the AggLayer is a significant step and will require diligence, adherence to Polygon's standards, and likely direct interaction with the Polygon Labs team or their designated partners. Always prioritize the official Polygon documentation and communication channels.

---

## Troubleshooting and Key Learnings from Manual Setup

Setting up the L1 contracts for a Polygon CDK L2 chain manually involves several steps where issues can arise. Here's a summary of key learnings and troubleshooting tips based on a detailed deployment to Sepolia:

1.  **Environment on the VM:**
    *   **Correct Directory**: Always ensure you are operating in the correct directory on your VM (e.g., `~/cdk-testnet-setup/zkevm-contracts`) when running Hardhat scripts.
    *   **Environment Variables**: Critical environment variables like `CDK_L1_PRIVATE_KEY` (for your L1 deployer EOA) and `SEPOLIA_PROVIDER` (your Sepolia RPC URL) MUST be correctly exported in the active SSH session on the VM where you execute `npx hardhat run ...` commands. Simply having them in `.bashrc` or `.zshrc` isn't enough if the current session hasn't sourced them.
    *   **Node.js Version**: While not always a blocker, pay attention to Hardhat's warnings about Node.js version compatibility. Using a supported LTS version is recommended.

2.  **Private Key and Account Management:**
    *   **Correct Key-Address Pair**: Double-check that the `CDK_L1_PRIVATE_KEY` you are using corresponds to the public Ethereum address (`0x...`) you intend to use for deployment and as the owner/admin for various contracts. Use tools like `cast wallet address <PRIVATE_KEY>` (from Foundry) on your VM to verify this. An incorrect private key can lead to:
        *   "Insufficient funds" errors for an unintended derived address.
        *   Later "owner is not the deployer" or role assertion errors if contracts are deployed or owned by an address different from the one currently executing scripts.
    *   **Funding**: Ensure the EOA associated with `CDK_L1_PRIVATE_KEY` is adequately funded with Sepolia ETH *before* starting deployments. Contract deployments are gas-intensive.

3.  **Deployment Script Modifications (Essential for Live Testnets):**
    *   The stock deployment scripts in `zkevm-contracts` (e.g., `2_deployPolygonZKEVMDeployer.ts`, `3_deployContracts.ts`, `4_createRollup.ts`) often default to using `ethers.getSigners()` or look for mnemonics/local Hardhat accounts. This is unreliable for live testnet deployments with a specific private key.
    *   **Modification Required**: These scripts *must* be modified to robustly load the `deployer` wallet/signer directly from `process.env.CDK_L1_PRIVATE_KEY` and the Hardhat provider (`ethers.provider`) for the target network (e.g., Sepolia).
    *   **Example Snippet (for top of script's `main` function)**:
        ```typescript
        // Ensure 'ethers' is imported. For HardhatEthersSigner, import from "@nomicfoundation/hardhat-ethers/signers";
        const provider = ethers.provider;
        let deployer: ethers.Wallet | HardhatEthersSigner; // Or just ethers.Signer if preferred
        const envPrivateKey = process.env.CDK_L1_PRIVATE_KEY;
        if (!envPrivateKey) {
            throw new Error("CDK_L1_PRIVATE_KEY environment variable is not set.");
        }
        deployer = new ethers.Wallet(envPrivateKey, provider);
        console.log(`Using deployer address: ${deployer.address}`);
        const balance = await provider.getBalance(deployer.address);
        console.log(`Deployer balance: ${ethers.formatEther(balance)} ETH`);
        if (balance === 0n) { // Use 0n for BigInt comparison
            throw new Error(`Deployer account ${deployer.address} has insufficient funds.`);
        }
        // Ensure this 'deployer' is used for all contract factory fetching and transaction signing.
        ```
    *   Failure to do this is a primary cause of "insufficient funds" for `0xf39Fd...` (default Hardhat account) or role/ownership assertion errors.

4.  **Configuration Files (`deploy_parameters.json`, `create_rollup_parameters.json`) on VM:**
    *   **`admin` and Role Addresses**: All addresses intended for administrative roles (e.g., `admin`, `initialZkEVMDeployerOwner`, `timelockAdminAddress`, `trustedSequencer`, `adminZkEVM` in `create_rollup_parameters.json`) must consistently be set to your actual L1 deployer EOA (e.g., the address derived from `CDK_L1_PRIVATE_KEY`).
    *   **`polTokenAddress`**: In `deploy_parameters.json`, this cannot be an empty string. If not using a specific ERC20 POL, set it to the zero address: `"polTokenAddress": "0x0000000000000000000000000000000000000000"`.
    *   **`gasTokenAddress`**: In `create_rollup_parameters.json` (for L2 config), if using native L2 ETH for gas, this should also be the zero address: `"gasTokenAddress": "0x0000000000000000000000000000000000000000"`.
    *   **`forkID`**: Ensure the `forkID` in `create_rollup_parameters.json` matches the `zkevm-contracts` version and `CDK_VERSION_MATRIX.MD` (e.g., `13` for `v8.1.0-rc.2-fork.13`).
    *   **`"test": true` Flag (`deploy_parameters.json`)**:
        *   This flag significantly alters behavior in `3_deployContracts.ts`. When `true`, it typically assigns the `DEFAULT_ADMIN_ROLE` of `PolygonRollupManager` directly to your EOA deployer, and your EOA deployer also retains ownership of the `ProxyAdmin`. This simplifies testnet administration.
        *   The `4_createRollup.ts` script might explicitly expect the deployer to have `DEFAULT_ADMIN_ROLE` if it perceives a "test" setup (sometimes hinted by its error messages like "Deployer does not have admin role. Use the test flag..."). Setting `"test": true` was key to resolving this particular error in `4_createRollup.ts`.

5.  **`create2Deployment` and Deterministic Deployments:**
    *   Helper functions like `create2Deployment` are used (e.g., for the `ProxyAdmin` in `3_deployContracts.ts`) to deploy contracts to predictable addresses based on deployer, salt, and bytecode.
    *   **Stale Ownership Issue**: If previous deployment attempts failed or were run with a different deployer/salt, a contract (like `ProxyAdmin`) might already exist at the calculated address but be owned by an unexpected account (e.g., the Timelock contract from a previous `test:false` run, or an old deployer). This causes errors like "Proxy admin was deployed, but the owner is not the deployer..." when the current script tries to interact with it.
    *   **Solution**: Change the `salt` value in `deploy_parameters.json` (e.g., increment `0x...0000` to `0x...0001`, then to `0x...0002`, etc.). This forces a new contract instance at a new address, correctly owned by the current deployer. Each time you hit this specific error for a `create2`-deployed contract, a new salt for that run of the script is the remedy.

6.  **OpenZeppelin Upgrades State File (`.openzeppelin/<network>.json`):**
    *   The OZ Upgrades plugin tracks proxy deployments in this file (e.g., `.openzeppelin/sepolia.json` in the `zkevm-contracts` root on the VM).
    *   **Mandatory Deletion**: It's crucial to delete this file *before* re-running deployment scripts like `3_deployContracts.ts` if:
        *   You've changed the `salt` (as this affects `ProxyAdmin` address).
        *   You've changed the `"test": true/false` flag (as this affects `ProxyAdmin` ownership and `PolygonRollupManager` admin setup).
        *   You've encountered significant errors related to proxy deployments or upgradeability (like UUPS vs. Transparent issues).
        *   This ensures `upgrades.deployProxy` and `upgrades.forceImport` calls operate from a clean slate for that attempt. The error "There's upgradability information from previous deployments..." directly points to needing this deletion.

7.  **Proxy Contract Upgradeability (UUPS vs. Transparent):**
    *   Errors like "Implementation is missing a public `upgradeTo`..." for contracts like `PolygonZkEVMGlobalExitRootV2` indicate a mismatch between the `kind` specified in `upgrades.deployProxy` (e.g., `"uups"`) and the contract's actual UUPS compliance (it might not inherit `UUPSUpgradeable` or implement `_authorizeUpgrade`).
    *   **Solution**: In `3_deployContracts.ts`, for the problematic contract(s), change the `kind` in `upgrades.deployProxy` and any corresponding `upgrades.forceImport` options to `"transparent"`. This was necessary for `PolygonZkEVMGlobalExitRootV2` and was proactively applied to `PolygonRollupManagerNotUpgraded` in the fixed script. If a contract is not UUPS-ready, treating it as transparent is often the workaround.

8.  **Script Sequencing and Dependencies:**
    *   The deployment scripts (`1_createGenesis.ts`, `2_deployPolygonZKEVMDeployer.ts`, `3_deployContracts.ts`, `4_createRollup.ts`) are strictly sequential.
    *   `1_createGenesis.ts` produces `genesis.json` (L1 contract state for L2). It should be run with `test:true` in `deploy_parameters.json` and *without* `--network sepolia` as it runs on a local Hardhat network.
    *   `2_deployPolygonZKEVMDeployer.ts` updates `deploy_parameters.json` with `zkEVMDeployerAddress`. This needs the correct deployer logic.
    *   `3_deployContracts.ts` produces `deploy_output.json` (main L1 contract addresses) and relies on `zkEVMDeployerAddress`. This needs the correct deployer logic and careful handling of `salt` and `test` flag.
    *   `4_createRollup.ts` uses `deploy_output.json` and `create_rollup_parameters.json`. This also needs the correct deployer logic.
    *   Ensure each script completes successfully and its outputs are correctly in place before proceeding.

9.  **File Editing on VM:**
    *   All modifications to JSON configuration files and TypeScript deployment scripts must be performed directly on the VM in the `~/cdk-testnet-setup/zkevm-contracts/deployment/v2/` (or appropriate subdirectories). Verify changes with `cat` or an editor on the VM.

By paying close attention to these areas, the complex L1 contract deployment process can be navigated successfully.

## EIP-155 Compliance Issues for Live Testnet Deployments

When deploying to live testnets like Sepolia, EIP-155 compliance is crucial for transaction acceptance. Here are the key considerations and solutions:

### Common EIP-155 Compliance Issues

1. **Legacy Transaction Format Errors**
   - **Error**: "legacy pre-eip-155 transactions not supported"
   - **Cause**: Transactions being sent without proper chain ID specification
   - **Solution**: Ensure all deployment scripts use EIP-155 compliant transaction formats

2. **Chain ID Mismatch**
   - **Error**: "invalid chain id" or transaction rejection
   - **Cause**: Hardhat configuration or deployment scripts not specifying the correct chain ID
   - **Solution**: Verify chain ID configuration in `hardhat.config.ts` and deployment scripts

### Required Configuration Changes

**Update `hardhat.config.ts` in `zkevm-contracts`:**
```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_PROVIDER_URL || "",
      chainId: 11155111, // Explicitly set Sepolia chain ID
      accounts: process.env.CDK_L1_PRIVATE_KEY ? [process.env.CDK_L1_PRIVATE_KEY] : [],
    },
  },
};

export default config;
```

**Modify Deployment Scripts for EIP-155 Compliance:**
```typescript
// In deployment scripts (e.g., 2_deployPolygonZKEVMDeployer.ts, 3_deployContracts.ts)
const provider = ethers.provider;
const deployer = new ethers.Wallet(process.env.CDK_L1_PRIVATE_KEY!, provider);

// Ensure the signer is properly configured with the network
const signer = deployer.connect(provider);

// When deploying contracts, use the signer directly
const contractFactory = new ethers.ContractFactory(abi, bytecode, signer);
const contract = await contractFactory.deploy(...args);
```

### Verification Steps

1. **Check Transaction Format:**
   ```bash
   # Use cast to verify transaction format
   cast tx <TX_HASH> --rpc-url <SEPOLIA_RPC_URL>
   ```

2. **Verify Chain ID in Transactions:**
   - All transactions should include the correct chain ID (11155111 for Sepolia)
   - No transactions should be sent with chain ID 0 or missing chain ID

3. **Monitor Deployment Logs:**
   - Look for any warnings about legacy transaction formats
   - Ensure all transactions are confirmed with proper gas estimation

## How to Handle Keyless Deployment Failures

Keyless deployment failures can occur due to various issues with private key management and account configuration.

### Common Keyless Deployment Issues

1. **Environment Variable Not Set**
   - **Error**: "CDK_L1_PRIVATE_KEY environment variable is not set"
   - **Solution**: Ensure the private key is properly exported
   ```bash
   export CDK_L1_PRIVATE_KEY="0xYOUR_PRIVATE_KEY_HERE"
   ```

2. **Incorrect Private Key Format**
   - **Error**: "invalid private key" or "invalid hex string"
   - **Solution**: Ensure private key starts with "0x" and is 64 characters long
   ```bash
   # Correct format
   export CDK_L1_PRIVATE_KEY="0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
   ```

3. **Account Mismatch**
   - **Error**: "insufficient funds" for unexpected address
   - **Solution**: Verify the private key corresponds to the funded account
   ```bash
   # Verify account address
   cast wallet address $CDK_L1_PRIVATE_KEY
   ```

### Recovery Procedures

1. **Verify Account Funding:**
   ```bash
   # Check balance of the deployer account
   cast balance $(cast wallet address $CDK_L1_PRIVATE_KEY) --rpc-url $SEPOLIA_PROVIDER_URL
   ```

2. **Reset Deployment State:**
   ```bash
   # Remove OpenZeppelin state file
   rm -f .openzeppelin/sepolia.json
   
   # Update salt in deploy_parameters.json
   # Change salt value to force new contract addresses
   ```

3. **Re-run Deployment with Correct Configuration:**
   ```bash
   # Ensure environment variables are set
   export CDK_L1_PRIVATE_KEY="0xYOUR_PRIVATE_KEY"
   export SEPOLIA_PROVIDER_URL="https://your-sepolia-rpc-url"
   
   # Re-run deployment scripts
   npx hardhat run deployment/2_deployPolygonZKEVMDeployer.ts --network sepolia
   ```

## Verification Steps to Confirm Successful Contract Deployment

After deployment, verify that all contracts are correctly deployed and configured.

### Contract Address Verification

1. **Check Deployment Output Files:**
   ```bash
   # Verify deploy_output.json exists and contains addresses
   cat deployment/deploy_output.json
   
   # Verify v2 deploy_output.json for PolygonRollupManager
   cat deployment/v2/deploy_output.json
   ```

2. **Verify Contract Code on Sepolia:**
   ```bash
   # Check if contracts are deployed and have code
   cast code <CONTRACT_ADDRESS> --rpc-url $SEPOLIA_PROVIDER_URL
   ```

3. **Verify Contract Ownership:**
   ```bash
   # Check admin roles and ownership
   cast call <CONTRACT_ADDRESS> "owner()" --rpc-url $SEPOLIA_PROVIDER_URL
   cast call <CONTRACT_ADDRESS> "DEFAULT_ADMIN_ROLE()" --rpc-url $SEPOLIA_PROVIDER_URL
   ```

### Configuration Verification

1. **Verify Genesis File:**
   ```bash
   # Check genesis.json exists and has valid structure
   cat deployment/genesis.json | jq '.root'
   ```

2. **Verify Rollup Configuration:**
   ```bash
   # Check if rollup is properly registered
   cast call <POLYGON_ROLLUP_MANAGER_ADDRESS> "getRollup(uint256)" <YOUR_CHAIN_ID> --rpc-url $SEPOLIA_PROVIDER_URL
   ```

3. **Verify Contract Interactions:**
   ```bash
   # Test basic contract functions
   cast call <POLYGON_ZKEVM_ADDRESS> "getLastVerifiedBatch()" --rpc-url $SEPOLIA_PROVIDER_URL
   ```

### Network Configuration Verification

1. **Verify Chain ID Consistency:**
   - Ensure chain ID in `deploy_parameters.json` matches `create_rollup_parameters.json`
   - Verify chain ID in L2 configuration files

2. **Verify Fork ID Consistency:**
   - Ensure fork ID matches CDK version matrix
   - Verify fork ID in all configuration files

3. **Verify Contract Addresses in L2 Config:**
   - Ensure all L1 contract addresses are correctly referenced in `cdk-erigon` configuration
   - Verify bridge, GER, and DAC addresses are correct

## Troubleshooting for Silent Deployment Failures

Silent deployment failures can be particularly challenging as they don't provide clear error messages.

### Common Silent Failure Scenarios

1. **Transaction Mined but Contract Not Deployed**
   - **Symptoms**: Transaction shows as successful but contract address has no code
   - **Causes**: Insufficient gas, contract constructor failure, or deployment script error
   - **Diagnosis**: Check transaction logs and gas usage
   ```bash
   # Check transaction details
   cast tx <TX_HASH> --rpc-url $SEPOLIA_PROVIDER_URL
   
   # Check gas used vs gas limit
   cast receipt <TX_HASH> --rpc-url $SEPOLIA_PROVIDER_URL
   ```

2. **Deployment Script Completes Without Error but Contracts Missing**
   - **Symptoms**: Script runs successfully but `deploy_output.json` is empty or missing
   - **Causes**: Script logic error, file write permissions, or silent exceptions
   - **Diagnosis**: Add logging to deployment scripts
   ```typescript
   // Add to deployment scripts
   console.log("Deploying contract...");
   const contract = await ContractFactory.deploy(...args);
   console.log("Contract deployed at:", contract.address);
   ```

3. **Configuration Files Not Updated**
   - **Symptoms**: Scripts run but configuration files unchanged
   - **Causes**: File path issues, write permissions, or script logic errors
   - **Diagnosis**: Check file paths and permissions
   ```bash
   # Check file permissions
   ls -la deployment/
   
   # Verify file contents after deployment
   cat deployment/deploy_output.json
   ```

### Advanced Troubleshooting Techniques

1. **Enable Detailed Logging:**
   ```bash
   # Set Hardhat logging to debug
   export HARDHAT_LOG_LEVEL=debug
   
   # Run deployment with verbose output
   npx hardhat run deployment/3_deployContracts.ts --network sepolia --verbose
   ```

2. **Check Transaction Status:**
   ```bash
   # Monitor transaction status
   cast tx <TX_HASH> --rpc-url $SEPOLIA_PROVIDER_URL
   
   # Check for failed transactions
   cast receipt <TX_HASH> --rpc-url $SEPOLIA_PROVIDER_URL | jq '.status'
   ```

3. **Verify Contract Bytecode:**
   ```bash
   # Check if deployed contract has correct bytecode
   cast code <CONTRACT_ADDRESS> --rpc-url $SEPOLIA_PROVIDER_URL | head -c 100
   ```

4. **Check for Reverted Transactions:**
   ```bash
   # Look for transactions that reverted
   cast tx <TX_HASH> --rpc-url $SEPOLIA_PROVIDER_URL | jq '.gasUsed, .status'
   ```

### Recovery from Silent Failures

1. **Clean Slate Approach:**
   ```bash
   # Remove all state files
   rm -f .openzeppelin/sepolia.json
   rm -f deployment/deploy_output.json
   rm -f deployment/v2/deploy_output.json
   
   # Update salt to force new addresses
   # Edit deploy_parameters.json and create_rollup_parameters.json
   ```

2. **Incremental Deployment:**
   ```bash
   # Deploy contracts one by one with verification
   npx hardhat run deployment/2_deployPolygonZKEVMDeployer.ts --network sepolia
   # Verify deployment
   cast code <DEPLOYER_ADDRESS> --rpc-url $SEPOLIA_PROVIDER_URL
   
   # Continue with next script
   npx hardhat run deployment/3_deployContracts.ts --network sepolia
   ```

3. **Manual Contract Verification:**
   ```bash
   # Verify each contract manually
   for contract in $CONTRACT_ADDRESSES; do
     echo "Checking contract: $contract"
     cast code $contract --rpc-url $SEPOLIA_PROVIDER_URL
   done
   ```

### Prevention Strategies

1. **Pre-deployment Checks:**
   ```bash
   # Verify environment setup
   echo "Private key: ${CDK_L1_PRIVATE_KEY:0:10}..."
   echo "Provider URL: $SEPOLIA_PROVIDER_URL"
   echo "Account balance: $(cast balance $(cast wallet address $CDK_L1_PRIVATE_KEY) --rpc-url $SEPOLIA_PROVIDER_URL)"
   ```

2. **Post-deployment Verification:**
   ```bash
   # Automated verification script
   #!/bin/bash
   for contract in $CONTRACT_ADDRESSES; do
     if [ "$(cast code $contract --rpc-url $SEPOLIA_PROVIDER_URL)" = "0x" ]; then
       echo "ERROR: Contract $contract has no code"
       exit 1
     fi
   done
   echo "All contracts deployed successfully"
   ```

3. **Configuration Validation:**
   ```bash
   # Validate JSON configuration files
   jq '.' deployment/deploy_parameters.json > /dev/null
   jq '.' deployment/v2/create_rollup_parameters.json > /dev/null
   ```

By following these verification and troubleshooting procedures, you can identify and resolve deployment issues more effectively, ensuring a successful CDK-Erigon testnet deployment.

## Gateway.fm Support and Services

Running and customizing a Polygon CDK stack can be complex. Gateway.fm offers a range of services to support your journey:

*   **Community Support**: For general questions and community-driven support, you can raise issues in our relevant public GitHub repositories (please check the specific component's repository for issue tracking).
*   **Formal Support Packages**: For dedicated, SLA-backed support, Gateway.fm provides formal support packages tailored to your needs, ensuring you have expert assistance when you need it most.
*   **Managed Presto Platform**: If you prefer a hands-off approach, Gateway.fm can run and manage your entire CDK stack (including `cdk-erigon` based chains) on your behalf through our robust Presto platform.
*   **Customization and R&D**: The Gateway.fm R&D team can help you customize the CDK stack to your specific requirements. This includes, but is not limited to, migrating existing chains from other stacks to `cdk-erigon`, developing custom features, and optimizing performance.

To learn more about how Gateway.fm can help you, please visit our website: [https://gateway.fm](https://gateway.fm) or reach out to us through our contact channels listed there.