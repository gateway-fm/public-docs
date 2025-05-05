# eth_getBlockTransactionCountByNumber


> Returns the number of transactions in a block matching the given block number


## Parameters

`BLOCK NUMBER |TAG` - hexadecimal representation of a block number, or the string "earliest", "latest" or "pending", as in the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`QUANTITY` - the number of transactions in this block in hexadecimal format

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "method": "eth_getBlockTransactionCountByNumber",
    "params": [
        "latest"
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
    "result": "0x91"
}
```
