#!/bin/bash
curl --request GET \
  --url 'http://localhost:3000/users/secure'
# Output:
# {
#   "error": {
#     "message": "jwt malformed"
#   }
# }