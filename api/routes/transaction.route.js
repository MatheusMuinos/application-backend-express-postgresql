import express from "express";
import db from "../models/index.js"; // Caminho corrigido
import userRoute from "./user.route.js";

db.sequelize.sync({ alter: true }) // Ajusta a estrutura das tabelas sem deletar dados
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

const app = express();

app.use(express.json());

// Register user routes
app.use("/", userRoute);
app.use("/SecuredRoute", userRoute);
app.use("/users", userRoute);

// Exemplo de rota para transações
const transactionRouter = express.Router();

// Rota para criar uma transação
transactionRouter.post("/", async (req, res) => {
    const { amount, description, type, userId, receiverUserId } = req.body;

    // Validação dos campos obrigatórios
    if (!amount || !description || !type || !userId) {
        return res.status(400).json({ error: "All fields (amount, description, type, userId) are required." });
    }

    try {
        // Verifica se o remetente existe
        const sender = await db.users.findByPk(userId);
        if (!sender) {
            return res.status(404).json({ error: "Sender not found." });
        }

        // Valida o destinatário apenas para transferências
        let receiver = null;
        if (type === "transfer") {
            if (!receiverUserId) {
                return res.status(400).json({ error: "ReceiverUserId is required for transfer transactions." });
            }

            receiver = await db.users.findByPk(receiverUserId);
            if (!receiver) {
                return res.status(404).json({ error: "Receiver not found." });
            }
        }

        // Atualiza os saldos e cria a transação
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

        const transaction = await db.transactions.create({
            amount,
            description,
            type,
            userId,
            receiverUserId: type === "transfer" ? receiverUserId : null,
        });

        res.status(201).json({
            message: "Transaction created successfully!",
            transaction,
            senderBalance: sender.balance,
            receiverBalance: receiver ? receiver.balance : null,
        });
    } catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "An error occurred while creating the transaction." });
    }
});

app.use("/transactions", transactionRouter);

app.get("/", (req, res) => {
    res.send("Banco de Dados está no ar!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default transactionRouter; // Exporta o roteador como padrão
