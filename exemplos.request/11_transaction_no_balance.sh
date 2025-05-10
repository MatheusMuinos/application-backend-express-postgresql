curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 1000000.00,
    "description": "Tentativa de transferência sem saldo",
    "type": "transfer",
    "senderUserId": 1,
    "receiverUserId": 2
}'
