import express from 'express';
import userController from '../controller/user.controller.js';

const router = express.Router();

/**
* @swagger
* /register:
*   post:
*     summary: Registra um novo usuário
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - username
*               - email
*               - password
*             properties:
*               username:
*                 type: string
*                 description: Nome de usuário único
*               email:
*                 type: string
*                 description: Email único do usuário
*               password:
*                 type: string
*                 description: Senha do usuário
*     responses:
*       201:
*         description: Usuário registrado com sucesso.
*       400:
*         description: Dados inválidos ou usuário já existe.
*/
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);

export default router;
