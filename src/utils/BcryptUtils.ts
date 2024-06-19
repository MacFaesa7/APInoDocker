import bcrypt from "bcrypt";

const saltRounds = 10;

export async function generatePasswordHash(
  password: string
): Promise<string | null> {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function compareHash(
  hash: string,
  password: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log(error);
    return false;
  }
}
