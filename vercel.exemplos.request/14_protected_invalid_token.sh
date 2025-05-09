#!/bin/bash
curl --request GET \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/secure' \
  --header 'Authorization: Bearer invalid.token.here'
# Output:
# {
#   "error": {
#     "message": "Unauthorized"
#   }
# }