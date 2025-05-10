curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "name": "Pagamento para usuario2",
    "amount": 500.00,
    "description": "Pagamento pela ajuda no projeto",
    "type": "transfer",
    "senderUserId": 1,
    "receiverUserId": 2
}'
