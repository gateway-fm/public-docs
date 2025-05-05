---
description: Returns the number of uncles in a block matching the give block number.
---

# eth_getUncleCountByBlockNumber

### Parameters

`QUANTITY|TAG` - integer of a block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

### Returns

`QUANTITY` - integer of the number of uncles in this block.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params":["0x29c"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": null
}
```
