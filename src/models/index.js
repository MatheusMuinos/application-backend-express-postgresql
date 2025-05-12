// models/index.js

import dbConfig from '../config/db.config.js';
import { Sequelize } from 'sequelize';
import User from './User.js';
import Transaction from './Transaction.js';
import pg from 'pg';

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, { /* Configuração para Neon */ })
    : new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        dialectModule: pg,
        pool: dbConfig.pool,
        logging: console.log
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);
db.transactions = Transaction(sequelize, Sequelize);

db.users.hasMany(db.transactions, { foreignKey: 'userId', onDelete: 'CASCADE' });
db.transactions.belongsTo(db.users, { foreignKey: 'userId' });

export default db;
