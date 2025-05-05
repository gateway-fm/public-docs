---
description: >-
  Returns the value from a storage position at a given address, or in other
  words, returns the state of the contract's storage, which may not be exposed
  via the contract's methods.
---

# eth_getStorageAt

## Parameters

- `DATA`, 20 Bytes - address of the storage.
- `QUANTITY` - integer of the position in the storage.
- `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`DATA` - the value at this storage position.

### Example

Calculating the correct position depends on the storage to retrieve. Consider the following contract deployed at `0x295a70b2de5e3953354a6a8344e616ed314d7251` by address `0x391694e7e0b0cce554cb130d723a9d27458f9298`.

```javascript
contract Storage {
    uint pos0;
    mapping(address => uint) pos1;

    function Storage() {
        pos0 = 1234;
        pos1[msg.sender] = 5678;
    }
}
```

Retrieving the value of `pos0` is straight forward:

```bash
curl https://rpc.<REGION>.gateway.fm/v4/gnosis/non-archival/mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59", "0x0", "latest"], "id": 1}'
```

Result

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

Retrieving an element of the map is harder. The position of an element in the map is calculated with:

```javascript
keccack(LeftPad32(key, 0), LeftPad32(map position, 0))
```

This means to retrieve the storage on `pos1[“0x391694e7e0b0cce554cb130d723a9d27458f9298”]` we need to calculate the position with:

```javascript
keccak(
  decodeHex(
    "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" +
      "0000000000000000000000000000000000000000000000000000000000000001",
  ),
);
```

The geth console which comes with the web3 library can be used to make the calculation:

```bash
> var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"
undefined
> web3.sha3(key, {"encoding": "hex"})
"0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"
```

Now to fetch the storage:

```bash
curl https://rpc.gateway.fm/v4/ethereum/mainnet \
-X POST \
-H "Authorization: Bearer <YOUR_API_KEY>" \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE","0x0",14036168 ],"id": 89}'
```

Result

```javascript
{
    "jsonrpc":"2.0",
    "id":89,
    "result":"0x0000000000000000000000000000000000000000000000000000000000000000"
}
```
