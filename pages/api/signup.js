import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import Cart from "../../models/Cart";

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //check validators
    if (!isLength(name, { min: 3, max: 10 })) {
      return res.status(422).send("Name must be 3-10 characters");
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send("Password must be at least 6 characters");
    } else if (!isEmail(email)) {
      return res.status(422).send("Email must be valid");
    }
    // check to see if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).send(`User already exists with email ${email}`);
    }
    //if not, hash the password
    const hash = await bcrypt.hash(password, 10);
    //create new user
    const newUser = await new User({
      name,
      email,
      password: hash
    }).save();
    // console.log({ newUser });
    //create a new cart for the new user
    await new Cart({ user: newUser._id }).save();
    //create token for a new user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
    //send back token to client
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signup user. Please try again later.");
  }
};
