import { connectToDatabase } from "../../../lib/db";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  const data = req.body;

  const { email, newPassword } = data;

  const client = await connectToDatabase();
  const db = client.db();
  const hashedNewPassword = await hash(newPassword, 12);

  const isUserExists = await db.collection("users").findOne({ email: email });

  if (!isUserExists) {
    res.status(403).json({ message: "Invalid user !" });
    client.close();
    return;
  }

  const user = await db
    .collection("users")
    .updateOne({ email: email }, { $set: { password: hashedNewPassword } });

  res.status(200).json({ messgae: "Password updated !" });
  client.close();
};

export default handler;
