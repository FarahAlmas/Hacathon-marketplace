import Heading from "@/components/heading";
import React from "react";

export default function Login() {
  return (
    <>
      <Heading text={"My Account"} text2={"My Account"} />

      <div className="flex items-center justify-center min-h-screen bg-[#F6F5FF] px-4">
        {/* Login Card */}
        <div className="relative bg-white shadow-xl rounded-lg w-full max-w-md sm:max-w-lg p-6 sm:p-8 lg:p-10">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center font-josefin mb-4">
            Login
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center font-lato mb-8">
            Please login using account details below.
          </p>

          {/* Input Fields */}
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-500 font-lato mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-500 font-lato mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-sm text-pink-500 hover:underline font-lato"
              >
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-md font-lato"
            >
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm font-lato">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-pink-500 hover:underline font-lato font-medium"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
