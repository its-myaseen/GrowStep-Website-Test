import React from "react";
import '../Styles/style.css';

export default function WebDescription({ title, description, services }) {
  return (
    <section className="text-gray-100 body-font pt-36">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-left sm:text-center text-3xl font-bold tracking-tighter text-gray-200 mb-4">
            <span className="text-Blue tracking-tighter">Growstep </span><br className="sm:none"></br>{title}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-left sm:mx-auto sm:text-center">{description}</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {services.map((service, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="glass-box hover:bg-blue-700 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font text-gray-100 font-medium">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
