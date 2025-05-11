# Sistema de Transações - Backend Express com PostgreSQL

Este projeto é um backend desenvolvido em **Node.js** com **Express** e **PostgreSQL** para gerenciar transações financeiras. Ele suporta operações como **entrada de valores (income)**, **saída de valores (expense)** e **transferências entre usuários (transfer)**. O sistema também garante que os saldos dos usuários sejam atualizados corretamente e impede que transações sejam realizadas caso o saldo seja insuficiente.

---

## Funcionalidades

1. **Criação de Usuários**:
   - Registro de novos usuários com `username`, `email` e `password`.
   - Cada usuário começa com um saldo inicial de `0.0`.

2. **Autenticação**:
   - Login com `username` e `password`.
   - Geração de token JWT para autenticação em rotas protegidas.

3. **Transações**:
   - **Income**: Adiciona valores ao saldo do usuário.
   - **Expense**: Deduz valores do saldo do usuário.
   - **Transfer**: Transfere valores entre dois usuários, garantindo que o remetente tenha saldo suficiente.

4. **Validações**:
   - Impede que o saldo de um usuário fique negativo.
   - Verifica se o destinatário existe em transferências.
   - Garante que todos os campos obrigatórios sejam fornecidos.

---

## Como Funcionam as Transações

### 1. **Income (Entrada de Valores)**

- Adiciona um valor ao saldo do usuário.
- Exemplo de requisição:

```bash
curl -X POST https://application-backend-express-postgresql.vercel.app/transactions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $USER1_TOKEN" \
-d '{
    "amount": 2500.00,
    "description": "Salário",
    "type": "income",
    "userId": 1
}'
