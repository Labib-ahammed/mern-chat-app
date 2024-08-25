import jwt from "jsonwebtoken";

const gerenateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY);

  res.cookie('jwt_token', token, {
    httpOnly: true,  //prevent xss attacks cross-site scripting attacks
    sameSite: "strict", //prevent cross-site scripting
    secure: process.env.NODE_ENV === 'development', //only send cookie over https in production environment
  })
};

export default gerenateToken;