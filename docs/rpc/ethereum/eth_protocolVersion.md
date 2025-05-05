# eth_protocolVersion


> Returns the current ethereum protocol version.


## Parameters

`None`

## Returns

`String` - The current ethereum protocol version.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_protocolVersion",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x42"
}
```
