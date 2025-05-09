// import { useRef, useState } from "react";
// import '../Styles/style.css';

// const FaqsCard = (props) => {

//     const answerElRef = useRef();
//     const [state, setState] = useState(false);
//     const [answerH, setAnswerH] = useState('0px');
//     const { faqsList, idx } = props;

//     const handleOpenAnswer = () => {
//         const answerElH = answerElRef.current.childNodes[0].offsetHeight;
//         setState(!state);
//         setAnswerH(`${answerElH + 20}px`);
//     };

//     return (
//         <div
//             className="space-y-3 mt-5 overflow-hidden border-b"
//             key={idx}
//             onClick={handleOpenAnswer}
//         >
//             <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
//                 {faqsList.q}
//                 {
//                     state ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                     )
//                 }
//             </h4>
//             <div
//                 ref={answerElRef} className="duration-300"
//                 style={state ? { height: answerH } : { height: '0px' }}
//             >
//                 <div>
//                     <p className="text-gray-500">
//                         {faqsList.a}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function FAQ() {

//     const faqsList = [
//         {
//             q: "What are some random questions to ask?",
//             a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
//         },
//         {
//             q: "Do you include common questions?",
//             a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
//         },
//         {
//             q: "Can I use this for 21 questions?",
//             a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
//         },
//         {
//             q: "Are these questions for girls or for boys?",
//             a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
//         },
//         {
//             q: "What do you wish you had more talent doing?",
//             a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
//         }
//     ];

//     return (
//         <section className="leading-relaxed mt-12 mx-auto px-4 md:px-8">
//             <div className="space-y-3 text-center">
//                 <h1 className="text-3xl text-white font-semibold">
//                     Frequently Asked Questions
//                 </h1>
//                 <p className="text-white max-w-lg mx-auto text-lg">
//                     Answered all frequently asked questions, Still confused? feel free to contact us.
//                 </p>
//             </div>
//             <div className="mt-14 mx-auto px-10 sm:px-20">
//                 {
//                     faqsList.map((item, idx) => (
//                         <FaqsCard
//                             key={idx}
//                             idx={idx}
//                             faqsList={item}
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     );
// }
 











// Second Line Start //


import React, { useState } from "react"; // Import useState from React
import '../Styles/style.css';
import Lottie from 'lottie-react';
import animationData from '../Images/FAQ.json';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Set the default open index to the first item

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-24">
            <div className="mx-auto  max-w-7xl px-4 sm:px-4 lg:px-8">
                <div
                    className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
                >
                  
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="">
                                <h6 className="text-lg text-center font-medium text-Blue mb-2 lg:text-left">
                                    FAQs
                                </h6>
                                <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-200 leading-[3.25rem]  lg:text-left">
                                    Looking for answers?
                                </h2>
                            </div>
                            <div className="accordion-group" data-accordion="default-accordion">
                                {/* Accordion items */}
                                {[
                                    {
                                        question: "What industries do you specialize in Software?",
                                        answer: "We cater to a variety of industries including healthcare, finance, e-commerce, education, logistics, and more. Our team adapts to your specific business domain to deliver tailored software solutions that meet industry standards."
                                    },
                                    {
                                        question: "Do you offer support after development?",
                                        answer: "Yes, we provide ongoing support and maintenance services even after the software is launched. This includes bug fixing, updates, performance monitoring, and adding new features as your business evolves."
                                    },
                                    {
                                        question: "What kind of AI models do you develop?",
                                        answer: "We develop a range of AI models including natural language processing (NLP), computer vision, speech recognition, recommendation systems, and predictive analytics models. Each solution is customized to meet your specific use case."
                                    },
                                    {
                                        question: "How do you ensure AI model accuracy?",
                                        answer: "We ensure accuracy by using high-quality datasets, applying advanced machine learning algorithms, and performing rigorous testing, validation, and optimization. We also continuously fine-tune the models based on feedback and real-world data."
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`accordion py-8 border-b border-solid border-gray-200 ${openIndex === index ? 'active' : ''}`}
                                    >
                                        <button
                                            className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-200 w-full transition duration-500 hover:text-Blue accordion-active:text-indigo-600 accordion-active:font-medium"
                                            onClick={() => handleToggle(index)} // Call handleToggle on click
                                        >
                                            <h5>{item.question}</h5>
                                            <svg
                                                className={`text-gray-400 transition duration-500 group-hover:text-Blue ${openIndex === index ? 'rotate-180' : ''}`}
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            className={`accordion-content w-full px-0 overflow-hidden pr-4 ${openIndex === index ? 'max-h-[100px]' : 'max-h-0'} transition-all duration-500`}
                                            aria-labelledby={`basic-heading-${index}`}
                                        >
                                            <p className="text-base text-gray-400 font-normal">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full lg:w-1/2 hidden lg:block">
                    <div style={{ width: '90%', height: '90%' }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default FAQ; // Export the FAQ component



