# eth_call


> Executes a new message call immediately without creating a transaction on the
  blockchain.


## Parameters

- `Object` - The transaction call object
  - `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
  - `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
  - `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions. \*\*NOTE: this parameter does not have limit or cap. \*\*
  - `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas.
  - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
  - `data`: `DATA` - (optional) Hash of the method signature and encoded parameters. For details see [Ethereum Contract ABI](https://docs.soliditylang.org/en/v0.7.0/abi-spec.html)
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending" (see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter)), OR the `blockHash` (in accordance with [EIP-1898](https://eips.ethereum.org/EIPS/eip-1898)) **NOTE: the parameter is an object instead of a string and should be specified as: `{"blockHash": "0x<some-hash>"}.`** Learn more [here](https://eips.ethereum.org/EIPS/eip-1898).

## Returns

`DATA` - the return value of executed contract method.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [
        {
            "from": "0x00000000219ab540356cBB839Cbe05303d7705Fa",
            "to": "0x3d14de87b5ade1c61a0b7ca29f7632e6e756b8bf",
            "gas": "0x76c0",
            "gasPrice": "0x9184e72a000",
            "value": "0x0",
            "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
        },
        "latest"
    ],
    "id": 1
}'
```

## **Response example**

```{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x"
}
```

`eth_call` checks the balance of the sender to make sure that the sender has enough gas to complete the request. Example of response when `from` doesn't have enough funds:

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
  "code": -32000,
  "message": "insufficient funds for gas * price + value: address 0x3d14dE87b5AdE1C61a0B7CA29F7632e6E756b8bf have 0 want 304000000000000000"
  }
}
```
