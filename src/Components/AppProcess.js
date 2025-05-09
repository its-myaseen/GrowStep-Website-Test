import React from "react";
import '../Styles/style.css';



export default function AppProcess() {


    
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
    
            title: "Requirements Analysis",
            desc: "Gather requirements with collaboration",
            extraHeading: <h6 className="text-base font-medium text-blue-400">Step 1 </h6> 
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Design & Development",
            desc: "Develop plan, design prototypes, code.",
            extraHeading: <h6 className="text-base font-medium text-blue-400">Step 2 </h6> 
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Testing & Deployment",
            desc: "Testing and development for applications.",
            extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6> 
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Ongoing Updates",
            desc: " Ongoing maintenance, security, quality assurance.",
            extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6> 
        },
           
    ]
    

  return (
    
    <section className="relative py-28 mt-11">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-200 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    
                    <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-200">
                  <span className="text-Blue" >Growstep</span> App Development Process
                    </h3>
                    <p className="mt-3">
                    Our methodical process consists of four key steps: Requirements Analysis, Design & Development, Testing & Deployment, and Ongoing Maintenance and Updates.
                    </p>
                    <div class="rounded-md shadow mt-8"><a
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        href="/">Place a call 🚀
                    </a>
                </div>
                </div>
                
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
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
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>

  );
}
