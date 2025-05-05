# eth_getTransactionByBlockNumberAndIndex


> Returns information about a transaction by block number and transaction index
  position


## Parameters

- `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).
- `QUANTITY` - the transaction index position.

## Returns

`Object` - The transaction response object, or null if no transaction is found:

- `blockHash` - The hash of the block where this log was in. null when it's a pending log
- `blockNumber` - The block number where this log was in. null when it's a pending log
- `from` - The address of the sender
- `gas` - The gas provided by the sender, encoded as hexadecimal
- `gasPrice` - The gas price provided by the sender in wei, encoded as hexadecimal
- `maxFeePerGas` - The maximum fee per gas set in the transaction
- `maxPriorityFeePerGas` - The maximum priority gas fee set in the transaction
- `hash` - The hash of the transaction
- `input` - The data sent along with the transaction
- `nonce` - The number of transactions made by the sender before this one encoded as hexadecimal
- `to` - The address of the receiver. null when it's a contract creation transaction
- `transactionIndex` - The integer of the transaction's index position that the log was created from. null when it's a pending log
- `value` - The value transferred in wei encoded as hexadecimal
- `type` - The transaction type
- `chainId` - The chain id of the transaction, if any
- `v` - The standardized V field of the signature
- `r` - The R field of the signature
- `s` - The S field of the signature

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "id": 89,
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockNumberAndIndex",
    "params": [
        "0x90f62a",
        "0x3"
    ]
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": {
        "blockHash": "0x398bd9a4dd3a8d17940925b73b7bba8412d686ea27549dadc6311ff45e5740b8",
        "blockNumber": "0x90f62a",
        "chainId": "0x1",
        "from": "0xf5bec430576ff1b82e44ddb5a1c93f6f9d0884f3",
        "gas": "0x28b0a",
        "gasPrice": "0xba43b7400",
        "hash": "0x8c2b2666d73e4e0df8b9ad890af4974d2cf5e26dbb25822685bd7e49e86d38e3",
        "input": "0x",
        "nonce": "0x57215",
        "r": "0xa769a34b6708ac95910b1c4188c84e7a4679f1870cd6d2de54f7dc6203ea7e26",
        "s": "0x4313eca1b558e8ab8e01879105f2495bb45d5ffb55d49ef908c736d1dcab8bb",
        "to": "0x2ab0fd0338dd08a2f927a36f5a6f27b033c5eba7",
        "transactionIndex": "0x3",
        "type": "0x0",
        "v": "0x25",
        "value": "0x5decc4243fd8000"
    }
}
```
