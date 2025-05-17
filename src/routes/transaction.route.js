import express from 'express';
import verifyToken from '../middlewares/jwt.token.middleware.js';
import {
  createTransactionHandler,
  getTransactionsHandler,
  getTransactionHandler,
  updateTransactionHandler,
  deleteTransactionHandler
} from '../controller/transaction.controller.js';

const router = express.Router();

router.post('/transactions', verifyToken, createTransactionHandler);
router.get('/transactions', verifyToken, getTransactionsHandler);
router.get('/transactions/:id', verifyToken, getTransactionHandler);
router.put('/transactions/:id', verifyToken, updateTransactionHandler);
router.delete('/transactions/:id', verifyToken, deleteTransactionHandler);

export default router;