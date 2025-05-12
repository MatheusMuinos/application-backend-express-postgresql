curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 1000.00,
    "description": "Salário",
    "type": "income",
    "userId": 1
}'
