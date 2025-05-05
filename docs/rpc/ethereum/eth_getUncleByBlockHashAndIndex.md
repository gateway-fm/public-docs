# eth_getUncleByBlockHashAndIndex


> Returns information about an uncle of a block by hash and uncle index position


## Parameters

- `BLOCKHASH` - Hash of a block
- `QUANTITY` - The uncle''s index position (in hex)

## Returns

`BLOCK` - A block object, or null when no block was found:
- `number`: the block number. Null when the returned block is the pending block.
- `hash`: 32 Bytes - hash of the block. null when its pending block.
- `parentHash`: 32 Bytes - hash of the parent block.
- `nonce`: 8 Bytes - hash of the generated proof-of-work. Null when the returned block is the pending block.
- `sha3Uncles`: 32 Bytes - SHA3 of the uncles data in the block.
- `logsBloom`: 256 Bytes - the bloom filter for the logs of the block. Null when the returned block is the pending block.
- `transactionsRoot`: 32 Bytes - the root of the transaction trie of the block.
- `stateRoot`: 32 Bytes - the root of the final state trie of the block.
- `receiptsRoot`: 32 Bytes - the root of the receipts trie of the block.
- `miner`: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
- `difficulty`: hexadecimal of the difficulty for this block.
- `totalDifficulty`: hexadecimal of the total difficulty of the chain until this block.
- `extraData`: the "extra data" field of this block.
- `size`: hexadecimal the size of this block in bytes.
- `gasLimit`: the maximum gas allowed in this block.
- `gasUsed`: the total used gas by all transactions in this block.
- `timestamp`: the unix timestamp for when the block was collated.
- `uncles`: an Array of uncle hashes.

**Note**: An uncle doesn't contain individual transactions.


## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "id": 89,
    "jsonrpc": "2.0",
    "method": "eth_getUncleByBlockHashAndIndex",
    "params": [
        "0x14e2cf0b6e345e434808cd7e59e8a9295a0dee40b7ac695e381c9e018b973035",
        "0x0"
    ]
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 89,
    "result": {
        "difficulty": "0xa7d083e6d97",
        "extraData": "0xd983010302844765746887676f312e342e328777696e646f7773",
        "gasLimit": "0x2fefd8",
        "gasUsed": "0xa410",
        "hash": "0x88ed3cca14b627718552af3ea57e9d929cfb65d32be3cc428732529b885046de",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xf8b483dba2c3b7176a3da549ad41a48bb3121069",
        "mixHash": "0x78b2ce0fe111bb96eb1983409c86750bb6c819ac09cb9794fe4c3354c399fd85",
        "nonce": "0x8d793983c99b1690",
        "number": "0xef426",
        "parentHash": "0x6c6eb9f2cc57883953e51f77a315b58aafcbb8d96ec5a27bb079af3b13a0bbec",
        "receiptsRoot": "0xc73d09858a8859c6c0af3d25a738c63b05eed911d892596dfe98d49b53c4b3db",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x221",
        "stateRoot": "0x2d8e406ec3e1a1d8a46fc6c69329ba302687ea83ee195989f2c4678877c8a6b5",
        "timestamp": "0x56ba7660",
        "totalDifficulty": "0x5fbe04fe7e3c138e",
        "transactions": [],
        "transactionsRoot": "0x648a118b8ca072cbd95a67f6094552090ae2f2fa626e194a1eed5c6d3c775604",
        "uncles": []
    }
}
```
