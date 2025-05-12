curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "amount": 3000.00,
    "description": "Salário",
    "type": "income",
    "userId": 2
}'
