# COMET

How to deploy.

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