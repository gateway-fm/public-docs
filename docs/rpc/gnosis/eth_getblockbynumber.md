---
description: Returns information about a block by block number.
---

# eth_getBlockByNumber

### Parameters

- `QUANTITY|TAG` - integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
- `Boolean` - If true it returns the full transaction objects, if false it returns only the hashes of the transactions.

### Returns

See [`eth_getBlockByHash`](./#eth_getblockbyhash)

### Example

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1026339", false],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "author": "0xdb1c683758f493cef2e7089a3640502ab306322a",
        "difficulty": "0xfffffffffffffffffffffffffffffffe",
        "extraData": "0x4e65746865726d696e64",
        "gasLimit": "0x1036640",
        "gasUsed": "0x932a59",
        "hash": "0xf6e63efb895ad86507f8cf22a2351df15068fa309c871db2fae7641994490270",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000800040000680000000000000000000000000000080000000200000000000004000000000000008000000080000000000000000000000000000000000000200020000100000200000000800000400000000000020000010000000000000000000000000000000000000010000000008000000200004000000000000020000040200000000000000000000000800000000020000000000000000000200000002280200000000000000000100000020100010800000000000400020000010000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xdb1c683758f493cef2e7089a3640502ab306322a",
        "number": "0x1026339",
        "parentHash": "0xeb09b28955a1182635a617aa062f5fd55f84442fc06d8d04e9470518ca8e4dbd",
        "receiptsRoot": "0x52a1b5ee6881bc92bb169797fc57c52386ef8080da3f1cbd5742fb3bf355dd0d",
        "sealFields": [
            "0x841360c9c8",
            "0xb841ea6a1d85cc487a59408fae808e145cb74f6efbcb483f79334a3aff0c882567d9650214b6e8f5512b6a21af2ee44c50a7cf22c9a2d1d8546e8efbf23df33f60ce00"
        ],
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "signature": "ea6a1d85cc487a59408fae808e145cb74f6efbcb483f79334a3aff0c882567d9650214b6e8f5512b6a21af2ee44c50a7cf22c9a2d1d8546e8efbf23df33f60ce00",
        "size": "0x2299",
        "stateRoot": "0x826effb029336a3e38859588dd0be3d25cf6de0a9729743cdc0654519b5d3808",
        "step": "325110216",
        "timestamp": "0x60e3f0e8",
        "totalDifficulty": "0x1026338ffffffffffffffffffffffffeb9ed2ff",
        "transactions": [
            "0xbe173e36975ac7f769cf01bb341b13b1965d53409f5a908973f66bbbea9bdb6c",
            "0x6eb81c425db96c5ce1d3ad8ea6dfc0178ec8bfa06c619b535353c3c7f01516e9",
            "0x65901f22f86f9e6bac606b507c15252911b08f52e4fb684857e315c48deddeee",
            "0xa5546ba5c4160d70ced36667265afe08e6de7cca7bbd37d396f096c97c205a54",
            "0x19aa0ca1d2c0e25915912c22feda61066335deac5bb7d906a21c5dabbf836e9d",
            "0x66fc4e5e996d55fff525726276e5bdb2e2a845d305a4a36f7f82d116a9aca06b",
            "0x5beade4cf0e6bb36cfcf40bd15378167596cb6610a149abee505cc2089e3650e",
            "0xd4c1eb9b5d723c11845bf5a20c8e35cb67a08c2ef63885b11854475aef4ad22c",
            "0x9c00b8b793ad39821181c250df9289c34fdfb00ade3c2a01407d30f36d09f36b",
            "0x47224de122b2e1c898bece091657fc3800a7fc236a6f29fb4c8e153eb59102ec",
            "0x38a14b86adbc6912b60636cfea5d2e2c1c41d81669a9e13a4ae341f224064a2e",
            "0x492dcde15fb897260d36af132d93eef570afb264057a277d68982f2aee39a745",
            "0x46f83f23e88b1c8834357eb614d4442c746a223b03c08a471babb1ab78b36f65",
            "0xc51065b2083db486e4559e15e6836316f5be903f61e4527c42a9cd8ad66474b3",
            "0xa495dcb6f7930f32dcb1a0c47b63cf7db6768008424a2da809129048b0515cc1",
            "0x2d784511df4a836d90f681d6cf2a767cf5af10db411d35faacf45dcddd99067c"
        ],
        "transactionsRoot": "0xd74bf569a59ea5c0126ec4d4fc760a973101395a4bb44f2a465983864ed1ee2d",
        "uncles": []
    }
}
```
