// controller/transaction.controller.js

import db from "../models/index.js";
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
        const userId = req.userId; // Sempre do token!
        const { amount, description, type, receiverUserId } = req.body;

        // Se o corpo tentar enviar userId diferente, retorna erro
        if (req.body.userId && req.body.userId !== userId) {
            return res.status(403).json({ error: "Você só pode criar transações para sua própria conta." });
        }

        if (!amount || !description || !type) {
            return res.status(400).json({ error: "amount, description e type são obrigatórios." });
        }

        // Busca o usuário remetente
        const sender = await db.users.findByPk(userId);
        if (!sender) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        // Para transferências, busca o destinatário
        let receiver = null;
        if (type === "transfer") {
            if (!receiverUserId) {
                return res.status(400).json({ error: "receiverUserId é obrigatório para transferências." });
            }
            receiver = await db.users.findByPk(receiverUserId);
            if (!receiver) {
                return res.status(404).json({ error: "Destinatário não encontrado." });
            }
        }

        // Verifica saldo suficiente
        if ((type === "expense" || type === "transfer") && sender.balance < amount) {
            return res.status(400).json({ error: "Saldo insuficiente." });
        }

        // Atualiza saldos
        if (type === "income") {
            sender.balance += amount;
        } else if (type === "expense") {
            sender.balance -= amount;
        } else if (type === "transfer") {
            sender.balance -= amount;
            receiver.balance += amount;
            await receiver.save();
        }
        await sender.save();

        // Cria a transação
        const transaction = await db.transactions.create({
            amount,
            description,
            type,
            userId, // Sempre do token!
            receiverUserId: type === "transfer" ? receiverUserId : null,
        });

        res.status(201).json({
            message: "Transação criada com sucesso!",
            transaction,
            senderBalance: sender.balance,
            receiverBalance: receiver ? receiver.balance : null,
        });
    } catch (error) {
        console.error('Erro ao criar transação:', error);
        res.status(500).json({ message: 'Erro ao criar transação' });
    }
};

// Busca todas as transações do usuário autenticado
export const getTransactionsHandler = async (req, res) => {
    try {
        const userId = req.userId;
        console.log("userId extraído do token:", userId);
        const transactions = await getTransactionsByUser(userId);
        console.log("Transações encontradas:", transactions);
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
