// controller/transaction.controller.js

import {
    createTransaction,
    getTransactionsByUser,
    getTransactionById,
    updateTransaction,
    deleteTransaction
} from '../services/transaction.service.js';

// Cria uma nova transação (apenas para o usuário autenticado)
export const createTransactionHandler = async (req, res) => {
    try {
        const userId = req.userId; // sempre do token
        // Garante que a transação será criada apenas para o usuário autenticado
        const transactionData = { ...req.body, userId };
        const transaction = await createTransaction(userId, transactionData);
        res.status(201).json(transaction);
    } catch (error) {
        console.error('Erro ao criar transação:', error);
        res.status(500).json({ message: 'Erro ao criar transação' });
    }
};

// Busca todas as transações do usuário autenticado
export const getTransactionsHandler = async (req, res) => {
    try {
        const userId = req.userId;
        const transactions = await getTransactionsByUser(userId);
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Erro ao buscar transações:', error);
        res.status(500).json({ message: 'Erro ao buscar transações' });
    }
};

// Busca uma transação específica do usuário autenticado
export const getTransactionHandler = async (req, res) => {
    try {
        const userId = req.userId;
        const transactionId = req.params.id;
        const transaction = await getTransactionById(userId, transactionId);
        if (!transaction) return res.status(404).json({ message: 'Transação não encontrada' });
        res.status(200).json(transaction);
    } catch (error) {
        console.error('Erro ao buscar transação:', error);
        res.status(500).json({ message: 'Erro ao buscar transação' });
    }
};

// Atualiza uma transação do usuário autenticado
export const updateTransactionHandler = async (req, res) => {
    try {
        const userId = req.userId;
        const transactionId = req.params.id;
        // Só permite atualizar se a transação pertence ao usuário autenticado
        const updatedTransaction = await updateTransaction(userId, transactionId, req.body);
        res.status(200).json(updatedTransaction);
    } catch (error) {
        console.error('Erro ao atualizar transação:', error);
        res.status(500).json({ message: 'Erro ao atualizar transação' });
    }
};

// Deleta uma transação do usuário autenticado
export const deleteTransactionHandler = async (req, res) => {
    try {
        const userId = req.userId;
        const transactionId = req.params.id;
        await deleteTransaction(userId, transactionId);
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar transação:', error);
        res.status(500).json({ message: 'Erro ao deletar transação' });
    }
};
