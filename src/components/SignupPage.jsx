import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Firebase-----------------

//--------------------------------------

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errorOccured, setErrorOccured] = useState(false);



  const handleSignup = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return;
    }

    // Validate password requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one special character, and be at least 8 characters long"
      );
      return;
    }

    // Add your signup logic here--------------

    alert("Signup logic goes here");
    const signUp = async () => {

    };
    signUp();

  };

  return (
    <div  className="w-full items-center float-right justify-center min-h-screen bg-zinc-50 dark:bg-zinc-700  ">
      <div
      className=" bg-zinc-50
      m-16  
      dark:bg-zinc-800
      dark:text-white 
      p-4
      w-8/12
      md:p-8 
      rounded-2xl 
      shadow-2xl 
      border 
      border-gray-300 
      h-fit">
        <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignup}>
          <label className="text-2xl" htmlFor="email ">
            Email:
          </label>
          <input
            className="block w-10/12 px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="anarkeli@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <label className="text-2xl mb-6" htmlFor="password">
            Password:
          </label>
          <input
            className="block w-10/12 px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Anarkeli123$"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          <label className=" text-2xl" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className="block w-10/12 px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Anarkeli123$"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br></br>

          <button
            type="submit"
            className=" items-end text-right px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Account
          </button>
          {errorOccured? <p className="text-red-500">An Error Occured</p>: ""}

          <h4 className="text-l mt-8 float-end">
            Already have an account?{" "}
            <NavLink to="/login" className="mt-4 p-2 rounded bg-blue-400">
              Sign In
            </NavLink>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
