# eth_gasPrice


> Returns the hexadecimal value of current price per gas in wei.


## Parameters

`None`

## Returns

`QUANTITY` - hexadecimal value of the current gas price in wei.

## **Request example**

Request

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_gasPrice",
    "params": [],
    "id": 71
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x8a8bfa5a8"
}
```
