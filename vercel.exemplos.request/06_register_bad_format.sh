#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{"username": "user05", "email": "user05@example.com" "password": "Password123"}'
# # {
# #   "error": {
# #     "message": "Unexpected token 'p', \"password\": \"Password123\"}"
# #   }
# # }