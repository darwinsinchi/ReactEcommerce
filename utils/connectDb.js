import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //use existing database connection
    console.log("Using existing connection");
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
    //this is to get rid of errors, previous 4 lines
  });
  // console.log("DB connected");
  connection.isConnected = db.connections[0].readyState;
  //line above is standard to get connection. No need to memorize
}

export default connectDb;
