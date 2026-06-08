# Type 1 Pessimistic Proof Detailed Instructions

## Overview
- Polygon Phase 2 project upgrades cdk-erigon to add:
    - PMT state commitment
    - EIP support up to and including Pectra

With these changes come some new configruation options.

## Configuration
Configuration remains the same as other modes of operation, with the addition of:

- 2 new flags:
    - `zkevm.honour-chainspec: true` - Read and utilise the chainspec values for previously unsupported forks
    - `zkevm.initial-commitment: pmt` - Enable Patricia Merkle Trie state commitment (instead of SMT)
- 2 new chainspec property:
    - `"normalcyBlock": 0` - Enable 'normalcy' from block zero - use standard (non-type2) EVM
    - `"debugDisableZkevmStateChanges": true` - Debug flag to turn off injected batch and GER sync from L1 (Sequencer)

## Examples


## Integration Guide


## Troubleshooting
