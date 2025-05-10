import { Sequelize } from 'sequelize';

export default (sequelize) => {
    const Transaction = sequelize.define("Transaction", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });

    return Transaction;
};
