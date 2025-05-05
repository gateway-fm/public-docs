# net_version


> Returns the current network id


## Parameters

`None`

## Returns

`String` - The current network id.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "net_version",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc":"2.0",
    "id":89,
    "result":"1"
}
```
