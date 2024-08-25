import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-teal-500"> Talkflow</span>
        </h1>
        <form>
          <div className="flex flex-col gap-1">
            <label className="lable p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="lable p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <button className="btn btn-block btn-sm mb-2 ">Login</button>
          </div>
          <a href="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">{"Don't"} have an account?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
