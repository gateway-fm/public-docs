---
description: >-
  Returns the currently configured chain ID, a value used in replay-protected
  transaction signing as introduced by EIP-155.
---

# eth_chainId

### **Parameters**

None.

### **Returns**

`QUANTITY` - integer of the current chain ID.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x64"
}
```
