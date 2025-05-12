curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 150.00,
    "description": "Transferência para usuário 2",
    "type": "transfer",
    "receiverUserId": 2
}'
