curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-d '{
    "amount": 250.00,
    "description": "Conta de água",
    "type": "expense",
    "userId": 1
}'
