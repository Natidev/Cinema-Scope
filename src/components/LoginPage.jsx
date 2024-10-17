import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//Firebase ---------------


//-------------------------------

const ForgotPasswordPage = () => {
  const [resetMethod, setResetMethod] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleResetMethodChange = (e) => {
    setResetMethod(e.target.value);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Add logic to send reset instructions based on the selected reset method
    if (resetMethod === "email") {
      alert(`Sending reset instructions to ${email} via email`);
    } else if (resetMethod === "text") {
      alert(`Sending reset instructions to ${phoneNumber} via text message`);
    }
  };

  return (
    <div  className="w-full items-center float-right justify-center min-h-screen bg-zinc-50 dark:bg-zinc-700  ">
    <div className="bg-stone-50 p-8 rounded-xl m-8 w-max-2/12 sm:m-24 lg:mr-48 shadow-2xl border border-gray-300
    dark:bg-zinc-800 dark:text-white">
        <NavLink
          to="/signup"
          className=" float-end bg-blue-500 text-white rounded-md px-1"
        >
          <Typography variant="h6" component="">
            Sign Up
          </Typography>
        </NavLink>
        <br />
        <Typography variant="h5" className="py-8" component="">
          Forgot Your Password?
        </Typography>

        <form onSubmit={handleResetSubmit} className="max-w-md">
          <div className="mb-6">
            <p className="mb-4">How would you like to reset your password?</p>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="emailMethod"
                name="resetMethod"
                value="email"
                checked={resetMethod === "email"}
                onChange={handleResetMethodChange}
              />
              <label htmlFor="emailMethod" className="ml-2">
                Email
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="textMethod"
                name="resetMethod"
                value="text"
                checked={resetMethod === "text"}
                onChange={handleResetMethodChange}
              />
              <label htmlFor="textMethod" className="ml-2">
                Text Message
              </label>
            </div>
          </div>
          {resetMethod === "email" && (
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-10/12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          {resetMethod === "text" && (
            <div className="mb-6">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+25194998399"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="block w-10/12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 mb-6 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Instructions
          </button>
          <h4 className="text-blue-500">
            {" "}
            I don't remember my email or phone.
          </h4>
        </form>
      </div>
    </div>
  );
};
const LoginPage = ({isLogin, setIsLogin}) => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOccured, setErrorOccured] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    setIsForgotPassword(true); // Set state to indicate user is on forgot password page
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //---------------------------------------------
  };

  return (
    <div className="">
      {isForgotPassword ? (
        <ForgotPasswordPage />
      ) : (
        <div  className="w-full items-center float-right justify-center min-h-screen bg-zinc-50 dark:bg-zinc-700  ">
        <div className="bg-stone-50 p-8 rounded-xl mx-8 sm:m-24 lg:mr-48 shadow-2xl border border-gray-300
        dark:bg-zinc-800 dark:text-white">
            <h2 className="font-bold mb-8 p-2">Sign In</h2>
            <form onSubmit={handleLogin} className="max-w-md">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-white"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="anarkeli@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full py-3 px-2 mt-2  border border-gray-300 rounded-md focus:outline focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 dark:text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="anarkeli1234$"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full py-3 px-2 mt-2  border border-gray-300 rounded-md focus:outline focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
              {errorOccured? <p className="text-red-500">An Error Occured: Either your email or password is incorrect</p>: ""}
            </form>
            <h4
              className="mt-4 text-red-500 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot my password?
            </h4>
            <h4 className="mt-4 text-gray-700 dark:text-white flex flex-col md:flex-row md:items-center">
              <div>Don't have an account?</div>
              <NavLink
                to="/signup"
                className="text-white bg-blue-500 p-2 rounded mt-2"
              >
                Create Account
              </NavLink>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
