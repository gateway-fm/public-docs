---
description: Returns the receipt of a transaction by transaction hash.
---

# eth_getTransactionReceipt

**Note:** the receipt is not available for pending transactions.

### Parameters

`DATA`, 32 Bytes - hash of a transaction

### Returns

- `Object` - A transaction receipt object, or null when no receipt was found:
  - `transactionHash`: `DATA`, 32 Bytes - hash of the transaction.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
  - `blockNumber`: `QUANTITY` - block number where this transaction was in.
  - `from`: `DATA`, 20 Bytes - address of the sender.
  - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
  - `cumulativeGasUsed`: `QUANTITY` - The total amount of gas used when this transaction was executed in the block.
  - `gasUsed`: `QUANTITY` - The amount of gas used by this specific transaction alone.
  - `contractAddress`: `DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
  - `logs`: `Array` - Array of log objects, which this transaction generated.
  - `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns either:

- `root` : `DATA` 32 bytes of post-transaction stateroot (pre Byzantium)
- `status`: `QUANTITY` either 1 (success) or 0 (failure)

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"id": 1,"jsonrpc": "2.0","method": "eth_getTransactionReceipt","params": ["0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778"]}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
        "blockNumber": "0x10787f5",
        "contractAddress": null,
        "cumulativeGasUsed": "0x3cf47",
        "effectiveGasPrice": "0x244d614e03b",
        "from": "0x70b4a5bffc002b68623cbc17ab777e625307011d",
        "gasUsed": "0x3cf47",
        "logs": [
            {
                "address": "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000000000000000000000000000001413ad98d64bd959",
                "logIndex": "0x0",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000001af298d8bfd6e36ccdfd4b3659077d7a3b573d45",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x0",
                "type": "mined"
            },
            {
                "address": "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000000000000000000000000000001413ad98d64bd959",
                "logIndex": "0x1",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346",
                    "0x0000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea36"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x1",
                "type": "mined"
            },
            {
                "address": "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b183460000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea360000000000000000000000000000000000000000000000001413ad98d64bd959",
                "logIndex": "0x2",
                "removed": false,
                "topics": [
                    "0x11249f0fc79fc134a15a10d1da8291b79515bf987e036ced05b9ec119614070b"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x2",
                "type": "mined"
            },
            {
                "address": "0x2f9cebf5de3bc25e0643d0e66134e5bf5c48e191",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000000000000000000000000000192f8bac0b6799b88e",
                "logIndex": "0x3",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea36",
                    "0x0000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x3",
                "type": "mined"
            },
            {
                "address": "0x2f9cebf5de3bc25e0643d0e66134e5bf5c48e191",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000001a90e50a0d0782cf54dfd96259b89a65babcea360000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf0000000000000000000000000000000000000000000000192f8bac0b6799b88e",
                "logIndex": "0x4",
                "removed": false,
                "topics": [
                    "0x11249f0fc79fc134a15a10d1da8291b79515bf987e036ced05b9ec119614070b"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x4",
                "type": "mined"
            },
            {
                "address": "0x1a90e50a0d0782cf54dfd96259b89a65babcea36",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x000000000000000000000000000000000000000000000da50eef6630dbe6545100000000000000000000000000000000000000000000000aec395f35f21c5670",
                "logIndex": "0x5",
                "removed": false,
                "topics": [
                    "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x5",
                "type": "mined"
            },
            {
                "address": "0x1a90e50a0d0782cf54dfd96259b89a65babcea36",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001413ad98d64bd9590000000000000000000000000000000000000000000000192f8bac0b6799b88e0000000000000000000000000000000000000000000000000000000000000000",
                "logIndex": "0x6",
                "removed": false,
                "topics": [
                    "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346",
                    "0x0000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x6",
                "type": "mined"
            },
            {
                "address": "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x00000000000000000000000000000000000000000000000083ab7a4b7b839a0a",
                "logIndex": "0x7",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000007feb0ddd7bdc11589f6919a51ac5536bcfd854bf",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x7",
                "type": "mined"
            },
            {
                "address": "0x7feb0ddd7bdc11589f6919a51ac5536bcfd854bf",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x000000000000000000000000000000000000000000002c7e701c6e0632537dee0000000000000000000000000000000000000000000000e8cbd04b6fb74ea509",
                "logIndex": "0x8",
                "removed": false,
                "topics": [
                    "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x8",
                "type": "mined"
            },
            {
                "address": "0x7feb0ddd7bdc11589f6919a51ac5536bcfd854bf",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000000000000000000000000000192f8bac0b6799b88e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083ab7a4b7b839a0a",
                "logIndex": "0x9",
                "removed": false,
                "topics": [
                    "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0x9",
                "type": "mined"
            },
            {
                "address": "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x000000000000000000000000000000000000000000000000826e73a4946b22ad",
                "logIndex": "0xa",
                "removed": false,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346",
                    "0x0000000000000000000000001af298d8bfd6e36ccdfd4b3659077d7a3b573d45"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0xa",
                "type": "mined"
            },
            {
                "address": "0x1af298d8bfd6e36ccdfd4b3659077d7a3b573d45",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x00000000000000000000000000000000000000000000053e4a129caa627efc600000000000000000000000000000000000000000000021f6aba1b5a9bd0ad0f5",
                "logIndex": "0xb",
                "removed": false,
                "topics": [
                    "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0xb",
                "type": "mined"
            },
            {
                "address": "0x1af298d8bfd6e36ccdfd4b3659077d7a3b573d45",
                "blockHash": "0x3b7e9781c36c7dd97c688aa879e79cf10c71076d40d426d38c87a6fa361db623",
                "blockNumber": "0x10787f5",
                "data": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000826e73a4946b22ad0000000000000000000000000000000000000000000000001413ad98d64bd9590000000000000000000000000000000000000000000000000000000000000000",
                "logIndex": "0xc",
                "removed": false,
                "topics": [
                    "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346",
                    "0x00000000000000000000000096f9a82cefdbf3661bf23a2e0997821326b18346"
                ],
                "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
                "transactionIndex": "0x0",
                "transactionLogIndex": "0xc",
                "type": "mined"
            }
        ],
        "logsBloom": "0x01200000000800000000000088000000000010000000000900000000000000000000000200100000002000000000000000000000000000000000010000000000000000000000000000000008000000202100000000000000000000002020000000000000000000008000000000000000000000800000000000000010000000000000000000030000000000000000002000000000000000080000004010000000000000000000000100010000010000100000000000000010000004000000000000000002000020000000000000400000000000000000001000000000020000000000000000001000000080004000000000000000000000000000000008000000",
        "status": "0x1",
        "to": "0x96f9a82cefdbf3661bf23a2e0997821326b18346",
        "transactionHash": "0x208b6b084c40d39f548992375d34f212e80eae42a21668f4a1d512fecffec778",
        "transactionIndex": "0x0",
        "type": "0x0"
    }
}
```
