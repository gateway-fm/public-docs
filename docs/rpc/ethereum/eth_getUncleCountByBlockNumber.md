# eth_getUncleCountByBlockNumber


> Returns the number of uncles in a block matching the give block number


## Parameters

`QUANTITY|TAG` - hexadecimal representation of a block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`QUANTITY` - hexadecimal representation of the number of uncles in this block.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockNumber",
    "params": [
        "0x29c"
    ],
    "id": 1
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
```
