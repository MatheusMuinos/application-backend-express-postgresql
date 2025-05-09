#!/bin/bash
curl --request GET \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/secure'
# Output:
# {
#   "error": {
#     "message": "No token provided"
#   }
# }