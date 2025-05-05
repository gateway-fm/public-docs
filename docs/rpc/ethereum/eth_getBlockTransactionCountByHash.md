# eth_getBlockTransactionCountByHash


> Returns the number of transactions in a block matching the given block hash


## Parameters

`BLOCK HASH`, 32 Bytes - hash of a block.

## Returns

`QUANTITY` - the number of transactions associated with a specific block, in hexadecimal value

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "method": "eth_getBlockTransactionCountByHash",
    "params": [
        "0x372879c69880c2cd41ab4088163a2b6839af35f59cbed8f8ac560f99ca63ddd4"
    ],
    "id": 1,
    "jsonrpc": "2.0"
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x97"
}
```
