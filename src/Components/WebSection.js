import React from "react";
import '../Styles/style.css';

export default function WebHero({ heading, title, description, buttonText, imageSrc }) {    
    return (      
        <section className="pt-6 justify-center items-center">             
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:flex lg:items-center lg:justify-center lg:gap-12 ">                 
                <div className="max-w-xl px-4 space-y-3 text-left lg:text-left mt-6 sm:px-0 md:mt-0 ">                         
                    <h3 className="text-Blue font-semibold ">{heading}</h3>                         
                    <p className="text-gray-200 text-3xl font-bold tracking-tighter sm:text-4xl">                             
                        {title}                         
                    </p>                         
                    <p className="mt-3 text-gray-300">                             
                        {description}                         
                    </p>                         
                    <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-Blue hover:text-gray-200 duration-150 font-medium pb-3">                             
                        {buttonText}                             
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">                                 
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />                             
                        </svg>                         
                    </a>                     
                </div>   
                <div className="flex-1">                         
                    <img 
                        src={imageSrc} 
                        alt="Professional web development services" 
                        className="w-full h-[380px] object-cover rounded-lg shadow-lg opacity-75"
                    />                     
                </div>                    
            </div>             
        </section>     
    ); 
}
