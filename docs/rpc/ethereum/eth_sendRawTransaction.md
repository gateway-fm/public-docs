# eth_sendRawTransaction


> Creates a new message call transaction or a contract creation for signed transactions.


Gateway does not store keys, so transactions sent via Gateway must be signed ahead of time using another provider like [ethers](https://docs.ethers.io/v5/api/signer/) (via `eth_signTransaction`) and sent with `eth_sendRawTransaction`.

## Parameters

`DATA` The signed transaction data.

## Returns

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

## **Request example**

```bash
curl --location 'https://rpc.eth.gateway.fm' \
--header 'Content-Type: application/json' \
--data '{
    "id": 6008149,
    "jsonrpc": "2.0",
    "method": "eth_sendRawTransaction",
    "params": [
        "0xf86a80850d23aae9328316e3609447ac4f3a5ea94b648672648e730bfe48ed6e734985e8d4a510008026a0925eb51342ee2629881055bef3eb9bd561ddb9f024a51bcef77e75bb4ca5da60a02ccb349e0aa54b64d3c0ed1de771fff8abea0a627b20107a800070dfa0a038ca"
    ]
}'
```

## **Response example**

```javascript
{
  "jsonrpc":"2.0",
  "id":6008149,
  "result":"0x3831c25a7e0e7fc8a3ce5c5a6b4b93a1608a362d6ce08015061463f930f0774b"
  }
```
