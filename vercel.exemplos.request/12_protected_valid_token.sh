#!/bin/bash
curl --request GET \
  --url 'https://atividade-avaliativa-iv-v2.vercel.app/users/secure' \
  --header 'Authorization: Bearer <VALID_TOKEN>'
# Output:
# {
#   "message": "This is a secure route"
# }
# Note: Replace <VALID_TOKEN> with a valid JWT token obtained from the login endpoint.
# The token should be a valid JWT token that you received when you logged in.