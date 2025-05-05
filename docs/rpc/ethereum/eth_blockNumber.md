# eth_blockNumber


> Returns the number of the most recent block.


## Parameters

`None`

## Returns

`result` - An integer value of the current block number the client is on encoded as hexadecimal

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0xd77735"
}
```
