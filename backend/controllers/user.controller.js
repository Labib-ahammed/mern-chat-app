import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password"); // $ne: loggedInUser will find every users in the database except for the logged in user.

    res.status(200).json(filteredUsers)
  } catch (error) {
    console.log("Error in the getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
