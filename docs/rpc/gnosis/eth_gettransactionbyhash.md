---
description: Returns the information about a transaction requested by transaction hash.
  In the response object, `blockHash`, `blockNumber`, and `transactionIndex` are
  `null` when the transaction is pending.
---

# eth_getTransactionByHash

### Parameters

`DATA`, 32 Bytes - hash of a transaction

### Returns

- `Object` - A transaction object, or null when no transaction was found:
  - `hash`: `DATA`, 32 Bytes - hash of the transaction.
  - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. null when its pending.
  - `blockNumber`: `QUANTITY` - block number where this transaction was in. null when its pending.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block. null when its pending.
  - `from`: `DATA`, 20 Bytes - address of the sender.
  - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
  - `value`: `QUANTITY` - value transferred in Wei.
  - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
  - `gas`: `QUANTITY` - gas provided by the sender.
  - `input`: `DATA` - the data send along with the transaction.
  - `v`: `QUANTITY` - ECDSA recovery id
  - `r`: `DATA`, 32 Bytes - ECDSA signature r
  - `s`: `DATA`, 32 Bytes - ECDSA signature s

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d'{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778"],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
        "blockNumber": "0x10787f5",
        "chainId": "0x64",
        "condition": null,
        "creates": null,
        "from": "0x70b4a5bffc002b68623cbc17ab777e625307011d",
        "gas": "0xc3500",
        "gasPrice": "0x244d614e03b",
        "hash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
        "input": "0xdab2ed45000000000000000000000000000000000000000000000000826e73a4946b22b100000000000000000000000000000000000000000000000000354a6ba7a1800000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000006103c0e400000000000000000000000000000000000000000000000000000000000000030000000000000000000000001af298d8bfd6e36ccdfd4b3659077d7a3b573d450000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea360000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000e91d153e0b41518a2ce8dd3d7944fa863463a97d000000000000000000000000b7d311e2eb55f2f68a9440da38e7989210b9a05e0000000000000000000000002f9cebf5de3bc25e0643d0e66134e5bf5c48e191000000000000000000000000e91d153e0b41518a2ce8dd3d7944fa863463a97d",
        "nonce": "0x2aa",
        "publicKey": "0xefbbd83a7f8821edd407d3907ebaa93c6bb36a901296b82f5c49e275048988c1c8b654399259c36a3eee61e85a0f85679659861b96138ec31301fcd6199470ca",
        "r": "0x98bc28d7a8460132d5ce87df739dfb98fea92bce6a9fbf914af21c5e2475e345",
        "raw": "0xf9022f8202aa860244d614e03b830c35009496f9a82cefdbf3661bf23a2e0997821326b1834680b901c4dab2ed45000000000000000000000000000000000000000000000000826e73a4946b22b100000000000000000000000000000000000000000000000000354a6ba7a1800000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000006103c0e400000000000000000000000000000000000000000000000000000000000000030000000000000000000000001af298d8bfd6e36ccdfd4b3659077d7a3b573d450000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea360000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000e91d153e0b41518a2ce8dd3d7944fa863463a97d000000000000000000000000b7d311e2eb55f2f68a9440da38e7989210b9a05e0000000000000000000000002f9cebf5de3bc25e0643d0e66134e5bf5c48e191000000000000000000000000e91d153e0b41518a2ce8dd3d7944fa863463a97d81eca098bc28d7a8460132d5ce87df739dfb98fea92bce6a9fbf914af21c5e2475e345a0075101c9192dc09b799aed560d18dd76f72fae37bc79b820c15d6bee58a1fa92",
        "s": "0x75101c9192dc09b799aed560d18dd76f72fae37bc79b820c15d6bee58a1fa92",
        "standardV": "0x1",
        "to": "0x96f9a82cefdbf3661bf23a2e0997821326b18346",
        "transactionIndex": "0x0",
        "type": "0x0",
        "v": "0xec",
        "value": "0x0"
    }
}
```
