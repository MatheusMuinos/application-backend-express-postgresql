#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user01",
    "email": "user01@example.com",
    "password": "Password123"
  }'
# # Output:
# # {
# #   "message": "User registered successfully"
# # }