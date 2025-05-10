curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "amount": 1500.00,
    "description": "Freelance",
    "type": "income"
}'
