import db from '../models/index.js';

// Create a new transaction
export const createTransaction = async (userId, transactionData) => {
    const { amount, description, date, type } = transactionData;
    return await db.transactions.create({
        amount,
        description,
        date,
        type,
        userId
    });
};

// Get all transactions for a user
export const getTransactionsByUser = async (userId) => {
    return await db.transactions.findAll({ where: { userId } });
};

// Get a specific transaction by ID
export const getTransactionById = async (userId, transactionId) => {
    return await db.transactions.findOne({ where: { userId, id: transactionId } });
};

// Update a transaction
export const updateTransaction = async (userId, transactionId, updatedData) => {
    const transaction = await getTransactionById(userId, transactionId);
    if (!transaction) throw new Error('Transaction not found');
    return await transaction.update(updatedData);
};

// Delete a transaction
export const deleteTransaction = async (userId, transactionId) => {
    const transaction = await getTransactionById(userId, transactionId);
    if (!transaction) throw new Error('Transaction not found');
    return await transaction.destroy();
};
