# eth_getTransactionReceipt


> Returns the receipt of a transaction by transaction hash.


**Note:** the receipt is not available for pending transactions.

## Parameters

`TRANSACTIONHASH`, 32 Bytes - hash of a transaction

## Returns

- `Object` - A transaction receipt object, or null when no receipt was found:
  - `transactionHash`: `DATA`, 32 Bytes - hash of the transaction.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
  - `blockNumber`: `QUANTITY` - block number where this transaction was in.
  - `from`: `DATA`, 20 Bytes - address of the sender.
  - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
  - `cumulativeGasUsed`: `QUANTITY` - The total amount of gas used when this transaction was executed in the block.
  - `gasUsed`: `QUANTITY` - The amount of gas used by this specific transaction alone.
  - `contractAddress`: `DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
  - `logs`: `Array` - Array of log objects, which this transaction generated.
  - `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns either:

- `root` : `DATA` 32 bytes of post-transaction stateroot (pre Byzantium)
- `status`: `QUANTITY` either 1 (success) or 0 (failure)

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getTransactionReceipt",
    "params": [
        "0x3736b7dc8805835e508b6c08c927cc99ecf2f8cdbad147acc199ac4fa675412b"
    ]
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0xe0591d4d463c8ffec010334381548dd02e2e4a01b209b5f60b883d2e98e5de60",
        "blockNumber": "0xd86fd3",
        "contractAddress": null,
        "cumulativeGasUsed": "0xdc5b4a",
        "effectiveGasPrice": "0x8b00ebefc",
        "from": "0x56bfcc05fda9a7a96b761ea61ccfa3426e4038cc",
        "gasUsed": "0x74de",
        "logs": [
            {
                "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "blockHash": "0xe0591d4d463c8ffec010334381548dd02e2e4a01b209b5f60b883d2e98e5de60",
                "blockNumber": "0xd86fd3",
                "data": "0x00000000000000000000000000000000000000000000003635c9adc5dea00000",
                "logIndex": "0x11b",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x00000000000000000000000056bfcc05fda9a7a96b761ea61ccfa3426e4038cc",
                    "0x0000000000000000000000008b9a88a67a4005a9affe43ce5f49db706b8ee8e9"
                ],
                "transactionHash": "0x3736b7dc8805835e508b6c08c927cc99ecf2f8cdbad147acc199ac4fa675412b",
                "transactionIndex": "0xbf"
            }
        ],
        "logsBloom": "0x02000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000010000100000000000200000000000000000000000000000000000000000000000000000000000000000000800000001000000000000000000000000000000000000000000000000002000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": "0x1",
        "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "transactionHash": "0x3736b7dc8805835e508b6c08c927cc99ecf2f8cdbad147acc199ac4fa675412b",
        "transactionIndex": "0xbf",
        "type": "0x2"
    }
}
```
