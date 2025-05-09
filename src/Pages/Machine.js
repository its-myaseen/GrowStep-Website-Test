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
import serviceImage from "../Images/Untitled.jpg";
import ImageCarouselCard from "../Components/ImageCarouselCard";




// Import your images
import img1 from "../Images/modelmachine.jpg";
import img2 from "../Images/data.avif";
import img3 from "../Images/analysis.jpg";
import img4 from "../Images/nlpnew.jpg";
import img5 from "../Images/ComputerVisionmachine.jpg";
import img6 from "../Images/aipowered.webp";
import img7 from "../Images/modeldeployment1.jpg";
import img8 from "../Images/optimization.jpg";

// Card data
const cards = [
  {
    title: "Custom Model Development",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "Data Preprocessing & Cleaning",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Predictive Analytics",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Natural Language Processing (NLP)",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Computer Vision Solutions",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "AI-Powered Automation",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Model Deployment & Integration",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Model Evaluation & Optimization",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];







function Machine() {



  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Problem & Research",
      desc: "Generative AI will solve, generating text, images, or other outputs",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 1 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Data Collection",
      desc: "Data is the foundation for any generative AI model.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 2 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Model Training",
      desc: "generative AI (e.g., GANs, Variational or Transformer models),",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Deployment",
      desc: " The model is evaluated to ensure it performs well on real-world tasks",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6>
    },
  ];



  const serviceTitle = "Service Description";
  const serviceDescription =
    "Machine learning solutions, including model development, predictive analytics, NLP, computer vision, automation, and seamless integration to empower businesses with data-driven insights and improved efficiency.";
  const serviceList = [
    "Custom Model Development",
    "Data Preprocessing & Cleaning",
    "Predictive Analytics",
    "Natural Language Processing (NLP)",
    "Computer Vision Solutions",
    "AI-Powered Automation",
    "Model Deployment & Integration",
    "Model Evaluation & Optimization"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="Machine Learning"
            subtitle="Transform Your Ideas into Reality"
            description="Machine learning solutions, including model development, predictive analytics, NLP, computer vision, automation, and seamless integration to empower businesses with data-driven insights and improved efficiency."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="Machine Learning Solutions for Global Clients"
       description="At Growstep Technologies, we provide tailored machine learning solutions to unlock data-driven insights, enhance decision-making, and automate processes for businesses. Our services include custom model development, data preprocessing, predictive analytics, NLP, computer vision, and more, ensuring seamless integration and optimization."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
        title="Machine Learning Process"
        description="Our methodical process consists of four key steps: Discovery & Planning, Design & Prototyping, Development, and Testing & Launch."
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

export default Machine;
