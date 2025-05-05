# eth_chainId

> Returns the currently configured chain ID, a value used in replay-protected
  transaction signing as introduced by EIP-155.

## Parameters

`None`

## Returns

`result` - hexadecimal value in string format which represents an integer of the chain.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}'
```

## **Response example**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
```
