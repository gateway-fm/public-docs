---
description: >-
  Creates a new message call transaction or a contract creation for signed
  transactions.
---

# eth_sendRawTransaction

Gateway does not store keys, so transactions sent via Gateway must be signed ahead of time using another provider like [ethers](https://docs.ethers.io/v5/api/signer/) (via `eth_signTransaction`) and sent with `eth_sendRawTransaction`.

### Parameters

`DATA` The signed transaction data.

### Returns

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet\
-X POST \
-H "Content-Type: application/json" \
-d '{"id": 6008149,"jsonrpc": "2.0","method": "eth_sendRawTransaction","params": ["0xf8687884f46109038252089447ac4f3a5ea94b648672648e730bfe48ed6e734985e8d4a51000802ca0ee5f7c40c98ce6f0f2aa05ebb65e96ddf402f1152fbb8b76893ddb2b0fd6f1d0a068e60320ad7ab56a5200d55ba97c783d4ad37945eb74d1f5d3100155f059fbae"]}'
```

Result

```javascript
{
  "jsonrpc":"2.0",
  "id":6008149,
  "result":"0x3831c25a7e0e7fc8a3ce5c5a6b4b93a1608a362d6ce08015061463f930f0774b"
  }
```
