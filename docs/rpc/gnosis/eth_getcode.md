---
description: Returns code at a given address.
---

# eth_getCode

### Parameters

- `DATA`, 20 Bytes - address.
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

### Returns

`DATA` - the code from the given address.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getCode","params":["0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "latest"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635c60da1b81146092575b6000604660cd565b905073ffffffffffffffffffffffffffffffffffffffff81161515606957600080fd5b60405136600082376000803683855af43d82016040523d6000833e808015608e573d83f35b3d83fd5b348015609d57600080fd5b5060a460cd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54905600a165627a7a7230582074808ee101bea5849b0339acc4d06c466b54a9ec6cfe2c1fb57dd2bfd19b7b0b0029"
}
```
