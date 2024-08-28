// importing extarnal package
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'
// importing intarnal package
import authRoutes from "./routers/auth.route.js";
import messageRoutes from "./routers/message.route.js";
import userRoutes from "./routers/user.route.js";
import { app, server } from "./socket/socket.js";

// connecting to mongodb
import { connectToMongoDB } from "../db/connectToMongoDB.js";
// config file
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// defining variables
const PORT = process.env.PORT;
const __dirname = path.resolve();
// defining routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
// starting the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // calling mongodb function that will connect the server to the database
  connectToMongoDB();
});
