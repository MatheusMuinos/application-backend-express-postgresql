export USER2_TOKEN=$(curl -s -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/users/login \
-H "Content-Type: application/json" \
-d '{
    "username": "usuario2",
    "password": "senha456"
}' | jq -r '.token')
echo "Token Usuario 2: $USER2_TOKEN"
