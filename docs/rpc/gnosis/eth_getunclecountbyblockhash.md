---
description: Returns the number of uncles in a block matching the given block hash.
---

# eth_getUncleCountByBlockHash

### Parameters

`DATA`, 32 Bytes - hash of a block.

### Returns

`QUANTITY` - integer of the number of uncles in this block.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params":["0x09d54c053c22c07d39a9c8d0f8e6576b644b5eaa018c8180ecf541bee7bea20e"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": null
}
```
