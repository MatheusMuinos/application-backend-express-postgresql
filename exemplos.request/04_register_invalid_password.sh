#!/bin/bash
curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user03",
    "email": "user03@example.com",
    "password": "123"
  }'
# Output:
# {
#   "error": {
#     "message": "Invalid password format. Password must be at least 8 characters long and include at least one letter and one number."
#   }
# }