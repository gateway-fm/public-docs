# eth_getTransactionCount


> Returns the number of transactions sent from an address.


## Parameters

- `ADDRESS`, The address from which the transaction count to be checked.
- `BLOCKNUMBER |TAG` - The block number as a string in hexadecimal format or the string "latest", "earliest" or "pending", see the [default block parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).

## Returns

`RESULT` - integer of the number of transactions send from this address.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionCount",
    "params": [
        "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",
        "latest"
    ],
    "id": 13
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 13,
    "result": "0x2b8910e"
}
```
