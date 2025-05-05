---
description: Returns the number of transactions sent from an address.
---

# eth_getTransactionCount

### Parameters

- `DATA`, 20 Bytes - address.
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

### Returns

`QUANTITY` - integer of the number of transactions send from this address.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet\
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x00000000092769687eeb04fdc990c363eddefec2","latest"],"id":13}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 13,
    "result": "0x4824"
}
```
