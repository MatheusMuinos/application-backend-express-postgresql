curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "amount": 450.00,
    "description": "Mercado",
    "type": "expense"
}'
