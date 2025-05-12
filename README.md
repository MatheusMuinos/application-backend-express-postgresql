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

- **Descrição**: Adiciona um valor ao saldo do usuário.
- **O que acontece após a requisição**:
  - O saldo do usuário (`userId`) é incrementado pelo valor enviado na transação.
  - Uma nova transação é registrada no banco de dados.

---

### 2. **Expense (Saída de Valores)**

- **Descrição**: Deduz um valor do saldo do usuário.
- **O que acontece após a requisição**:
  - O saldo do usuário (`userId`) é decrementado pelo valor enviado na transação.
  - Uma nova transação é registrada no banco de dados.

---

### 3. **Transfer (Transferência entre Usuários)**

- **Descrição**: Transfere um valor do saldo de um usuário para outro.
- **O que acontece após a requisição**:
  - O saldo do remetente (`userId`) é decrementado pelo valor enviado na transação.
  - O saldo do destinatário (`receiverUserId`) é incrementado pelo mesmo valor.
  - Uma nova transação é registrada no banco de dados.

---

### 4. **Validação de Saldo Insuficiente**

- **Descrição**: Impede que o saldo do remetente fique negativo.
- **O que acontece após a requisição**:
  - A transação é rejeitada se o saldo do remetente for insuficiente.

---

## Configuração do Projeto

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**:
   - Edite o arquivo `.env` com as credenciais do banco de dados e o segredo JWT.


3. **Executar o banco de dados localmente**:
   ```bash
   npm run start:database
   ```

4. **Iniciar o servidor**:
   ```bash
   npm run start:app
   ```3. **Iniciar o servidor**:
   ```bash
   npm run start:app
   ```

---

## Tecnologias Utilizadas

- **Node.js** com **Express** para o backend.
- **PostgreSQL** para o banco de dados.
- **Sequelize** como ORM.
- **JWT** para autenticação.
- **Docker** para gerenciamento do banco de dados local.

Autor: Matheus Sarno Muiños