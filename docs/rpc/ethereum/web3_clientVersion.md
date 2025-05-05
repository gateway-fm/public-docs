# web3_clientVersion


> Returns the current client version


## Parameters

`None`

## Returns

`String` - The current client version

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "web3_clientVersion",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "erigon/2.42.0/linux-amd64/go1.20.2"
}
```
