#!/bin/bash
curl --request POST \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{}'
# Output:
# {
#   "error": {
#     "message": "username, email and password are required"
#   }
# }