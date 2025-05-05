---
description: >-
  Returns information about an uncle of a block by number and uncle index
  position.
---

# eth_getUncleByBlockNumberAndIndex

### Parameters

- `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).
- `QUANTITY` - the uncle's index position.

### Returns

See [`eth_getBlockByHash`](./#eth_getblockbyhash)

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"id": 89,"jsonrpc": "2.0","method": "eth_getUncleByBlockNumberAndIndex","params": ["0xEF428","0x0"]}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": null
}
```
