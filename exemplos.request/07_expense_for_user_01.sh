curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 200.00,
    "description": "Mercado",
    "type": "expense",
    "userId": 1
}'
