import React, { useEffect, useState } from "react";
import mail_icon from "../assets/mail.jpg";
import Navbar from "./navbar";
import Footer from "./footer";

const Confirmation = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const jsonDataString = sessionStorage.getItem("userDetails");
    const jsonData = JSON.parse(jsonDataString);

    setUserData(jsonData.email);
  });

  return (
    <>
      <Navbar />
      <div className="text-center text-sm p-12">
        <div className="font-bold text-3xl">Please verify your email...</div>
        <div className="text-center flex justify-center ">
          <img src={mail_icon} className="w-48 h-32" />
        </div>
        <div className="flex flex-col gap-3 lg:text-sm text-lg">
          <p className="text-gray_font">
            Please verify your email address. We've sent a confirmation email
            to:{" "}
          </p>
          <div id="email" className="font-bold">
            {userData}
          </div>
          <p className="text-gray_font">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="text-gray_font">
            Didn't receive the email? Check your Spam folder, it may have been
            caught by a filter.If <br />
            you still don't see it,you can{" "}
            <a className="text-button font-bold">
              resend the confirmation email
            </a>
          </p>
          <p className="text-gray_font">
            Wrong email address?{" "}
            <a className="text-button font-bold">Change it</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;