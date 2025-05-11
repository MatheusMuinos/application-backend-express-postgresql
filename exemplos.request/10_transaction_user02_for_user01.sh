curl -X POST http://localhost:3000/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 800.00,
    "description": "Pagamento para usuario2",
    "type": "transfer",
    "userId": 2,
    "receiverUserId": 1
}'
