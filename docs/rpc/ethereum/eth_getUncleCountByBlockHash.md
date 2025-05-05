# eth_getUncleCountByBlockHash


> Returns the number of uncles in a block matching the given block hash.


## Parameters

`BLOCKHASH`, 32 Bytes - hash of a block.

## Returns

`BLOCK TRANSACTION COUNT` - hexadecimal representation of the number of uncles in this block.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockHash",
    "params": [
        "0x09d54c053c22c07d39a9c8d0f8e6576b644b5eaa018c8180ecf541bee7bea20e"
    ],
    "id": 1
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0"
}
```
