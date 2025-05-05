# eth_syncing


> Returns an object with data about the sync status or false.


## Parameters

`None`

## Returns

`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:

- `startingBlock`: `QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)
- `currentBlock`: `QUANTITY` - The current block, same as eth_blockNumber
- `highestBlock`: `QUANTITY` - The estimated highest block

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_syncing",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": false
}
```
