import { connectToDatabase } from "../../lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { email, name, price, color, size, number, image } = data;
    const client = await connectToDatabase();
    const db = client.db();

    const userOrder = await db.collection("orders").findOne({
      email: email,
      name: name,
    });

    // const userOrder1 = await db.collection("orders").findOne({
    //   email: email,
    //   name: name,
    //   color: color,
    // });

    // const userOrder2 = await db.collection("orders").findOne({
    //   email: email,
    //   name: name,
    //   size: size,
    // });
    // console.log(userOrder);

    // || !userOrder1 || !userOrder2

    if (!userOrder ) {
      db.collection("orders").insertOne({
        email: email,
        name: name,
        price: price,
        color: color,
        size: size,
        number: number,
        image: image,
      });
    } else {
      db.collection("orders")
        .find({ name: name, email: email })
        .forEach((doc) => {
          console.log(doc);
          // // console.log(doc.number +  " " + number);
          doc.number = doc.number + number;
          // // console.log(doc.number +  " " + number);
          db.collection("orders").replaceOne(userOrder, doc);
          // db.collection("orders").updateOne({name: doc.name}, {$set: {number: doc.number}});
          // console.log("2134");
          // console.log(doc);
        });
    }

    res.status(201).json({ message: "Your Order added !" });
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    const documents = await db.collection("orders").find().toArray();

    res.status(200).json({ orders: documents });
  }

  if (req.method === "PATCH") {
    const data = JSON.parse(req.body);

    const client = await connectToDatabase();
    const db = client.db();

    const documents = await db
      .collection("orders")
      .deleteOne({ name: data.name });

    res.status(200).json({ orders: documents });
  }
};

export default handler;
