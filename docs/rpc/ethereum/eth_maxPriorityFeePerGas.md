# eth_maxPriorityFeePerGas


> Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain.


## Parameters

`None`

## Returns

`RESULT` - The hexadecimal value of the priority fee needed to be included in a block

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "method": "eth_maxPriorityFeePerGas",
    "params": [],
    "id": 1,
    "jsonrpc": "2.0"
}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x5444440"
}
```
