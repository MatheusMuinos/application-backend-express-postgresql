export USER1_TOKEN=$(curl -s -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{
    "username": "usuario1",
    "password": "senha123"
}' | jq -r '.token')
echo "Token Usuario 1: $USER1_TOKEN"
