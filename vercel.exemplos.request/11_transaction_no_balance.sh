curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "name": "Transferência sem saldo",
    "amount": 1000000.00,
    "description": "Tentativa de transferência sem saldo",
    "type": "transfer",
    "senderUserId": 1,
    "receiverUserId": 2
}'
