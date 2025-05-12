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

router.use(verifyToken); // protege todas as rotas abaixo

router.post('/', transactionController.createTransactionHandler);
router.get('/', transactionController.getTransactionsHandler);
router.get('/:id', transactionController.getTransactionHandler);
router.put('/:id', transactionController.updateTransactionHandler);
router.delete('/:id', transactionController.deleteTransactionHandler);

export default router;
