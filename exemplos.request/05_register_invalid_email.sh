#!/bin/bash
curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user04",
    "email": "user04example.com",
    "password": "Password123"
  }'
# # Output:
# # {
# #   "error": {
# #     "message": "Invalid email format"
# #   }
# # }