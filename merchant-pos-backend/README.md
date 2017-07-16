# MERCHANT-POS-BACKEND

## API List

API List
```
[GET] /v1/account/all
[GET] /v1/account/<addr>/balance
[GET] /v1/transaction/<tx_hash>
[POST] /v1/transaction/
```

## EXAMPLES

### [GET] /v1/account/all
Get all accounts.

Input: ```none```

Output:
```json
{
  "result": [
    "0xf0604c33ea77db0d0b63dd27f54aecfd62b48dd0",
    "0xe707bd7388f0c381904c820b91a273d07c0e6c8d",
    "0xa70902090bdd36b126d498d2115f5507c9deeb20",
    "0x982209f3c74b5105a49a31ca0cdb85c8611dc07a",
    "0x36e87bf8d899c637092afa0081590d9b86e03f20",
    "0x9bfadc8d42ae4ae41ae504ba01b010696fdf6267",
    "0x1cdc92554876223a680270b07c4a6df343100d6c",
    "0x34ce6076e8a70c483f81d3ae28c01fa0f4945538",
    "0xa9d51a3ed111534d79534c618dcdbf5c202f7f08",
    "0xb7d3d85845e307910b603b6d4d9a7153cce5a3d9"
  ]
}
```

### [GET] /v1/account/<addr>/balance

Get balance of certain account.

Input: 
```
// Params:
// hash address of an account
// URL:
http://baseurl:port/v1/account/0xf0604c33ea77db0d0b63dd27f54aecfd62b48dd0/balance
```
Output:
```json
{
  "result": 110
}
```

### [POST] /v1/transaction/
Send ether between two accounts.

Input: 
```
// URL:
http://baseurl:port/v1/transaction/
// JSON:
{
  "to": "0xf0604c33ea77db0d0b63dd27f54aecfd62b48dd0",
  "from": "0xe707bd7388f0c381904c820b91a273d07c0e6c8d",
  "pass": "rahasia",
  "value": "10"
}
```
Output:
```json
// transaction hash (tx hash)
{
  "result": "0x4f35357fb2c52b453c28c15aedb60572da82cd70d6b597258193b65c522ea1d3"
}
```

### [GET] /v1/transaction/<tx_hash>
Get transaction details.

Input: 
```
// Params:
// transaction hash
// URL:
http://baseurl:port/v1/transaction/0x4f35357fb2c52b453c28c15aedb60572da82cd70d6b597258193b65c522ea1d3
```
Output:
```json
{
  "result": {
    "hash": "0x4f35357fb2c52b453c28c15aedb60572da82cd70d6b597258193b65c522ea1d3",
    "nonce": 0,
    "blockHash": "0x62246e859f817eb961bf940378bd47b78889bc9321307ea3dcf58846e43f605e",
    "blockNumber": 1,
    "transactionIndex": 0,
    "from": "0xe707bd7388f0c381904c820b91a273d07c0e6c8d",
    "to": "0xf0604c33ea77db0d0b63dd27f54aecfd62b48dd0",
    "value": "10000000000000000000",
    "gas": 90000,
    "gasPrice": "20000000",
    "input": "0x0"
  }
}
```