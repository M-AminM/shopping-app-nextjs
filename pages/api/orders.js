import { connectToDatabase } from "../../lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { email, name, price, color, size, number, image } = data;
    const client = await connectToDatabase();
    const db = client.db();
    db.collection("orders").insertOne({
      email: email,
      name: name,
      price: price,
      color: color,
      size: size,
      number: number,
      image: image,
    });

    res.status(201).json({ message: "Your Order added !" });
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    const documents = await db.collection("orders").find().toArray();

    res.status(200).json({ orders: documents });
  }
};

export default handler;
