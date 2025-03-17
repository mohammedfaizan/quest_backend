import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDb Connected"))
    .catch((err) => {
      console.log("error while connecting mongoDB", err);
    });
};

export default db;
