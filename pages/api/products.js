// import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

//req and res are js objects
export default async (req, res) => {
  const products = await Product.find();
  //find will give us everything
  res.status(200).json(products);
  //when you console.log(req.method) you will see on the terminal what kind of request you are sending out
};
