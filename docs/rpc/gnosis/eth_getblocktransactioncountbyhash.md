---
description: Returns the number of transactions in a block matching the given block hash.
---

# eth_getBlockTransactionCountByHash

### Parameters

`DATA`, 32 Bytes - hash of a block.

### Returns

`QUANTITY` - integer of the number of transactions in this block.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0xf6e63efb895ad86507f8cf22a2351df15068fa309c871db2fae7641994490270"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x10"
}
```
