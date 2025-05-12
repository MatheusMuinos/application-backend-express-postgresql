// index.js

import express from "express";
import db from "./models/index.js";
import userRoute from "./routes/user.route.js";

db.sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

const app = express();

app.use(express.json());
app.use(userRoute); // Só esta linha já cobre todas as rotas do user.route.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
