# Presto Customization Options

## Presto Customization Options

see also: [Enterprise vs Paid — what is the difference?](enterprise-vs-paid-what-is-the-difference.md) and [How to Become an Enterprise Customer?](how-to-become-an-enterprise-customer.md)

***

This document contains the list of the customization options available for enterprise customers of Presto.

There are plenty, but we are also providing a sensible set of defaults for each rollup.

There are multiple type of settings.

* Sections (1) and (2) cover the core rollup settings
* Sections (3), (4) and (5) cover external services.

Section (1) is Hard Settings. These needs to be decided before the rollup is launched.

Some of this options are available for self-serve, when you configure a rollup through Presto UI ([presto.gateway.fm](https://presto.gateway.fm)); others are available at request to the Gateway team.

We are always working to bring more options towards the UI.

## 1. 💎 Hard Settings

#### ⚠️ Decide Before The Chain Launch

Hard settings are _**impossible to change after the rollup had launched**_.

They need to be decided upon before the rollup creation.

### 1.1. 💎 Root Chain / L1

**Available in the Presto UI**: 🟡 partially.

Choose the root chain where proofs and DA (for rollups only) will be settled upon.

**Options**:

* **Ethereum.** ✅ out of the box; 💻 fully automated & available in the UI.
* **Gnosis Chain.** ✅ out of the box; 💻 fully automated & available in the UI.
* **Custom EVM chain. W**e can setup Presto as L2 or L3 on top of any EVM chain that supports necessary opcodes (that excludes some zkEVMs is possible on most L2s like OP or ARB). 👷‍♂️ manual; needs to be discussed with Gateway.

### 1.2. 💎 Data Availability

💟 **CDK feature**

**Available in the Presto UI**: 🟡 partially.

Choose the data availability options for Presto Rollups.

**Options**:

* _**Rollup**_: publish all transactional data into rootchain/L1, recovery from just L1 is possible. The most expensive and secure option. 👷‍♂️ manual; needs to be discussed with Gateway.
* _**Validium**_, _**Local DA:**_ store all transactional data in L2 nodes, don’t publish to L1, the cheapest option, no transaction backup. Also the most private one. ✅ out of the box; 💻 fully automated & available in the UI.
* **Validium, Celestia**: store all transactional data to Celestia nodes, don’t publish to L1, the recovery is possible through L1 and Celestia. Good compromise for price vs security. 👷‍♂️ manual; needs to be discussed with Gateway.

### 1.3. 💎 Gas Token

💟 **CDK feature**

**Available in the Presto UI**: 🟡 partially.

Select which token to use to pay for Gas in L2. This technically means, which token will be linked to the gas token in the rollup bridge.

**Options:**

* _**Default Gas Token.**_ ✅ out of the box; 💻 fully automated & available in the UI. \*\*\*\*\*\*use the same gas token as the rootchain/L1: for Ethereum it will be ETH; for Gnosis Chain xDai, etc.
* **Custom Gas Token** 👷‍♂️ manual; needs to be discussed with Gateway. \*\*\*\*Select any ERC20 token on L1 to serve as a gas token for L2. This also means that costs of L1 transactions for DA and Proofs are fully covered by the rollup operator.

### 1.4. 💎 Gas Fees

💟 **CDK feature**

**Available in the Presto UI**: 🟡 partially.

Select how the fees market will work on the L2.

**Options**:

* **Default Fee Market.** ✅ out of the box; 💻 fully automated & available in the UI. All users pay full gas prices.
* **Fully Gasless.** ✅ out of the box; 💻 fully automated & available in the UI. All users not paying for gas; Costs of L1 transactions for DA and Proofs are fully covered by the rollup owner.
* **Subsidized %%.** 👷‍♂️ manual; needs to be discussed with Gateway. \*\*\*\*Customer pays only a certain %% of the fees. Costs of L1 transactions for DA and Proofs are partially covered by the rollup owner. The exact %% of subsidization doesn’t have to be decided before launch, see (2.2).
* **Gasless For Specific Addresses.** 👷‍♂️ manual; needs to be discussed with Gateway. \*\*\*\*Pre-Selected list of addresses aren’t charged for gas. That is for both transactions **from** an address and transactions **to** an address. The list of addresses doesn’t have to be decided here, see (2.7) for details.

### 1.5. 💎 Genesis Token Distribution

**Available in the Presto UI**: 🔴 no.

How many gas tokens to pre-mint on Genesis of the L2 and to which addresses to assign.

👷‍♂️ manual; needs to be discussed with Gateway.

## 2. Soft Settings

#### ✅ Can be changed at any time

Soft settings could be changed after the rollup had launched, basically at any time. Sometimes it could require some downtime, sometimes — not.

### 2.1. Region / Cloud

_NB! **Migration between regions/clouds** is always 👷‍♂️ manual; needs to be discussed with Gateway._

Changing the region after the chain is launched could lead to downtime!

**Available in the Presto UI**: 🟡 partially.

**Options**:

* _**Stockholm AWS**_: ✅ out of the box; 💻 fully automated & available in the UI.
* _**Other Gateway regions**_: Zurich, Frankfurt: ✅ out of the box; 🤖 automated; no UI (support needed).
* **On Premise.** Provisioning at any place, including client’s account. Optionally comes with the transition period for the customer to take over the infra: \~6 month.
  * _**AWS**_: ✅ out of the box; 🤖 automated; no UI.
  * _**GCP**_: 👷‍♂️ manual; needs to be discussed with Gateway.
  * _**Azure**_: 👷‍♂️ manual; needs to be discussed with Gateway.
  * _**Bare metal / Other**_: 👷‍♂️ manual; needs to be discussed with Gateway.

### 2.2. Gas Fee Subsidization %%

💟 **CDK feature**

**Available in the Presto UI**: 🔴 no. 👷‍♂️ manual; needs to be discussed with Gateway.

Defines how many %% of the gas price is paid by they user vs subsidized by the sequencer.

### 2.3. Frequency of DA and Proofs

💟 **CDK feature**

**Available in the Presto UI**: 🔴 no. 👷‍♂️ manual; needs to be discussed with Gateway.

How often will transactions with DA and proofs be sent to the rootchain.

DA should be settled more often than Proofs!

Making more frequent settlements lead to making the operational cost more expensive, but the bridge will do transactions faster.

Slowing down settlements will lead to a slower bridge, but lower overall operational costs.

For highly

_NB! If all txs are proven and there are no activity — proof will not be generated._

Defaults: DA — max 10 min; proof — up to 1 hour.

### 2.4. Public vs Private RPC

**Available in the Presto UI**: 🔴 no (coming soon) 👷‍♂️ manual; needs to be discussed with Gateway.

Using Gateway’s Proxy stack to limit RPC access with API keys and set up rate limits.

Default: public, no rate limiting imposed.

### 2.5. Public vs Private tx pool

**Available in the Presto UI**: 🔴 no (coming soon) 👷‍♂️ manual; needs to be discussed with Gateway.

Using Gateway’s Proxy stack to limit access to transaction pool (sending transaction to the rollup) with API keys.

Default: public, no rate limiting imposed.

### 2.6. Allowlist Of Wallets Public Keys

💟 **CDK feature**

**Available in the Presto UI**: 🔴 no 👷‍♂️ manual; needs to be discussed with Gateway.

Using CDK’s feature to only allow transactions from certain wallet addresses. The rest will be reverted.

Default: public, anyone can transact.

### 2.7. Allowlist Of Gasless Wallets

💟 **CDK feature**

**Available in the Presto UI**: 🔴 no 👷‍♂️ manual; needs to be discussed with Gateway.

Using CDK’s feature to allow gasless transactions to and from specific addresses (EOA) and smart contracts. Must be enabled beforehand (see 1.4)

Default: only LX-to-LY bridge transactions are gasless.

### 2.8. Hardware Specs & Redundancy

**Available in the Presto UI**: 🔴 no 👷‍♂️ manual; needs to be discussed with Gateway.

How powerful the machines, how many nodes to run. Added extra nodes will increase the cost of infrastructure.

Default: single machine, single sequencer, single RPC node.

### 2.9. SLA & Support

**Available in the Presto UI**: 🔴 no 👷‍♂️ manual; needs to be discussed with Gateway.

What kind of technical support & SLA to pick.

**Options:**

* Support Option
  * Working Days Support (9-5 UTC, Weekdays)
  * Urgent Support (24/7/365)
* On-call Option:
  * Full On-call (24/7/365)
  * Working Days On-Call (9-5 UTC, Weekdays)

### 2.10. Wallet for L1 TX Management

**Available in the Presto UI**: 🔴 no 👷‍♂️ manual; needs to be discussed with Gateway.

Who is responsible for monitoring and filling wallets for DA and Proofs with L1 gas tokens.

**Options:**

* (Default) Gateway monitors & handles; includes in invoices (USD, conversion at the time of transaction, CoinGecko as the price oracle).
* Customer monitors & handles; free for customer, responsibility for DA & Proofs tx is on the customer.

## 3. Partner Integrations

By default, Presto comes with some pre-bundled partners, but we can provide more on request.

We are always working to have more partners in the list.

### 3.1. Blockscout

**Available in the Presto UI**: 🟢 yes

**Pre-bundled:** 🟢 yes

**Price:** free

✅ out of the box; 💻 fully automated & available in the UI.

### 3.2. ETH Faucet (for testnets only)

**Available in the Presto UI**: 🟢 yes

**Pre-bundled:** 🟢 yes

**Price:** free

✅ out of the box; 💻 fully automated & available in the UI.

### 3.3. LX-to-LY Bridge

**Available in the Presto UI**: 🟢 yes

**Pre-bundled:** 🟢 yes

**Price:** free

✅ out of the box; 💻 fully automated & available in the UI.

### 3.4. OnDora

Block explorer

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.5. ChainLens

Block explorer

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.6. Tenderly (coming soon, q4 ‘23)

Debugging tools, state of the art

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.7. Gnosis Safe

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no (coming soon)

**Price:** free

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.8. RedStone Oracles

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no (coming soon)

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.9. FractalID

KYC Service

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no (coming soon)

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 3.10. Goldsky

Indexer with subgraph support and its own API

**Available in the Presto UI**: 🔴 no (coming soon)

**Pre-bundled:** 🔴 no (coming soon)

**Price:** commercial

👷‍♂️ manual; needs to be discussed with Gateway.

### 4. Custom Software

**Available in the Presto UI**: 🔴 no

👷‍♂️ manual; needs to be discussed with Gateway.

It is possible to include extra software and services to run with Presto:

* backends
* VPNs
* bastion hosts
* custom blockchain apps and services

### 5. SDKs

**Available in the Presto UI**: 🔴 no

👷‍♂️ manual; needs to be discussed with Gateway.

Access to Presto features through SDKs of your favorite platform (coming soon).

* Mobile: iOS, Android, react-native
* Gaming: Unity
* Web: react-js
