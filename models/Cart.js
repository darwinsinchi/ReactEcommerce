import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "user"
  },
  products: [
    {
      quantity: {
        type: Number,
        default: 1
      },
      product: {
        type: ObjectId,
        ref: "Product"
      }
    }
  ]
});

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
