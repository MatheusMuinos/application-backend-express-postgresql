import express from 'express';
import userController from '../controller/user.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';
import secureController from '../controller/secure.controller.js';
import { 
    createTransactionHandler,
    getTransactionsHandler,
    getTransactionHandler,
    updateTransactionHandler,
    deleteTransactionHandler
} from '../controller/transaction.controller.js';

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

// Rotas de transação
router.post('/transactions', createTransactionHandler);
router.get('/transactions', getTransactionsHandler);
router.get('/transactions/:id', getTransactionHandler);
router.put('/transactions/:id', updateTransactionHandler);
router.delete('/transactions/:id', deleteTransactionHandler);

export default router;
