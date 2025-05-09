import React, { useEffect, useRef } from 'react';
import '../Styles/style.css';



export default function Steps() {



  const cashTextRef = useRef(null);

  useEffect(() => {
    const cashText = cashTextRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cashText.classList.add('animate-cash');
            observer.unobserve(cashText); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is in view
    );

    if (cashText) observer.observe(cashText);

    return () => {
      if (cashText) observer.unobserve(cashText);
    };
  }, []);

  return (

    <section className="py-14 px-5 md:px-1 mt-16">
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="flex items-center gap-x-12 sm:px-4 md:px-0 lg:flex-row flex-col gap-y-12">
          
            <div className="lg:max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0">
                <h3 className="text-white font-semibold">
                    Pricing
                </h3>
                <p className="text-white font-bold tracking-tighter text-3xl sm:text-5xl">
                We produce the <span className="text-blue-500">best technology</span>  on schedule and under budget by utilizing the most recent  <span className="text-blue-500">developments in AI.</span>
                </p>
                <p className="mt-3 text-white tracking-tighter">
                Since 2021, we have been providing assistance to clients, and we take great delight in offering premium tailored services that are intended to help you establish, expand, and transform your company.
                </p>
                <a
            href="/contact"
            className="hidden lg:inline-block text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            See Our Reviews
          </a>
            </div>
            {/* <div className="flex-1 sm:hidden lg:block">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
            </div> */}
            <div class="w-auto p-4 sm:p-0 ">
        <div class="cardhour glass-effect hover:border-transparent transition duration-300 ease-in-out border-gray-200  p-6 rounded-lg">
          <h1 class="text-blue-300" >Starting from</h1>
          <h1
      ref={cashTextRef}
      className="text-5xl font-medium title-font mb-2 text-white cash-effect"
    >
      $25/hr
    </h1>
          <p class="leading-relaxed text-white"> <br/> We offer flexible, hourly-based service options, giving you the freedom to scale projects according to your needs while maintaining top-quality standards.<br/><br/>  Whether you're looking to optimize operations, enhance automation, or develop AI-powered applications, our expert team is here to provide reliable, on-demand support tailored to your project requirements. </p>
          <a href="https://example.com/new-feature"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-blue-700 hover:bg-blue-600 mt-5">
      Contact Us
    </a>
        </div>
      </div>
        </div>
    </div>
</section>


  );
}
