import React from "react";
import MyNavbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import WebHero from "../Components/WebHero";
import WebDescription from "../Components/WebDescription";
import WebSection from "../Components/WebSection";
import WebLogo from "../Components/WebLogo";
import WebProcess from "../Components/WebProcess";
import serviceImage from "../Images/chatgpt.png";
import ImageCarouselCard from "../Components/ImageCarouselCard";






// Import your images
import img1 from "../Images/chatbotdevelopment.webp";
import img2 from "../Images/contentgeneration.webp";
import img3 from "../Images/customer.jpg";
import img4 from "../Images/nlpsolutions.jpeg";
import img5 from "../Images/personalized.png";
import img6 from "../Images/reporting.jpeg";
import img7 from "../Images/prompt.webp";
import img8 from "../Images/knowledge.jpg";

// Card data
const cards = [
  {
    title: "Custom Chatbot Development",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "Content Generation",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Customer Support Automation",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Natural Language Processing (NLP) Solutions",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Personalized User Interactions",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Data-Driven Insights & Reporting",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Prompt Engineering",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Knowledge Base Integration",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];






function ChatGPT() {



  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Requirement Analysis & Planning",
      desc: "Generative AI will solve, generating text, images, or other outputs",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 1 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Customization & Configuration",
      desc: "Data is the foundation for any generative AI model.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 2 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Integration & Testing",
      desc: "generative AI (e.g., GANs, Variational or Transformer models),",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Monitoring",
      desc: " The model is evaluated to ensure it performs well on real-world tasks",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6>
    },
  ];



  const serviceTitle = "Service Description";
  const serviceDescription =
    "Our integration process ensures that ChatGPT works smoothly across your platform, whether for customer service, content management, or interactive user experiences. Let us help you unlock the full potential of AI-driven communication and take your business to the next level.";
  const serviceList = [
    "Custom Chatbot Development",
    "Natural Language Processing (NLP) Solutions",
    "Customer Support Automation",
    "Content Generation",
    "Personalized User Interactions",
    "Data-Driven Insights & Reporting",
    "Prompt Engineering",
    "Knowledge Base Integration"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="ChatGPT Integration"
            subtitle="Transform Your Ideas into Reality"
            description="OpenAI’s advanced language model, we enable you to integrate intelligent conversational agents into your platforms, offering personalized, real-time, and contextually aware responses."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="ChatGPT Integration Service for Global Clients"
       description="At Growstep Technologies we building a custom chatbot, automating content creation, or providing multilingual support, our team ensures that ChatGPT is seamlessly embedded into your systems. We help streamline operations, improve user experience, and reduce manual workloads, making your services more responsive and engaging."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
        title="ChatGPT Integration Process"
        description="At Growstep Technologies, we provide seamless ChatGPT integration services that empower businesses to enhance user interaction, automate customer support, and drive efficient communication."
        steps={steps}
        
      
      ></WebProcess>
      <ImageCarouselCard cardsData={cards} sectionTitle="What We Offer" />
      <WebLogo></WebLogo>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default ChatGPT;
