# eth_getTransactionByHash


> Returns the information about a transaction requested by transaction hash. In the response object, `blockHash`, `blockNumber`, and `transactionIndex` are
  `null` when the transaction is pending.


## Parameters

`DATA`, 32 Bytes - hash of a transaction

## Returns

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

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByHash",
    "params": [
        "0xb2fea9c4b24775af6990237aa90228e5e092c56bdaee74496992a53c208da1ee"
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
        "blockHash": "0x785b221ec95c66579d5ae14eebe16284a769e948359615d580f02e646e93f1d5",
        "blockNumber": "0x52a90b",
        "chainId": "0x1",
        "from": "0x11b6a5fe2906f3354145613db0d99ceb51f604c9",
        "gas": "0x6b6c",
        "gasPrice": "0x11e1a300",
        "hash": "0xb2fea9c4b24775af6990237aa90228e5e092c56bdaee74496992a53c208da1ee",
        "input": "0x80dfa34a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002e516d556558334448416654747442464a42315454384a617a67765744776a727a7342686973693473547532613551000000000000000000000000000000000000",
        "nonce": "0x10",
        "r": "0xacdf839bdcb6653da60900f739076a00ecbe0059fa046933348e9b68a62a222",
        "s": "0x132a0517a4c52916e0c6b0e74b0479326891df2a9afd711482c7f3919b335ff6",
        "to": "0xfa28ec7198028438514b49a3cf353bca5541ce1d",
        "transactionIndex": "0x25",
        "type": "0x0",
        "v": "0x26",
        "value": "0x0"
    }
}
```
