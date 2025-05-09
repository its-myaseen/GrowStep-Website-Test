import React from "react";
import '../Styles/style.css';

export default function WebProcess({ title, description, steps }) {
  return (
    <section className="relative py-28 mt-11">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-200 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-200">
            <span className="text-Blue">Growstep</span> {title}
          </h3>
          <p className="mt-3">
            {description}
          </p>
          <div className="rounded-md shadow mt-8">
            <a
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
              href="/">Place a call 🚀
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {steps.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-Blue text-gray-200 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  {item.extraHeading}
                  <h4 className="text-lg text-gray-100 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
    </section>
  );
}
