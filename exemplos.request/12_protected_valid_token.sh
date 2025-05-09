#!/bin/bash
curl --request GET \
  --url 'http://localhost:3000/users/secure' \
  --header 'Authorization: Bearer <VALID_TOKEN>'
# Output:
# {
#   "message": "This is a secure route"
# }