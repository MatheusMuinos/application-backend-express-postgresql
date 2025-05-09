#!/bin/bash
curl --request GET \
  --url 'http://localhost:3000/users/secure' \
  --header 'Authorization: Bearer invalid.token.here'
# Output:
# {
#   "error": {
#     "message": "jwt malformed"
#   }
# }