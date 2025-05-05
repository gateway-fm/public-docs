# eth_getLogs


> Returns an array of all logs matching a given filter object


## Parameters

`Object` - The filter options:

- `fromBlock`: `QUANTITY|TAG` - (optional, default: "latest") Value:
  - block number as a string in hexadecimal format
  - "latest" for the last mined block
  - "pending", "earliest" for not yet mined transactions.
- `toBlock`: `QUANTITY|TAG` - (optional, default: "latest") Value:
  - block number as a string in hexadecimal format
  - "latest" for the last mined block
  - "pending", "earliest" for not yet mined transactions.
- `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: `Array` of `DATA`, - (optional) Array of 32 Bytes DATA topics.
  - Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
  - Check out more details on how to format topics in [eth_newFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter).
- `blockHash`: `DATA`, 32 Bytes - (optional) With the addition of EIP-234 (Geth >= v1.8.13 or Parity >= v2.1.0), blockHash is a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to fromBlock = toBlock = the block number with hash `blockHash`. **If blockHash is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.**

## Returns

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
  - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments.
    - In _solidity_: The first topic is the _hash_ of the signature of the event (e.g. `Deposit(address,bytes32,uint256)`), except you declare the event with the `anonymous` specifier.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getLogs",
    "params": [
        {
            "fromBlock": "latest",
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        }
    ],
    "id": 0
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": [
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000706cac322",
            "logIndex": "0x2c",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000056534741cd8b152df6d48adf7ac51f75169a83b2",
                "0x0000000000000000000000003416cf6c708da44db2624d63ea0aaef7113527c6"
            ],
            "transactionHash": "0x06e4e8722ef6ac49bc98ea5a18b5fc5ba248a7339dd960b0639db753dc5c27b0",
            "transactionIndex": "0x7"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000000989680",
            "logIndex": "0x3f",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000612f9082af322e443c1dc9e35694bc557bb14027",
                "0x000000000000000000000000cd24902e90da58857ebc1db961dee8e2f08dfd6a"
            ],
            "transactionHash": "0x42f68658c5d94ca2e0af3a71e3b8e92c1ebfa1d93aa3c811ee3827adf1f23b42",
            "transactionIndex": "0x8"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000004a5d27e",
            "logIndex": "0x45",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000058883126ffd7319c38c7518bfcfea4e13b47edd",
                "0x00000000000000000000000000bf6049e884aa2736734fb03f71881e3dca8862"
            ],
            "transactionHash": "0x3c30eba277a74e841877dd0ee883f3f0a3b5dda7de64503c9da34e9eea541c9b",
            "transactionIndex": "0xb"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000003b735f78",
            "logIndex": "0x48",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000188740aec0262e1f368d85f94935b3e31edd4fbf",
                "0x0000000000000000000000004a4b439d5200801168fd2a89697f535e53ce274d"
            ],
            "transactionHash": "0xdd3838430902eab3dfa75ad43261944de399e27ab6a0141394301ae3f9d25941",
            "transactionIndex": "0x13"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x00000000000000000000000000000000000000000000000000000000165a0bc0",
            "logIndex": "0x5f",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000f89d7b9c864f589bbf53a82105107622b35eaa40",
                "0x0000000000000000000000009f3fc75826a0f5ed13f4e2d81d8f16d48b3219c7"
            ],
            "transactionHash": "0x6a58df56aaa7aae6db8362113514fb80d9777cd8ad1036baa17f18da21e03a0b",
            "transactionIndex": "0x22"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000000745a478",
            "logIndex": "0x61",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000dfd5293d8e347dfe59e90efd55b2956a1343963d",
                "0x0000000000000000000000008c68de668d75424c0f81ece20be195c3c445c68c"
            ],
            "transactionHash": "0x0d3e4bfd95cfcaed15ba38884c97a84b1bf3c619350013c865ba96e31114a5d3",
            "transactionIndex": "0x25"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x00000000000000000000000000000000000000000000000000000000994d2c55",
            "logIndex": "0x63",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000056eddb7aa87536c09ccc2793473599fd21a8b17f",
                "0x000000000000000000000000d86822dd812bcb85c2b88bf90d83e7d07b1f1e45"
            ],
            "transactionHash": "0xc6ccef516eeff504c1807148cdf068b85443de121a7482c59e26fdb8623244fc",
            "transactionIndex": "0x28"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000009641f45",
            "logIndex": "0x68",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000b395b5ded6bcf373dc2f33c3398d3140dac5ca66",
                "0x000000000000000000000000f60c2ea62edbfe808163751dd0d8693dcb30019c"
            ],
            "transactionHash": "0xc5a622ede343bf0922978da94682a469deaf8fb2845986f17d19a8f8f7bd6f95",
            "transactionIndex": "0x2d"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x00000000000000000000000000000000000000000000000000000000095785a6",
            "logIndex": "0x69",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000702cdbfa42f1aa12a81f28ddba8511680de32d10",
                "0x000000000000000000000000f60c2ea62edbfe808163751dd0d8693dcb30019c"
            ],
            "transactionHash": "0xb245ff1cac7daccc2edb2fd439b0cc0cf1d0b4609c545ce268fe6fc8893a5a02",
            "transactionIndex": "0x2e"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000014dc9380",
            "logIndex": "0x6a",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000b425607c13f12d1f7388760bcb954b58e999bb25",
                "0x000000000000000000000000f60c2ea62edbfe808163751dd0d8693dcb30019c"
            ],
            "transactionHash": "0x7f177253d327cb17e8d620f181f97a5f473309bb89eb8c90f11971e86fd16dba",
            "transactionIndex": "0x2f"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000021bfb32f",
            "logIndex": "0x70",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000050a249bedae2a3f124f06befbd0c5ce43a1a133e",
                "0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4"
            ],
            "transactionHash": "0x476448ed1535f85af0e0eb1a81fb752d0c599399c6b1ba59d342b0a59099dd83",
            "transactionIndex": "0x36"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000000989680",
            "logIndex": "0x71",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000002436962daa3db44ea14437741a528ab16aa1fe1b",
                "0x0000000000000000000000007d54a68c2a05ca9fadeb9fdcde2fb563e5a0a7e2"
            ],
            "transactionHash": "0x42d12a320f0d41600021f52548b7568cb6b93155c1a62e2de6977a0351a74095",
            "transactionIndex": "0x37"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000018dc8c18",
            "logIndex": "0x72",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000074dec05e5b894b0efec69cdf6316971802a2f9a1",
                "0x000000000000000000000000eb5a800060286a9f5a1b1af321fa6c5dc7b56bf8"
            ],
            "transactionHash": "0xba8d909b14f6ef144fd060d67890220ac268a7716b53ab478351fd889ef221a6",
            "transactionIndex": "0x38"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x00000000000000000000000000000000000000000000000000000002820dc95f",
            "logIndex": "0x73",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000ad6eaa735d9df3d7696fd03984379dae02ed8862",
                "0x000000000000000000000000f5511ea04d38ada10643588053c369d9a0097915"
            ],
            "transactionHash": "0xc08f4e25c30f28cbb057886599c5a98bb79e05277b9b07e1c354486711bb3ad1",
            "transactionIndex": "0x39"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000dde878c00",
            "logIndex": "0x85",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000038a1a3b93db7c7e6516415fb20f50055868c5c3f",
                "0x0000000000000000000000000c81486797dd4eaf867607fdc1d1c777734298e1"
            ],
            "transactionHash": "0x742f7070cde1cd068066e7aa85dcfc758f731f640350cfe7ca77e63e3286d16c",
            "transactionIndex": "0x46"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000130aa661d",
            "logIndex": "0xa3",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000b9915054a26b59080ef7110da6a2511224759b0e",
                "0x000000000000000000000000836bd636dddf85ecfa9ff3b64cedd67d072a99ca"
            ],
            "transactionHash": "0xe03d5381437de45829a0c1e7deadbd9e0b2402c2e7208b53a094848bebb67170",
            "transactionIndex": "0x4f"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000000ee6b280",
            "logIndex": "0xa4",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000b9f62909227b2591dda86d94330b6d07174b8503",
                "0x000000000000000000000000b9f62909227b2591dda86d94330b6d07174b8503"
            ],
            "transactionHash": "0xb5d05dab5564c7dc545d22aec4e309bdc7c8a5e3f163b36cf3c85a98a3a6a705",
            "transactionIndex": "0x52"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x00000000000000000000000000000000000000000000000000000000b2d05e00",
            "logIndex": "0xa5",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000212874fa1dab44a9b0e7a92126964b6fa2a85029",
                "0x00000000000000000000000018b72d627a33495e14141834a707437d4b90e6ec"
            ],
            "transactionHash": "0xd854a76777c44eb2ca86ff5b297d9181f9dbc0ca5d112c960ceb5d814b22870e",
            "transactionIndex": "0x53"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000003b9aca00",
            "logIndex": "0xda",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000033de33ad536b1965c4c11ed36ca869a9f285317e",
                "0x00000000000000000000000011b815efb8f581194ae79006d24e0d814b7697f6"
            ],
            "transactionHash": "0x3fc164d6829ccd62595ba484ed8b99ea8e75e426043c0cac0d06ff854d107136",
            "transactionIndex": "0x73"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000000c7848d0",
            "logIndex": "0x104",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000004e68ccd3e89f51c3074ca5072bbac773960dfa36",
                "0x000000000000000000000000ef1c6e67703c7bd7107eed8303fbe6ec2554bf6b"
            ],
            "transactionHash": "0xd9d7b1dd9c1b7a50f0fedddbb812aa2d41b0917602b9d7c1effcd8e65f6b3ece",
            "transactionIndex": "0x82"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000000c7848d0",
            "logIndex": "0x108",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000ef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",
                "0x000000000000000000000000a19f4ebe4cbb3c9b57c16eb4dfc7a52d46a5e891"
            ],
            "transactionHash": "0xd9d7b1dd9c1b7a50f0fedddbb812aa2d41b0917602b9d7c1effcd8e65f6b3ece",
            "transactionIndex": "0x82"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000001a3d040",
            "logIndex": "0x110",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000001918d8ed8a3499b27c353905d558a85ad40b36d2",
                "0x00000000000000000000000096c195f6643a3d797cb90cb6ba0ae2776d51b5f3"
            ],
            "transactionHash": "0xbedc895ea7babd27ab098d50dcef181a848553fea683fdeea3a1979466477ff9",
            "transactionIndex": "0x84"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000220fe0385",
            "logIndex": "0x112",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000001918d8ed8a3499b27c353905d558a85ad40b36d2",
                "0x000000000000000000000000555b6ee8fab3dfdbcca9121721c435fd4c7a1fd1"
            ],
            "transactionHash": "0xbedc895ea7babd27ab098d50dcef181a848553fea683fdeea3a1979466477ff9",
            "transactionIndex": "0x84"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000220fe0385",
            "logIndex": "0x114",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000555b6ee8fab3dfdbcca9121721c435fd4c7a1fd1",
                "0x00000000000000000000000011b815efb8f581194ae79006d24e0d814b7697f6"
            ],
            "transactionHash": "0xbedc895ea7babd27ab098d50dcef181a848553fea683fdeea3a1979466477ff9",
            "transactionIndex": "0x84"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000029b92700",
            "logIndex": "0x11b",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000292f04a44506c2fd49bac032e1ca148c35a478c8",
                "0x000000000000000000000000300aae334dd5f1d5f691467df83a06e1f188e99d"
            ],
            "transactionHash": "0x363d523478717233de5cb4eb96e3b97b9a7eb04d9c68a1ad621cadb779e42677",
            "transactionIndex": "0x85"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0000000000000000000000000000000000000000000000000000000007489fc0",
            "logIndex": "0x11c",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x000000000000000000000000cfab3af6452c3ce154f01dfcfe63ce97547fa9c7",
                "0x000000000000000000000000f6c383d94978b402e026ad628ac5036993a4715c"
            ],
            "transactionHash": "0x4ecc6a2c6a9883781a5d042bb1329f525f82348694ec29939189655e7a4d2390",
            "transactionIndex": "0x86"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x0ef772882872ff15bc06ca96caceb6d09a63e2d4afffffffffffffffffffffff",
            "logIndex": "0x11e",
            "removed": false,
            "topics": [
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                "0x0000000000000000000000005f8ef2bc5bd8ca18f34f04fd43bd7e0b5b62fdb0",
                "0x00000000000000000000000030baeaec76fafd12cac260eb762d3bdb49ba4d25"
            ],
            "transactionHash": "0xcf56e728be3ea5eb25e297c6c9a3e4900bbe2761eebaa2510be2c341a5af1530",
            "transactionIndex": "0x89"
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "blockHash": "0xd1b8324dfb242e8d9efcf6045a703b0c819bf408ad700a1ab7bd0bfe4ac3e40b",
            "blockNumber": "0x10488d3",
            "data": "0x000000000000000000000000000000000000000000000000000000000c36e112",
            "logIndex": "0x124",
            "removed": false,
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000006b88ee85a06bfe2d378a87c22551bef39f7d889b",
                "0x000000000000000000000000b0cc4c265aa03925b85695f12f5ac7fda535067d"
            ],
            "transactionHash": "0x7326ab2d41586c50060fd2b0b9c7fd55b99c4c356bbf2410c486846d2d966f08",
            "transactionIndex": "0x90"
        }
    ]
}
```
