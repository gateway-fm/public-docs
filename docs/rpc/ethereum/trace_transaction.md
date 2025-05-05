# trace_transaction


> Returns an object with data about the sync status or false.


## Parameters

- `HASH` - The hash of a transaction

## Returns

`array` - The block traces, which have the following fields (please note that all return types are hexadecimal representations of their data type unless otherwise stated):
- `action` - The ParityTrace object, which has the following fields:
  - `from` - The address of the sender
  - `callType` - The type of method such as call, delegatecall
  - `gas` - The gas provided by the sender, encoded as hexadecimal
  - `input` - The data sent along with the transaction
  - `to` - The address of the receiver
  - `value` - The integer of the value sent with this transaction, encoded as hexadecimal
- `blockHash` - The hash of the block where this transaction was in
- `blockNumber` - The block number where this transaction was in
- `result` - The ParityTraceResult object which has the following fields:
  - `gasUsed` - The amount of gas used by this specific transaction alone
  - `output` - The value returned by the contract call, and it only contains the actual value sent by the RETURN method. If the RETURN method was not executed, the output is empty bytes
- `subtraces` - The traces of contract calls made by the transaction
- `traceAddress` - The list of addresses where the call executed, the address of the parents and the order of the current sub call
- `transactionHash` - The hash of the transaction
- `transactionPosition` - The transaction position
- `type` - The value of the method such as call or create

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "method": "trace_transaction",
    "params": [
        "0xd3cb1a2e2baa0b65ab8b375830c0675595828e7e0b1b950981267d5700c11827"
    ],
    "id": 1,
    "jsonrpc": "2.0"
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        {
            "action": {
                "callType": "call",
                "from": "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",
                "gas": "0x0",
                "input": "0x",
                "to": "0xfa02fbefb7ea1faea810e8ec19eecdb37c6dfb28",
                "value": "0xe961c9e8839749"
            },
            "blockHash": "0xfc4442189e5693888dbf06db13dfaee41ed2569ecdaa05c8356b5326cdcaa793",
            "blockNumber": 17080944,
            "result": {
                "gasUsed": "0x0",
                "output": "0x"
            },
            "subtraces": 0,
            "traceAddress": [],
            "transactionHash": "0xd3cb1a2e2baa0b65ab8b375830c0675595828e7e0b1b950981267d5700c11827",
            "transactionPosition": 155,
            "type": "call"
        }
    ]
}
```
