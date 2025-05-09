#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user03",
    "email": "user03@example.com",
    "password": "123"
  }'
# Output:
# {
#   "error": {
#     "message": "Password must be at least 6 characters long and include at least one letter and one number"
#   }
# }