import React, { useState } from "react";
import '../Styles/style.css';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-blue-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8 relative">
          <p className="font-medium">
            We just launched a new version of our library!{" "}
            <a href="javascript:void(0)" className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
                    Learn more
                </a>
          </p>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-indigo-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
}
