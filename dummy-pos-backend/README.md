# DUMMY-POS-BACKEND
A dummy for COMET Point of Sales app. Real merchant can use their own implementation to write to the blockchain.

## API List

API List
```
[GET] /accounts
[GET] /accounts/{address}/balance
[POST] /transactions
// admin only
[POST] /transactions/topup
```

## EXAMPLES

### [GET] /accounts
Get all accounts.

Input: ```none```

Output:
```json
{
  "result": [
    "0xff06ad5d076fa274b49c297f3fe9e29b5ba9aadc",
    "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
    "0x2b5ad5c4795c026514f8317c7a215e218dccd6cf"
  ]
}
```

### [GET] /accounts/{address}/balance

Get balance of certain account.

Input: 
```
// Params:
// hash address of an account
// URL:
http://baseurl:port/accounts/0xf0604c33ea77db0d0b63dd27f54aecfd62b48dd0/balance
```
Output:
```json
{
  "result": 110
}
```

### [POST] /transactions
Send ether between two accounts.

Input: 
```
// URL:
http://baseurl:port/transactions
// JSON:
{
  "to": "0x2b5ad5c4795c026514f8317c7a215e218dccd6cf",
  "from": "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
  "signed_token": "0x5c3251e5f2e977588b4716ccd26fe96fa4a2fc349c4b4c4c0fcb329c252455e338f8cf8ac5489f082159ed5e1173f8d9ceb3e46f18a60891de08ce21dbe9853d01",
  "value": "100",
  "token": "000001"
}
```
Output:
```json
{
  "result": {
    "from": "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
    "balance_before": "1000",
    "balance_after": "900"
  }
}
```

### [POST] /transactions/topup
Topup account.

Input: 
```
// URL:
http://baseurl:port/transactions/topup
// JSON:
{
  "address": "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
  "value": 2000
}
```
Output:
```json
{
  "result": {
    "address": "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
    "balance": "3000"
  }
}
```
