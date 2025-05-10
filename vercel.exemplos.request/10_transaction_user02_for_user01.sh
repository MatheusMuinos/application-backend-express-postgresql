curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER2_TOKEN" \
-d '{
    "name": "Devolução para usuario1",
    "amount": 300.00,
    "description": "Devolução de empréstimo",
    "type": "transfer",
    "senderUserId": 2,
    "receiverUserId": 1
}'
