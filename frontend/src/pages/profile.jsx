import React, { useState } from "react";
import Navbarless from "../components/navbarless.jsx";
import First from "../components/first_page.jsx";
import Second from "../components/second_page.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Profile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [location, setLocation] = useState("");
  const [options, setOptions] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setLoading(true);

    const jsonDataString = sessionStorage.getItem("userDetails");
    const jsonData = JSON.parse(jsonDataString);

    const details = {
      name: jsonData.name,
      username: jsonData.username,
      email: jsonData.email,
      password: jsonData.password,
      imageUrl: imageUrl,
      location: location,
      options: options,
    };

    await axios
      .post("http://localhost:4100/signup", details)
      .then((response) => {
        setLoading(false);
        toast.success("Mail has been sent successfully");
      });

    navigate("/conf");
  };

  return (
    <>
      <Navbarless state={activeStep} onStepChange={setActiveStep} />
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center">
            {activeStep === 0 && (
              <div className="flex flex-col items-center lg:gap-3 gap-8 lg:items-start">
                <First
                  onLocationChange={setLocation}
                  onImageChange={setImageUrl}
                  setActiveStep={setActiveStep}
                />
                <button
                  className={`rounded-lg w-1/3 p-2 lg:p-0 text-3xl lg:text-lg hover:bg-pink-200 ${
                    location === "" || imageUrl === ""
                      ? "bg-hidden text-white cursor-not-allowed"
                      : "bg-button text-white"
                  }`}
                  onClick={handleNext}
                  disabled={location === "" || imageUrl === ""}
                >
                  Next
                </button>
              </div>
            )}
          </div>
          {activeStep === 1 && (
            <div className="flex flex-col gap-3 justify-center items-center">
              <Second
                onOptionsChange={setOptions}
                setActiveStep={setActiveStep}
              />
              <button
                className={`w-36 rounded-lg py-1 p-2 lg:p-0 text-2xl lg:text-lg hover:bg-pink-200 ${
                  options.length === 0
                    ? "bg-hidden text-white cursor-not-allowed"
                    : "bg-button text-white"
                }`}
                onClick={handleFinish}
                disabled={options.length === 0}
              >
                Finish
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;