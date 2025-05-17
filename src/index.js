import express from "express";
import db from "./models/index.js";
import userRoute from "./routes/user.route.js";
import transactionRoute from "./routes/transaction.route.js";
import swaggerRoute from './routes/swagger.route.js';

db.sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

const app = express();


app.get('/', (req, res) => {
  res.send('Banco de Dados está no ar!');
});

app.use(express.json());
app.use(userRoute);
app.use(swaggerRoute);
app.use(transactionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
