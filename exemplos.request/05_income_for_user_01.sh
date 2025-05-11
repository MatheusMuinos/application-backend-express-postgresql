curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-d '{
    "amount": 2500.00,
    "description": "Salário",
    "type": "income",
    "userId": 1
}'
