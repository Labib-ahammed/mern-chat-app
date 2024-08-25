import React from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="p-4 flex justify-center items-center min-h-screen">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home/>
    </div>
  );
};

export default App;
