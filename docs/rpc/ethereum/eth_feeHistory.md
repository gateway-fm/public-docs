# eth_feeHistory


> Returns a collection of historical gas information


## Parameters

- `BLOCKCOUNT` - Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
- `NEWESTBLOCK` - Highest number block of the requested range.
- `REWARDPERCENTILES` - \(optional\) A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.

## Returns

`Object`

- `OLDESTBLOCK` - Lowest number block of the returned range.
- `BASEFEEPERGAS` - An array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks.
- `GASUSEDRATIO` - An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.
- `REWARD` - \(Optional\) An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_feeHistory",
    "params": [
        2,
        "latest",
        [
            15,
            25
        ]
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
        "baseFeePerGas": [
            "0x8a5b81648",
            "0x85f783fae",
            "0x7feac4b36"
        ],
        "gasUsedRatio": [
            0.3730654333333333,
            0.3193644666666667
        ],
        "oldestBlock": "0x1047fc1",
        "reward": [
            [
                "0x5f5e100",
                "0x5f5e100"
            ],
            [
                "0x5f5e100",
                "0x5f5e100"
            ]
        ]
    }
}
```
