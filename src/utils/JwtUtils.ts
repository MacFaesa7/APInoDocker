import jwt from "jsonwebtoken";

export async function generateJWT() {
  return await jwt.sign("teste", "senha");
}

export async function validateJWT() {}
