#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user04",
    "email": "user04example.com",
    "password": "Password123"
  }'
# # Output:
# # {
# #   "error": {
# #     "message": "Invalid email format"
# #   }
# # }