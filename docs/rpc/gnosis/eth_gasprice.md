---
description: Returns the current price per gas in wei.
---

# eth_gasPrice

### Parameters

none

### Returns

`QUANTITY` - integer of the current gas price in wei.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":71}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x25a01c500"
}
```
