#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user01",
    "email": "user01@example.com",
    "password": "WrongPass123"
  }'
# Output:
# {
#   "error": {
#     "message": "Invalid credentials"
#   }
# }