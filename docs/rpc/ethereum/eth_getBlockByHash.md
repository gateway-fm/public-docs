# eth_getBlockByHash


> Returns information about a block by block hash.


## Parameters

- `HASH`, 32 Bytes - Hash of a block.
- `Boolean` - If `true` it returns the full transaction objects, if `false` it returns only the hashes of the transactions.

## Returns

- `Object` - A block object with the following fields, or null when no block was found:
  - `number`: QUANTITY - the block number. null when its pending block.
  - `hash`: DATA, 32 Bytes - hash of the block. null when its pending block.
  - `parentHash`: DATA, 32 Bytes - hash of the parent block.
  - `nonce`: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
  - `sha3Uncles`: DATA, 32 Bytes - SHA3 of the uncles data in the block.
  - `logsBloom`: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
  - `transactionsRoot`: DATA, 32 Bytes - the root of the transaction trie of the block.
  - `stateRoot`: DATA, 32 Bytes - the root of the final state trie of the block.
  - `receiptsRoot`: DATA, 32 Bytes - the root of the receipts trie of the block.
  - `miner`: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - `difficulty`: QUANTITY - integer of the difficulty for this block.
  - `totalDifficulty`: QUANTITY - integer of the total difficulty of the chain until this block.
  - `extraData`: DATA - the "extra data" field of this block.
  - `size`: QUANTITY - integer the size of this block in bytes.
  - `gasLimit`: QUANTITY - the maximum gas allowed in this block.
  - `gasUsed`: QUANTITY - the total used gas by all transactions in this block.
  - `timestamp`: QUANTITY - the unix timestamp for when the block was collated.
  - `transactions`: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
  - `uncles`: Array - Array of uncle hashes.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByHash",
    "params": [
        "0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6",
        true
    ],
    "id": 1
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x2d50ba175407",
        "extraData": "0xe4b883e5bda9e7a59ee4bb99e9b1bc",
        "gasLimit": "0x47e7c4",
        "gasUsed": "0x5208",
        "hash": "0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x61c808d82a3ac53231750dadc13c777b59310bd9",
        "mixHash": "0xc38853328f753c455edaa4dfc6f62a435e05061beac136c13dbdcd0ff38e5f40",
        "nonce": "0x3b05c6d5524209f1",
        "number": "0x1e8480",
        "parentHash": "0x57ebf07eb9ed1137d41447020a25e51d30a0c272b5896571499c82c33ecb7288",
        "receiptsRoot": "0x84aea4a7aad5c5899bd5cfc7f309cc379009d30179316a2a7baa4a2ea4a438ac",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x28a",
        "stateRoot": "0x96dbad955b166f5119793815c36f11ffa909859bbfeb64b735cca37cbf10bef1",
        "timestamp": "0x57a1118a",
        "totalDifficulty": "0x262c34a6fd1268f6c",
        "transactions": [
            {
                "blockHash": "0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6",
                "blockNumber": "0x1e8480",
                "from": "0x32be343b94f860124dc4fee278fdcbd38c102d88",
                "gas": "0x51615",
                "gasPrice": "0x6fc23ac00",
                "hash": "0xc55e2b90168af6972193c1f86fa4d7d7b31a29c156665d15b9cd48618b5177ef",
                "input": "0x",
                "nonce": "0x1efc5",
                "r": "0x51222d91a379452395d0abaff981af4cfcc242f25cfaf947dea8245a477731f9",
                "s": "0x3a997c910b4701cca5d933fb26064ee5af7fe3236ff0ef2b58aa50b25aff8ca5",
                "to": "0x104994f45d9d697ca104e5704a7b77d7fec3537c",
                "transactionIndex": "0x0",
                "type": "0x0",
                "v": "0x1b",
                "value": "0x821878651a4d70000"
            }
        ],
        "transactionsRoot": "0xb31f174d27b99cdae8e746bd138a01ce60d8dd7b224f7c60845914def05ecc58",
        "uncles": []
    }
}
```
