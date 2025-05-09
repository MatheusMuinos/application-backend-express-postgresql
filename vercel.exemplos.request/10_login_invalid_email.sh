#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user01",
    "email": "invalid@example.com",
    "password": "Password123"
  }'
# Output:
# {
#   "error": {
#     "message": "Error logging in user: SequelizeDatabaseError: relation \"users\" does not exist"
#   }
# }