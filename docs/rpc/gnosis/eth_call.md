---
description: >-
  Executes a new message call immediately without creating a transaction on the
  block chain.
---

# eth_call

This is one of the most commonly used API calls. It is used to read from the blockchain which includes executing smart contracts, but does not publish anything to the blockchain.

### Parameters

- `Object` - The transaction call object
  - `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
  - `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
  - `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions. **NOTE: this parameter does not have limit or cap. **
  - `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas.
  - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
  - `data`: `DATA` - (optional) Hash of the method signature and encoded parameters. For details see [Ethereum Contract ABI](https://docs.soliditylang.org/en/v0.7.0/abi-spec.html)
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending" (see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter)), OR the `blockHash` (in accordance with [EIP-1898](https://eips.ethereum.org/EIPS/eip-1898)) **NOTE: the parameter is an object instead of a string and should be specified as: `{"blockHash": "0x<some-hash>"}.`** Learn more [here](https://eips.ethereum.org/EIPS/eip-1898).

### Returns

`DATA` - the return value of executed contract.

**Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_call","params":[{"from": "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d","to": "0x0000000000000000000000000000000000000000","data": "0x06fdde03"}, "latest"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x"
}
```
