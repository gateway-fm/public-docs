# eth_estimateGas


> Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain.


## Parameters

- `Object` - The transaction call object
  - `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
  - `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
  - `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions. \*\*NOTE: this parameter does not have limit or cap. \*\*
  - `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas.
  - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
  - `data`: `DATA` - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`QUANTITY` - the amount of gas used.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_estimateGas",
    "params": [
        {
            "from": "0x3d14de87b5ade1c61a0b7ca29f7632e6e756b8bf",
            "to": "0x4c88153de66e84c6691fa6bf5b5823530300a942"
        }
    ],
    "id": 1
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x5208"
}
```