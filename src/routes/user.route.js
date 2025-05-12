import express from 'express';
import userController from '../controller/user.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';
import secureController from '../controller/secure.controller.js';
import * as transactionController from '../controller/transaction.controller.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
router.get('/secure', verifyToken, secureController.Endpoint);

// ROTA PÚBLICA PARA STATUS DO BANCO
router.get('/', (req, res) => {
  res.send('Banco de Dados está no ar!');
});

// Rotas protegidas (exigem token)
router.use(verifyToken);

router.post('/', transactionController.createTransactionHandler);
router.get('/transactions', transactionController.getTransactionsHandler);
router.get('/transactions/:id', transactionController.getTransactionHandler);
router.put('/transactions/:id', transactionController.updateTransactionHandler);
router.delete('/transactions/:id', transactionController.deleteTransactionHandler);

export default router;
