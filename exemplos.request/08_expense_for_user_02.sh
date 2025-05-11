curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-d '{
    "amount": 700.00,
    "description": "Faculdade",
    "type": "expense",
    "userId": 2
}'
