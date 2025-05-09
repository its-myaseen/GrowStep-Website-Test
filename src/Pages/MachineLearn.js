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
import serviceImage from "../Images/Software.png";
import ImageCarouselCard from "../Components/ImageCarouselCard";




// Import your images
import img1 from "../Images/consultation.webp";
import img2 from "../Images/prototyping.png";
import img3 from "../Images/fullstack.webp";
import img4 from "../Images/integration.jpg";
import img5 from "../Images/testing.jpg";
import img6 from "../Images/implementation.png";
import img7 from "../Images/supp.jpg";
import img8 from "../Images/scalibilty.png";

// Card data
const cards = [
  {
    title: "Consultation and Needs Analysis",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "Custom Design and Prototyping",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Full-Stack Development",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Integration Services",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Quality Assurance and Testing",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Deployment and Implementation",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Ongoing Support and Maintenance",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Scalability and Upgrades",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];






function Software() {


  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Planning Analysis",
      desc: "Understand the project vision and create a roadmap.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 1 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Design & Prototyping",
      desc: "Create a user-friendly and visually appealing design.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 2 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Development and Implementation",
      desc: "Develop and implement the website’s functionality",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Testing and Deployment",
      desc: "Ensure quality and launch the website.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6>
    },
  ];



  const serviceTitle = "Software Service Description";
  const serviceDescription =
    "Our custom software development service focuses on creating tailored solutions that meet the unique needs and goals of your business.";
  const serviceList = [
    "Consultation and Needs Analysis",
    "Custom Design and Prototyping",
    "Full-Stack Development",
    "Integration Services",
    "Quality Assurance and Testing",
    "Deployment and Implementation",
    "Ongoing Support and Maintenance",
    "Scalability and Upgrades"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="Software Development"
            subtitle="Transform Your Ideas into Reality"
            description="Custom software solutions crafted to perfectly align with your business needs, elevating productivity and performance to unparalleled levels."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="Tailored Web Development Solutions for Global Clients"
       description="Custom software development involves creating bespoke applications tailored to an organization’s unique needs and objectives. Unlike generic solutions, custom software is built to align with specific workflows and goals, ensuring optimal efficiency and scalability. This personalized approach enhances user experience, supports innovation, and provides a competitive advantage as business needs evolve."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
      
      title="Software Development Process"
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

export default Software;
