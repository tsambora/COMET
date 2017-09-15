# COMET

### COMET SDK Specification
This URL contains a specification and a guide for merchant integration: https://hackmd.io/s/Bk697dO5-

### How to deploy Ethereum Blockchain private network and dummy Point of Sales App

```
sh
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

### How to deploy COMET Android app

```
1. run gradle assemble from source code COMET/android
2. apk is stored on android/app/build/outputs
```

### Steps for Doing Transactions with COMET

```
1. Use web frontend app to generate transaction token
2. Insert the token to the Android app and generate the QR code
3. Use QR code scanner or copy the string manually (just tap the text to copy) and fill the form on web frontend app
4. The transaction will be verified and processed with Ethereum Smart contract
```

### Available accounts

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

### Demo Urls

```
Backend : http://139.59.120.226:3000, 
Merchant frontend : http://139.59.120.226:8080, 
Android apk : https://drive.google.com/open?id=0B4pr8rhBwPkSQ3hmZUlYM2xCSHc
```
