---
description: >-
  Returns an array of all logs matching a given filter object.
---

# eth_getLogs

### Parameters

`Object` - The filter options:

- `fromBlock`: `QUANTITY|TAG` - (optional, default: "latest") Value:
  - Integer block number
  - "latest" for the last mined block
  - "pending", "earliest" for not yet mined transactions.
- `toBlock`: `QUANTITY|TAG` - (optional, default: "latest") Value:
  - Integer block number
  - "latest" for the last mined block
  - "pending", "earliest" for not yet mined transactions.
- `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: `Array` of `DATA`, - (optional) Array of 32 Bytes DATA topics.&#x20;
  - Topics are order-dependent. Each topic can also be an array of DATA with "or" options.&#x20;
  - Check out more details on how to format topics in [eth_newFilter](./#eth_newfilter).
- `blockHash`: `DATA`, 32 Bytes - (optional) With the addition of EIP-234 (Geth >= v1.8.13 or Parity >= v2.1.0), blockHash is a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to fromBlock = toBlock = the block number with hash `blockHash`. **If blockHash is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.**

### Returns

`Array` - Array of log objects, or an empty array if nothing has changed since last poll.

- For filters created with `eth_newBlockFilter` the return are block hashes (`DATA`, 32 Bytes), e.g. `["0x3454645634534..."]`.
- For filters created with `eth_newPendingTransactionFilter` the return are transaction hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
- For filters created with `eth_newFilter` logs are objects with following params:
  - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization. `false` if its a valid log.
  - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when its pending log.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was created from. `null` when its pending log.
  - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created from. `null` when its pending log.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when its pending. `null` when its pending log.
  - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its pending. `null` when its pending log.
  - `address`: `DATA`, 20 Bytes - address from which this log originated.
  - `data`: `DATA` - contains one or more 32 Bytes non-indexed arguments of the log.
  - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments.&#x20;
    - In _solidity_: The first topic is the _hash_ of the signature of the event (e.g. `Deposit(address,bytes32,uint256)`), except you declare the event with the `anonymous` specifier.

### **Example**

Request

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{ "address": "0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59", "fromBlock": "0x101f817","toBlock": "0x101f918","topics": []}],"id":1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xda240026aad6be41da3719808afdedbe5411461e4351d807a88cdcbc17e20d03",
            "blockNumber": "0x101f88d",
            "data": "0xb1a0f4bb87c5075d9cf6e0668960e0b247d486f9f3846fb03ca9ce622939b15b",
            "logIndex": "0x32",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000105cd22ed3d089bf5589c59b452f9de0796ca52d"
            ],
            "transactionHash": "0x0a8e1bc945ac5f692d1c4c1245d645615ee8b5173f3b496a71695c73cd4b61a2",
            "transactionIndex": "0x1d",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xda240026aad6be41da3719808afdedbe5411461e4351d807a88cdcbc17e20d03",
            "blockNumber": "0x101f88d",
            "data": "0xb1a0f4bb87c5075d9cf6e0668960e0b247d486f9f3846fb03ca9ce622939b15b",
            "logIndex": "0x33",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000459a3bd49f1ff109bc90b76125533699aaaaf9a6"
            ],
            "transactionHash": "0x9f6767d8723e27772fd9bb62808f1e52b4d34f55aa815b4c8341581586303be0",
            "transactionIndex": "0x1e",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xda240026aad6be41da3719808afdedbe5411461e4351d807a88cdcbc17e20d03",
            "blockNumber": "0x101f88d",
            "data": "0xb1a0f4bb87c5075d9cf6e0668960e0b247d486f9f3846fb03ca9ce622939b15b",
            "logIndex": "0x34",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000dac288df7a6e253578711fdd1bf3ccb877f0f7f9"
            ],
            "transactionHash": "0x4bb6bdb6e8c90d51c7a319e1d8539d4b1bf8eb011a45c0e1b857bf46945a8807",
            "transactionIndex": "0x1f",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0x1d445e39385642f26b238cb6c7174d19288b1f0625bc30b744d33a26a0b63cbd",
            "blockNumber": "0x101f88e",
            "data": "0xb1a0f4bb87c5075d9cf6e0668960e0b247d486f9f3846fb03ca9ce622939b15b",
            "logIndex": "0x1a",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000eaf183603ed92df9e856320e1ec605a9bce62b3e"
            ],
            "transactionHash": "0xebbefbb2142c5fa942488cad495fb527a16cfdc60d0b3f6a12d0964574a245f2",
            "transactionIndex": "0x18",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0x1d445e39385642f26b238cb6c7174d19288b1f0625bc30b744d33a26a0b63cbd",
            "blockNumber": "0x101f88e",
            "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
            "logIndex": "0x1e",
            "removed": false,
            "topics": [
                "0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7",
                "0x00000000000000000000000088ad09518695c6c3712ac10a214be5109a655671",
                "0x000000000000000000000000f6a78083ca3e2a662d6dd1703c939c8ace2e268d",
                "0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000013e54"
            ],
            "transactionHash": "0xebbefbb2142c5fa942488cad495fb527a16cfdc60d0b3f6a12d0964574a245f2",
            "transactionIndex": "0x18",
            "transactionLogIndex": "0x4",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xdaafc94ef7b6375bc4beca48d9e2f6798577d61bc42eaa5c3cec2fcfbb3f2779",
            "blockNumber": "0x101f8b0",
            "data": "0x619b0fbef92e4ed8792e2f8c02a5790bb7d07f7c3d95390fac73d2d486ead171",
            "logIndex": "0x30",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000dac288df7a6e253578711fdd1bf3ccb877f0f7f9"
            ],
            "transactionHash": "0xda7a88ad5b45b6d088c2274415151659118d4aecd830aef380ec0ed12bcd51e7",
            "transactionIndex": "0x1c",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xdaafc94ef7b6375bc4beca48d9e2f6798577d61bc42eaa5c3cec2fcfbb3f2779",
            "blockNumber": "0x101f8b0",
            "data": "0x619b0fbef92e4ed8792e2f8c02a5790bb7d07f7c3d95390fac73d2d486ead171",
            "logIndex": "0x31",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000459a3bd49f1ff109bc90b76125533699aaaaf9a6"
            ],
            "transactionHash": "0x43eac8ffc7816d76ed74196e238bf0f57e2b31496b90cf8bdaa225bd484519ac",
            "transactionIndex": "0x1d",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0xdaafc94ef7b6375bc4beca48d9e2f6798577d61bc42eaa5c3cec2fcfbb3f2779",
            "blockNumber": "0x101f8b0",
            "data": "0x619b0fbef92e4ed8792e2f8c02a5790bb7d07f7c3d95390fac73d2d486ead171",
            "logIndex": "0x32",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x000000000000000000000000105cd22ed3d089bf5589c59b452f9de0796ca52d"
            ],
            "transactionHash": "0xdc94abc346cb36c1abf08f3f3cca49be2adc1d29321a3257df45a215ea6f5099",
            "transactionIndex": "0x1e",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0x9a211dab44f812c9f88ad601e183f491c28464109414f294c401b6ccf915e776",
            "blockNumber": "0x101f8b2",
            "data": "0x619b0fbef92e4ed8792e2f8c02a5790bb7d07f7c3d95390fac73d2d486ead171",
            "logIndex": "0x0",
            "removed": false,
            "topics": [
                "0x5df9cc3eb93d8a9a481857a3b70a8ca966e6b80b25cf0ee2cce180ec5afa80a1",
                "0x00000000000000000000000019ac7c69e5f1ac95b8d49b30cbb79e81f1ab0dba"
            ],
            "transactionHash": "0xac80f933ffa7c899ea367c425f0a5542d870955edf6545ddad48c49bec1956b0",
            "transactionIndex": "0x0",
            "transactionLogIndex": "0x0",
            "type": "mined"
        },
        {
            "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
            "blockHash": "0x9a211dab44f812c9f88ad601e183f491c28464109414f294c401b6ccf915e776",
            "blockNumber": "0x101f8b2",
            "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
            "logIndex": "0x4",
            "removed": false,
            "topics": [
                "0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7",
                "0x00000000000000000000000088ad09518695c6c3712ac10a214be5109a655671",
                "0x000000000000000000000000f6a78083ca3e2a662d6dd1703c939c8ace2e268d",
                "0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000013e55"
            ],
            "transactionHash": "0xac80f933ffa7c899ea367c425f0a5542d870955edf6545ddad48c49bec1956b0",
            "transactionIndex": "0x0",
            "transactionLogIndex": "0x4",
            "type": "mined"
        }
    ]
}
```
