---
description: Returns the current network id.
---

# net_version

#### **Parameters**

none

#### **Returns**

`String` - The current network id.

`"1"`: Ethereum Mainnet
`"2"`: Morden Testnet (deprecated)
`"3"`: Ropsten Testnet
`"4"`: Rinkeby Testnet
`"42"`: Kovan Testnet

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{ "id": 89, "jsonrpc": "2.0", "method": "net_version", "params": []}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": "100"
}
```
