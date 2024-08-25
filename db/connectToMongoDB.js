import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};
