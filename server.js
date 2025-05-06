require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const equipamentoRoutes = require("./src/routes/equipamentoRoutes");
const maintenanceRoutes = require("./src/routes/maintenanceRoutes");
const reportRoutes = require("./src/routes/reportRoutes");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/equipamentos", equipamentoRoutes);
app.use("/api/manutencao", maintenanceRoutes);
app.use("/api/report", reportRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
