export USER2_TOKEN=$(curl -s -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{
    "username": "usuario2",
    "password": "senha456"
}' | jq -r '.token')
echo "Token Usuario 2: $USER2_TOKEN"
