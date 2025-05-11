import { DataTypes } from "sequelize";

const Transaction = (sequelize) => {
    return sequelize.define("Transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receiverUserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};

export default Transaction;
