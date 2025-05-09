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
import serviceImage from "../Images/service.jpg";
import ImageCarouselCard from "../Components/ImageCarouselCard";
import '../Styles/style.css';




// Import your images
import img1 from "../Images/frontend-web.jpg";
import img2 from "../Images/backend.jpg";
import img3 from "../Images/content.jpg";
import img4 from "../Images/ecommerce.jpg";
import img5 from "../Images/responsive.jpg";
import img6 from "../Images/seo.png";
import img7 from "../Images/landing1.webp";
import img8 from "../Images/api.jpg";

// Card data
const cards = [
  {
    title: "Frontend Development",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "BackEnd Development",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "Content Management System Integration",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "E-commerce Features",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "Responsive Design",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Landing Page Design",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "API Integration",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];






function Web() {


  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Discovery & Planning",
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
      title: "Development",
      desc: "Develop and implement the website’s functionality",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 3</h6>
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Testing & Launch",
      desc: "Ensure quality and launch the website.",
      extraHeading: <h6 className="text-base font-medium text-blue-400">Step 4</h6>
    },
  ];


  const serviceTitle = "Service Description";
  const serviceDescription =
    "Web development involves designing the user interface, building back-end functionality, and ensuring the website is responsive and user-friendly.";
  const serviceList = [
    "Front-end Development",
    "Back-end Development",
    "Content Management System Integration",
    "E-commerce Features",
    "Responsive Design",
    "Search Engine Optimization (SEO)",
    "Landing Page Design",
    "API Integration"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="Web Development"
            subtitle="Transform Your Ideas into Reality"
            description="Leverage our Custom App Development Services to create impactful solutions. Tailored to elevate user experience, drive engagement, and scale your vision."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title={ <>
        Tailored Web <span className="text-blue-600">Development Solutions</span> for Global Clients
      </>}
       description="We are a leading web development company specializing in custom web development, website design, and tailored solutions. Our expert team designs, builds, and maintains customized websites and applications for businesses and organizations. With a global presence, we expand our web design development services, focusing on both custom websites and off-the-shelf platforms. We offer a full range of services, including responsive design, website redesign, and comprehensive web development to meet the specific needs of our clients."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
      
      title="Web Development Process"
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

export default Web;
