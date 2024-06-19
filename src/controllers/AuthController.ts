import { Request, Response } from "express";
import { generatePasswordHash } from "../utils/BcryptUtils";
import UserDataBaseService from "../services/UserDataBaseService";
import { generateJWT } from "../utils/JwtUtils";

class AuthController {
  constructor() {}

  async signIn(req: Request, res: Response) {}

  async signOut(req: Request, res: Response) {}

  async signUp(req: Request, res: Response) {
    const body = req.body;
    console.log(body);

    if (!body.email || !body.name || !body.password) {
      res.json({
        status: "error",
        message: "Falta parâmetros",
      });
      return;
    }

    const hashPassword = await generatePasswordHash(body.password);

    if (!hashPassword) {
      res.json({
        status: "error",
        message: "Erro ao criptografar senha ...",
      });
    }

    try {
      const newuser = await UserDataBaseService.insertDBUser({
        name: body.name,
        email: body.email,
        password: hashPassword as string,
      });

      const jwt = await generateJWT();

      res.json({
        status: "ok",
        newuser: newuser,
        jwt: jwt,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: error,
      });
    }
  }
}

export default new AuthController();
