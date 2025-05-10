curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 500.00,
    "description": "Tentativa de transferência para usuário inexistente",
    "type": "transfer",
    "senderUserId": 1,
    "receiverUserId": 999
}'
