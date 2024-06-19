"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(UserRoutes_1.default);
app.use(AuthRoutes_1.default);
const port = 3000;
app.get("/", function (req, res) {
    return res.json({
        status: "ok",
        messagem: "Requisição enviada com sucesso",
    });
});
app.listen(port, function () {
    console.log("Servidor rodando normalmente na porta " + port);
});
