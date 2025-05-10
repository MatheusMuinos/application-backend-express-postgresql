curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "amount": 300.00,
    "description": "Devolução para usuario1",
    "type": "transfer",
    "senderUserId": 2,
    "receiverUserId": 1
}'
