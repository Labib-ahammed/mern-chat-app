// importing extarnal package
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// importing intarnal package
import authRoutes from "./routers/auth.route.js";
import messageRoutes from "./routers/message.route.js";
import userRoutes from "./routers/user.route.js";

// connecting to mongodb
import { connectToMongoDB } from "../db/connectToMongoDB.js";
// config file
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// defining variables
const PORT = process.env.PORT;

// defining routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // calling mongodb function that will connect the server to the database
  connectToMongoDB();
});
