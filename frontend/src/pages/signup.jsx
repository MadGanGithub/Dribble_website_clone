import React, { useState } from "react";
import mediaImage from "../assets/logo.jpg";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const details = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      sessionStorage.setItem("userDetails", JSON.stringify(details));
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white text-sm h-screen w-screen lg:flex lg:flex-row">
      <div className="bg-left_part hidden lg:w-1/3 lg:h-screen lg:p-11 lg:flex lg:flex-col lg:gap-5">
        <div className="font-body text-logo text-xl ">dribbble</div>
        <div className="font-bold text-header text-xl">
          Discover the world's top
          <br />
          Designers & Creatives.
        </div>
        <div>
          <img src={mediaImage} alt="media image" />
        </div>
        <div className="text-header">
          Art by <span className="underline">Peter Tarka</span>
        </div>
      </div>
      <div className="h-screen w-screen p-5 lg:w-2/3 lg:p-5">
        <div className="flex flex-row justify-end text-xl lg:text-sm ">
          <span>
            Already a Member?{" "}
            <a className="text-blue-600" href="/signin">
              Sign In
            </a>
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center py-5 gap-3">
            <div className="font-bold text-3xl">Sign up to Dribbble</div>
            <div id="message"></div>
            <div className="flex flex-col gap-5 text-lg lg:flex lg:flex-col lg:w-96 lg:text-sm ">
              <div className="lg:flex lg:justify-between">
                <div className="flex flex-col">
                  <div className="font-bold lg:text-sm text-2xl">Name</div>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="rounded-md p-1 bg-field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold lg:text-sm text-2xl">Username</div>
                  <input
                    required
                    type="text"
                    placeholder="Username"
                    className="rounded-md p-1 bg-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold lg:text-sm text-2xl">Email</div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-md p-1 bg-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold lg:text-sm text-2xl">Password</div>
                <input
                  required
                  type="password"
                  placeholder="6+ characters"
                  className="rounded-md p-1 bg-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="privacyPolicy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="ml-2 block text-lg lg:text-sm text-gray-900"
                >
                  Creating an account means you're okay with our{" "}
                  <a className="text-blue-800">Terms of Service</a>,
                  <a className="text-blue-800">Privacy Policy</a> and our
                  default{" "}
                  <a className="text-blue-800">
                    Notification <br className="hidden lg:flex" /> Settings
                  </a>
                </label>
              </div>
              <div className="flex flex-row justify-center lg:justify-normal">
                <button
                  type="submit"
                  className="bg-button text-white rounded-md w-60 p-3 text-3xl lg:text-sm lg:w-40 lg:p-1 hover:bg-pink-200"
                >
                  Create Account
                </button>
              </div>
              <div className="text-xs">
                This site is protected by reCAPTCHA and the Google{" "}
                <a className="text-blue-800">Privacy Policy </a>
                and <a className="text-blue-800">Terms of Service</a> apply.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}