#!/bin/bash
curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "user02",
    "email": "user01@example.com",
    "password": "Password123"
  }'
# # Output:
# # {
# #   "error": {
# #     "message": ""Error saving user: SequelizeUniqueConstraintError: Validation error: email must be unique""
# #   }
# # }