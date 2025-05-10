curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "name": "Freelance de Maio",
    "amount": 1500.00,
    "description": "Pagamento por projeto freelance",
    "type": "income"
}'
