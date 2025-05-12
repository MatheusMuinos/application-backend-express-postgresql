curl -X PUT http://localhost:3000/transactions/1 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "description": "Salário atualizado",
    "amount": 1200.00
}'
