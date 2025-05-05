# eth_getTransactionByBlockHashAndIndex


> Returns information about a transaction by block hash and transaction index position


## Parameters

- `BLOCKHASH`, 32 Bytes - hash of a block.
- `INDEX` - integer of the transaction index position.

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
- `accesslist` - A list of addresses and storage keys that the transaction plans to access
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
    "method": "eth_getTransactionByBlockHashAndIndex",
    "params": [
        "0xbac3253a39db401e0d7346edccdd60ee39d121e878b6cf5050a4304cc6817721",
        "0x0"
    ]
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": {
        "blockHash": "0xbac3253a39db401e0d7346edccdd60ee39d121e878b6cf5050a4304cc6817721",
        "blockNumber": "0xd62cc8",
        "from": "0xcd43594e6075d21c13e9c7dcce562536667dcc74",
        "gas": "0x15086",
        "gasPrice": "0x2b24bd9d00",
        "hash": "0x7e0794e0a1ccac44fc957fa418a64ac474ac0bd756969cf43a5ef2d351ff4c4a",
        "input": "0xd505accf0000000000000000000000003ba7043135172d9573584d8ceaf93a12a3c2162a000000000000000000000000cd43594e6075d21c13e9c7dcce562536667dcc740000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000061e81c18000000000000000000000000000000000000000000000000000000000000001baea97b265c60fa18dae8aa152af49967f5a3fba66f3baa5191cb19ab8067bb1a0e514289874563e1bac98a715c623e2e05b63fa081ab6d55185162d6874ccc1e",
        "nonce": "0x183",
        "r": "0x6fd7a7fb5538b96c90b9107f477425e9ab708f013bf5de119575d75eab4ff25f",
        "s": "0x4df99682cff2f94192978b017963e306fa72f06120ff9dbf8ae430da539a65ce",
        "to": "0x18aaa7115705e8be94bffebde57af9bfc265b998",
        "transactionIndex": "0x0",
        "type": "0x0",
        "v": "0x1b",
        "value": "0x0"
    }
}
```
