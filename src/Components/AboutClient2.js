import React from "react";
import '../Styles/style.css';



export default function AboutClient2() {


    const stats = [
        {
            data: "100+",
            title: "Active Clients"
        },
        {
            data: "800+",
            title: "Projects"
        },
        {
            data: "90+",
            title: "Happy Clients"
        },
        {
            data: "4+",
            title: " Years Experience"
        },
    ]



  return (

    <section className="py-14 pt-40">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-500 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
            <img src={require("../Images/Step1.jpg")} className="rounded-lg" alt="" />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
                <h3 className="text-gray-100 text-3xl font-semibold sm:text-4xl">
                    At Growstep, we drive growth by providing high-quality, custom solutions designed to transform your business.
                </h3>
                
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="">
                                <h4 className="text-4xl text-Blue font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
</section>

   

  );
}
