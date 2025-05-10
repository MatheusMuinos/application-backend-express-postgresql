export USER1_TOKEN=$(curl -s -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/users/login \
-H "Content-Type: application/json" \
-d '{
    "username": "usuario1",
    "password": "senha123"
}' | jq -r '.token')
echo "Token Usuario 1: $USER1_TOKEN"
