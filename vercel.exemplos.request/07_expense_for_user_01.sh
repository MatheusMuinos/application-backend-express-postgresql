curl -X POST https://application-backend-express-postgresql-1oc4nst8v.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "name": "Compras no mercado",
    "amount": 200.00,
    "description": "Compra de alimentos",
    "type": "expense"
}'
