import React from "react";
import '../Styles/style.css';

export default function AppSection() {    
    return (      
        <section className="pt-6 justify-center items-center">             
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:flex lg:items-center lg:justify-center lg:gap-12">                 
                <div className="flex-1 lg:block">                         
                    <img 
                        src={require("../Images/App.jpg")} 
                        alt="Professional web development services" 
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg" // Smaller image height
                    />                     
                </div>                     
                <div className="max-w-xl px-4 space-y-3 text-center lg:text-left mt-6 sm:px-0 md:mt-0 lg:max-w-lg">                         
                    <h3 className="text-Blue font-semibold">Professional services</h3>                         
                    <p className="text-gray-200 text-3xl font-bold tracking-tighter sm:text-4xl">                             
                    Custom <span className="text-Blue">App Development Solutions</span> for Clients Worldwide                        
                    </p>                         
                    <p className="mt-3 text-gray-300">                             
                    Growstep Mobile App Development Services cover a range of platforms, including iOS (Apple), Android (Google), and others, playing a pivotal role in how people engage with technology in today’s mobile-centric world. Mobile developers focus on designing, coding, testing, and optimizing apps to deliver seamless and efficient digital experiences on handheld devices.
                    </p>                         
                    <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-Blue hover:text-gray-200 duration-150 font-medium">                             
                        Schedule a Demo                             
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">                                 
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />                             
                        </svg>                         
                    </a>                     
                </div>                 
            </div>             
        </section>     
    ); 
}
