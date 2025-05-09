import React from "react";
import '../Styles/style.css';



export default function HeroSection() {

  return (
<div class="relative flex w-full flex-col items-center bg-grid-white/[0.09]">

<div class="relative my-24 flex w-full flex-col items-center sm:mt-32">
  <a target="_blank" rel="noreferrer" href="/home"
    class="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#1d9bf0" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
    <p class="text-sm font-semibold text-[#1d9bf0]">Introducing New Feature</p>
  </a>
  <h1
    class="pb-1 px-1 sm:px-8 mt-8 max-w-sm bg-gradient-to-br from-gray-300 via-Blue to-gray-300 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl sm:pb-4 gradient-animation">
    Take the next step. <br/>
    Let’s give your project a go!
</h1>
  <span class="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-100">
  Growstep Technologies excels in web, app development, AI, and design, delivering innovative solutions globally.
  </span>
  <p class="mt-3 rounded border px-3 py-1 shadow">
    🌍 <span class="text-accent font-semibold">Worldwide</span>Solutions Provider
  </p>
  <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
    <a href="https://example.com/new-feature"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-Blue">
      <svg class="h-[30px] text-white" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
        stroke-width="3" fill="none">
        <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
        <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
        <circle cx="39.46" cy="24.56" r="6.2"></circle>
        <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
        <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
        <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
      </svg>
      Schedule Strategy Call
    </a>
    <a href="#demo"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-Blue px-10 py-3 text-Blue">Learn
      More →
    </a>
  </div>
</div>
</div>
  );
}
