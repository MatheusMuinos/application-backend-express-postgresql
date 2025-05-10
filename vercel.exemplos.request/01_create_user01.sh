curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/users/register \
-H "Content-Type: application/json" \
-d '{
    "username": "usuario1",
    "email": "usuario1@email.com",
    "password": "senha123"
}'
