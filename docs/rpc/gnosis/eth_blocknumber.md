---
description: Returns the number of the most recent block.
---

# eth_blockNumber

## Parameters

none

## Returns

`QUANTITY` - integer of the current block number the client is on.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":71}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x101218e"
}
```
