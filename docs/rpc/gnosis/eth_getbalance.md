---
description: Returns the balance of the account of a given address.
---

# eth_getBalance

### Parameters

- `DATA`, 20 Bytes - address to check for balance.
- `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

### Returns

`QUANTITY` - integer of the current balance for the given address in wei.

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{ "id": 89, "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb","latest"]}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": "0x0"
}
```
