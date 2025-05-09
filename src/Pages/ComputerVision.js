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
import serviceImage from "../Images/ComputerVision.jpg";
import ImageCarouselCard from "../Components/ImageCarouselCard";










// Import your images
import img1 from "../Images/object.webp";
import img2 from "../Images/facial.webp";
import img3 from "../Images/imageclassification.png";
import img4 from "../Images/ocr.png";
import img5 from "../Images/semantic.png";
import img6 from "../Images/pose.jpg";
import img7 from "../Images/restoration.jpeg";
import img8 from "../Images/motion.avif";

// Card data
const cards = [
  {
    title: "Object Detection & Recognition",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "Facial Recognition",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Image Classification",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Optical Character Recognition (OCR)",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Semantic Segmentation",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Pose Estimation",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Video Analysis",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Motion Tracking",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];






function ComputerVision() {



  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Data Preprocessing",
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
    "At Growstep Technologies, we specialize in Computer Vision solutions that enable businesses to extract valuable data. From image and video analysis to object detection and facial recognition, we develop custom computer vision models that automate processes, enhance security, and drive innovation across industries.";
  const serviceList = [
    "Object Detection & Recognition",
    "Facial Recognition",
    "Image Classification",
    "Optical Character Recognition (OCR)",
    "Semantic Segmentation",
    "Pose Estimation",
    "Video Analysis",
    " Motion Tracking"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="Computer Vision"
            subtitle="Transform Your Ideas into Reality"
            description="we develop custom computer vision models that automate processes, enhance security, and drive innovation across industries."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="Computer Vision Solutions for Global Clients"
       description="At Growstep Technologies, we specialize in Computer Vision solutions that enable businesses to extract valuable insights from visual data. From image and video analysis to object detection and facial recognition, we develop custom computer vision models that automate processes, enhance security, and drive innovation across industries."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
        title="Computer Vision Process"
        description="Computer Vision process typically includes data collection, model development, training, and deployment to achieve accurate and reliable results."
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

export default ComputerVision;
