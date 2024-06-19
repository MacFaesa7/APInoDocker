import UserRouter from "./routes/UserRoutes";
import AuthRouter from "./routes/AuthRoutes";

import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(AuthRouter);

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
async function errorHandler(error: Error, _request: Request, response: Response, _next: NextFunction) {
  console.error(error);
  return response.json({ message: 'Internal Server Error!' }).status(500);
}