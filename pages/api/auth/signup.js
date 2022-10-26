import { connectToDatabase } from "../../../lib/db";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { username, email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input !" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();
  const hashedPassword = await hash(password, 12);

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already! " });
    client.close();
    return;
  }

  db.collection("users").insertOne({
    username: username,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
};

export default handler;
