import { useEffect, useRef } from "react";

const UploadWidget = ({ setImageUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dydrx3zqs",
        uploadPreset: "imageupload",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Image URL:", result.info.secure_url);
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <div>
      <button
        onClick={() => widgetRef.current.open()}
        className="bg-white border-[1px] border-gray-500 p-2 rounded-md font-bold hover:bg-gray-100"
      >
        Choose Image
      </button>
    </div>
  );
};

export default UploadWidget;
