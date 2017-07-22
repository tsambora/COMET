# COMET

### How to deploy.

```sh
git clone https://github.com/tsambora/comet
cd comet
./deploy.sh
```
or 
```sh
git clone https://github.com/tsambora/comet
cd comet
docker-compose up -d
docker exec -it dummy-pos-backend node scripts/init-contract-and-seed-account.js
```

### Available accounts.

```
merchant 
address = 0x7e5f4552091a69125d5dfcb7b8c2659029395bdf
privateKey = 0x0000000000000000000000000000000000000000000000000000000000000001
transactionToken = 000001
signedToken = 0x5c3251e5f2e977588b4716ccd26fe96fa4a2fc349c4b4c4c0fcb329c252455e338f8cf8ac5489f082159ed5e1173f8d9ceb3e46f18a60891de08ce21dbe9853d01

buyer 
address = 0x2b5ad5c4795c026514f8317c7a215e218dccd6cf
privateKey = 0x0000000000000000000000000000000000000000000000000000000000000002
transactionToken = 000002
signedToken = 0x84d0375945941ba6863acd8c0202bfe0701bbda5d41c68c8594463492692d31f01055f4bd9d13a23100eab18a4b4a22bb31f31d39751881f347ef6222e3c2a7600
```
