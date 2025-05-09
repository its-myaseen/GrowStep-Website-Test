import React from "react";
import '../Styles/style.css';



export default function SectionAbout() {

  return (

    <section class="px-2 pt-16 sm:pt-32 md:px-0 bg-grid-white/[0.09]">
  <div class="container items-center max-w-7xl px-8 mx-auto xl:px-5">
    <div class="flex flex-wrap items-center sm:-mx-3">
      <div class="w-full md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-Blue sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Our path to being a top partner in <span className="text-gray-300">software development</span> 
          </h1>
          <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">We take pride in providing top-notch custom services that are intended to assist you in creating, expanding, and revolutionizing your organization. We have been assisting clients since 2021.</p>
         
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src={require("../Images/hero3.jpg")}/>
          </div>
      </div>
    </div>
  </div>
</section>


  );
}
