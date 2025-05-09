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
import serviceImage from "../Images/UIdesign.jpg";
import ImageCarouselCard from "../Components/ImageCarouselCard";







// Import your images
import img1 from "../Images/usercentered.webp";
import img2 from "../Images/wireframing.jpg";
import img3 from "../Images/responsive1.webp";
import img4 from "../Images/usability.webp";
import img5 from "../Images/brand.jpg";
import img6 from "../Images/information.png";
import img7 from "../Images/interaction.jpg";
import img8 from "../Images/accebility.jpg";

// Card data
const cards = [
  {
    title: "User-Centered Design",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "Wireframing & Prototyping",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Responsive Design",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Usability Testing & Optimization",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Brand Consistency",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Information Architecture",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Interaction Design",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Accessibility Design",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];










function UIUX() {



  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Research & Discovery",
      desc: "This step involves understanding the target users, their needs",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 1 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Wireframing",
      desc: "Based on the research, we create wireframes to outline the structure",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 2 </h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Usability Testing & Iteration",
      desc: "We test the design with real users to identify any usability issues or obstacles",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Final Design & Handoff",
      desc: " After finalizing the design, we provide developers with all necessary assets",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6>
    },
  ];



  const serviceTitle = "Service Description";
  const serviceDescription =
    "Integrating thoughtful design principles and creative solutions, we help businesses create digital products that stand out, enhance user engagement, and drive conversions. Our goal is to provide designs that are not only functional but also delight users at every touchpoint.";
  const serviceList = [
    "User-Centered Design",
    "Wireframing & Prototyping",
    "Responsive Design",
    "Usability Testing & Optimization",
    "Brand Consistency",
    "Information Architecture",
    "Interaction Design",
    "Accessibility Design"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="UI | UX Designing"
            subtitle="Transform Your Ideas into Reality"
            description="We prioritize the needs and preferences of your target audience, ensuring that the interface is both easy to navigate and enjoyable to use."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="UI UX Designing for Global Clients"
       description="At Growstep Technologies, we specialize in creating innovative UI/UX designs that deliver seamless, user-centered experiences. Our focus is on designing visually appealing, intuitive interfaces that not only engage users but also make interactions easy, efficient, and delightful. We combine creativity, functionality, and user research to craft designs that enhance user satisfaction and drive business success."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
        title="UI UX Design Process"
        description="This process ensures that every aspect of the UI/UX design is user-centered, iterative, and aligned with both user needs and business goals, ultimately creating products that provide an exceptional experience."
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

export default UIUX;
