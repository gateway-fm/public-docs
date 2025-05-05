# eth_getBalance


> Returns ETH balance of the specified address in hexadecimal value, measured in wei


## Parameters

- `ADDRESS`, 20 Bytes - address to check for balance.
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`QUANTITY` - integer of the current balance for the given address in wei.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "id": 89,
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": [
        "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE",
        "latest"
    ]
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": "0x2d4e30b4d0eee41"
}
```
