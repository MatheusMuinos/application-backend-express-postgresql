curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "name": "Salário de Junho",
    "amount": 1000.00,
    "description": "Salário mensal",
    "type": "income"
}'
