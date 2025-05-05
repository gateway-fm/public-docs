---
description: Returns an object with data about the sync status or false.
---

# eth_syncing

**Note**: Your response from `eth_syncing` will likely return false because Gateway only supports nodes in production that are completed synced.

### **Parameters**

none

### **Returns**

`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:

- `startingBlock`: `QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)
- `currentBlock`: `QUANTITY` - The current block, same as eth_blockNumber
- `highestBlock`: `QUANTITY` - The estimated highest block

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":71}'
```

Response

```javascript
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": {
        "currentBlock": "0x1027437",
        "highestBlock": "0x1566f39",
        "startingBlock": "0xfa365b",
        "warpChunksAmount": null,
        "warpChunksProcessed": null
    }
}
```
