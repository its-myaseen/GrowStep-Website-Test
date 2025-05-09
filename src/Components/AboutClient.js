import React from "react";
import '../Styles/style.css';



export default function AboutClient() {

  return (

    <section class=" pt-14 sm:pl-64 px-9">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      

      <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <span class="inline-block px-4 py-1 bg-transparent border-2 border-Blue text-Blue rounded-full mb-4 text-sm">
          About Us
        </span>
        <h1 class="text-3xl lg:text-5xl sm:text-4xl font-bold text-gray-100 leading-tight mb-6">
        At <span className="text-Blue">Growstep,</span>  we drive growth by providing high-quality, custom solutions designed to transform your business.
        </h1>
        <p class="text-lg text-gray-500 mb-8">
        We take pride in providing top-notch custom services that are intended to assist you in creating, expanding, and revolutionizing your organization. We have been assisting clients since 2021.
        </p>
        <a href="#" class="inline-block bg-Blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-Blue transition">
          Learn More
        </a>
      </div>
      

      <div class="lg:w-1/2 flex flex-col lg:flex-row lg:space-x-8 items-center">
        
       
       
      <img className="w-72" src={require("../Images/hero2.jpg")}/>
 
      <div class="w-full lg:w-1/2 space-y-8 lg:text-left pr-32 sm:pr-24">

  <div class="border-b-2 pb-6 pt-8 sm:pt-0">
    <h3 class="text-5xl lg:text-5xl font-extrabold text-blue-600">100+</h3>
    <p class="text-xl lg:text-2xl text-gray-500">Active Clients</p>
  </div>


  <div class="border-b-2 pb-6">
    <h3 class="text-5xl lg:text-5xl font-extrabold text-blue-600">800+</h3>
    <p class="text-xl lg:text-2xl text-gray-500">Projects Delivered</p>
  </div>


  <div>
    <h3 class="text-5xl lg:text-5xl font-extrabold text-blue-600">90+</h3>
    <p class="text-xl lg:text-2xl text-gray-500">Happy Clients</p>
  </div>
</div>


      </div>
      
    </div>
  </section>

  );
}
