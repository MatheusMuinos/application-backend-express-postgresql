curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "name": "Aluguel",
    "amount": 300.00,
    "description": "Pagamento do aluguel de maio",
    "type": "expense"
}'
