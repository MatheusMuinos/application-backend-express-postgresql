curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "amount": 800.00,
    "description": "Celular Novo",
    "type": "expense",
    "userId": 2
}'
