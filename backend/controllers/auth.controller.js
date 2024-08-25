// extarnal imports
import bcrypt from "bcryptjs";
// intarnal imports
import User from "../models/user.model.js";
import gerenateToken from "../utils/jwtToken.js";
// creating signup controller
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }
    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // DEFAULT PROFILE PICTURE
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT token
      gerenateToken(newUser._id, res)
      // save user to the database
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.log("Error in sign up controller", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
// creating signin controller
export const signin = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username})
    // cheking the password is correct or not
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect){
      return res.status(401).json({ error: "Invalid username or password" });
    }
    gerenateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log("Error in sign in controller", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
// creating signout controller
export const logout =(req, res) => {
  try {
    res.cookie("jwt-token", "");
    res.status(200).json({message: "Logged out successfully"});
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
