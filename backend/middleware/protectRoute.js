import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt_token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Not authorized, token is required" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Not authorized, token is invalid" });
    }
    const user = await User.findOne({ _id: decoded.userId }).select(
      "-password"
    );
    if (!user) {
      return res.status(401).json({ error: "Not authorized, user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protected route middleware", error.message);
    res.status(500).json({ error: "Intarnal server error" });
  }
};
