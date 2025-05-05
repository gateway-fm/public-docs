---
description: >-
  Returns information about an uncle of a block by hash and uncle index
  position.
---

# eth_getUncleByBlockHashAndIndex

### Parameters

- `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the

  [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

- `QUANTITY` - the uncle's index position.

### Returns

See [`eth_getBlockByHash`](./#eth_getblockbyhash)

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"id": 89,"jsonrpc": "2.0","method": "eth_getUncleByBlockHashAndIndex","params": ["0x14e2cf0b6e345e434808cd7e59e8a9295a0dee40b7ac695e381c9e018b973035","0x0"]}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": null
}
```
