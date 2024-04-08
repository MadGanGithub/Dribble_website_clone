import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Second = ({ onOptionsChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [moreThanOne, setOne] = useState(false);

  const handleOptionChange = (event) => {
    const id = event.target.id;
    var updated_value;

    if (selectedOptions.includes(id)) {
      updated_value = selectedOptions.filter((option) => option !== id);
      setSelectedOptions(updated_value);
      onOptionsChange(updated_value);
    } else {
      updated_value = [...selectedOptions, id];
      setSelectedOptions(updated_value);
      onOptionsChange(updated_value);
    }

    if (updated_value.length > 1) {
      setOne(true);
    } else {
      setOne(false);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center px-10 text-sm gap-3">
        <div>
          <div className="text-4xl font-bold">What brings you to Dribbble?</div>
          <div className="lg:text-sm text-xl">
            Select the options that best describe you. Don't worry, you can
            explore other options later
          </div>
        </div>
        <div className="flex lg:justify-center lg:py-8 lg:gap-6 lg:flex-row flex-col items-center gap-3">
          <div
            className={`rounded-md bg-white lg:w-1/5 w-4/5 border flex flex-col gap-1 p-2 ${
              selectedOptions.includes("radioBtn1")
                ? "border-pink-500 border-2"
                : ""
            }`}
          >
            <img src={image1} className="rounded-lg w-50" />
            <label className="font-bold" htmlFor="radioBtn1">
              I'm a designer looking to <br />
              share my work
            </label>
            <div>
              <input
                id="radioBtn1"
                type="checkbox"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("radioBtn1")}
              />
            </div>
          </div>
          <div
            className={`rounded-md bg-white lg:w-1/5 w-4/5 border flex flex-col gap-1 p-2 ${
              selectedOptions.includes("radioBtn2")
                ? "border-pink-500 border-2"
                : ""
            }`}
          >
            <img src={image2} className="rounded-lg w-50" />
            <label className="font-bold" htmlFor="radioBtn2">
              I'm looking to hire a <br />
              designer
            </label>
            <div>
              <input
                id="radioBtn2"
                type="checkbox"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("radioBtn2")}
                className=" h-4 w-4 bg-pink-500 text-white cursor-pointer"
              />
            </div>
          </div>
          <div
            className={`rounded-md bg-white lg:w-1/5 w-4/5 border flex flex-col gap-1 p-2 ${
              selectedOptions.includes("radioBtn3")
                ? "border-pink-500 border-2"
                : ""
            }`}
          >
            <img src={image3} className="rounded-lg w-50" />
            <label className="font-bold" htmlFor="radioBtn3">
              I'm looking for design <br />
              inspiration
            </label>
            <div>
              <input
                id="radioBtn3"
                type="checkbox"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("radioBtn3")}
              />
            </div>
          </div>
        </div>
        <div
          id="message"
          className={`font-bold ${moreThanOne ? "" : "hidden"}`}
        >
          Anything else? You can select multiple
        </div>
      </div>
    </>
  );
};

export default Second;