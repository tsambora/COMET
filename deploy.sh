echo "=== starting testnet and dummy pos backend"
echo "docker-compose up -d"
docker-compose up -d
echo "=== init contract and user data"
echo "docker exec -it dummy-pos-backend node scripts/init-contract-and-seed-account.js"
docker exec -it dummy-pos-backend node scripts/init-contract-and-seed-account.js