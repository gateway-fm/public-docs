---
description: >-
  Returns information about a transaction by block number and transaction index
  position.
---

# eth_getTransactionByBlockNumberAndIndex

### Parameters

- `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).
- `QUANTITY` - the transaction index position.

### Returns

See [`eth_getTransactionByHash`](./#eth_gettransactionbyhash)

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"id": 89,"jsonrpc": "2.0","method": "eth_getTransactionByBlockNumberAndIndex","params": ["latest","0x3"]}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": {
        "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
        "blockNumber": "0x10787f5",
        "chainId": "0x64",
        "condition": null,
        "creates": null,
        "from": "0x0f9f9004ccf1fef85ee9a34d45b95d83365d34f7",
        "gas": "0x2625a0",
        "gasPrice": "0x72c31e6d97",
        "hash": "0x739c860166011bb7195b7f7da2874293c2b82b4cb8195f8425f56bde3d63f26e",
        "input": "0x893d242d000000000000000000000000187c938543f2bde09fe39034fe3ff797a3d35ca0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026b06757f8b898c00000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x9172",
        "publicKey": "0xc52051f8b9cb5d74b51d5bde7f378a2debdd52ba8c323ec2e30e9edd50f31a1e27192dde3e3af16fe51011fea3fd6b91d236eda0d0762450d4b692f937d3b0d3",
        "r": "0xc4d3d93f9d2ec81f7d04c9049b1072c1cc43cad9c0a29fbd224db489d04f65a4",
        "raw": "0xf9010d8291728572c31e6d97832625a0945d9593586b4b5edbd23e7eba8d88fd8f09d83ebd80b8a4893d242d000000000000000000000000187c938543f2bde09fe39034fe3ff797a3d35ca0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026b06757f8b898c00000000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000000081eca0c4d3d93f9d2ec81f7d04c9049b1072c1cc43cad9c0a29fbd224db489d04f65a4a07fd3e1403f0e959cf111da588f1f6390891aa94d4ef4a715e9d674a025c6ccce",
        "s": "0x7fd3e1403f0e959cf111da588f1f6390891aa94d4ef4a715e9d674a025c6ccce",
        "standardV": "0x1",
        "to": "0x5d9593586b4b5edbd23e7eba8d88fd8f09d83ebd",
        "transactionIndex": "0x3",
        "type": "0x0",
        "v": "0xec",
        "value": "0x0"
    }
}
```
