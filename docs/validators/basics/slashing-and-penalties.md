---
title: Slashing & Penalties
sidebar_position: 4
---

# Slashing & Penalties

Slashing and penalties are mechanisms designed to ensure the security and integrity of the Ethereum network by discouraging malicious or negligent behavior by validators.

## Slashing

If your validator is slashed, it exits the set of active validators immediately. Until withdrawals are activated, that means that the stake that was used is locked and is unusable. The validator cannot be re-enabled after it was slashed.

### Slashing Offences

There are only three slasheable offences in the beacon chain validation:

- **Double Block Proposal**: Being a block proposer and proposing two different blocks for the same slot.
- **Double Voting**: Being an attester and signing two different attestations with the same target slot (attesting for two different blocks for the same slot).
- **Surround Vote**: Being an attester and voting against history.

Most often, slashing happens when more than one validator client shares the same key set. To avoid that, but still set up the redundancy, see the following chapters:

- [High Availability](/category/high-availability/)
- [Validator Clients](/category/validator-clients/)

## Inactivity Penalties

Inactivity penalties are applied when a validator fails to perform its duties, such as attesting to the blockchain head block or proposing a block when it's time to do so. These penalties can result in a gradual loss of stake, but the validator won't be removed from the set of validators while its balance is greater than 16 ETH. If it goes all the way to 16 ETH, it will be ejected from the set and will not be able to re-join again.

### Common Inactivity Penalties

- **Missed Attestations**: Not attesting to the blockchain head block.
- **Missed Block Proposals**: Not proposing a block when it's time to do so.
- **Invalid Proposals**: Proposing invalid blocks.

To prevent inactivity penalties, set up monitoring and alerting properly and keep your nodes up to date. You can read more in the following chapters:

- [Monitoring And Alerting](/validators/ha/monitoring)
- [Keep node up-to-date](/validators/nodes/updates-releases)

## Further Reading

- [Rewards & Penalties on Eth2.0](https://consensys.net/blog/codefi/rewards-and-penalties-on-ethereum-20-phase-0/)
- [Eth 2.0 Annotated Spec: Validator Duties, Rewards & Penalties](https://github.com/ethereum/annotated-spec/blob/master/altair/beacon-chain.md#aside-validator-duties-rewards-and-penalties)
