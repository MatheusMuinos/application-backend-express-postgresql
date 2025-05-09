#!/bin/bash
curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user01",
    "email": "invalid@example.com",
    "password": "Password123"
  }'
# # # Output:
# # # {
# # #   "error": {
# # #     "message": "Invalid email or password"
# # #   }
# # # }