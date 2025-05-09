#!/bin/bash
curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{}'
# # Output:
# # {
# #   "error": {
# #     "message": "Invalid email or password"
# #   }
# # }