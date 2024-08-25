import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-teal-500"> Talkflow</span>
        </h1>
        <form>
          <div className="flex flex-col gap-1">
            <label className="lable p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
            />
          </div>
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
          <div className="flex flex-col gap-1">
            <label className="lable p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col gap-1 mb-6">
            <label className="lable p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <div>
            <button className="btn btn-block btn-sm mb-2 ">Login</button>
          </div>
          <a
            href="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
