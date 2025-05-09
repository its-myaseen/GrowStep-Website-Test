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
import serviceImage from "../Images/Generative-AI-1200x600.png";
import ImageCarouselCard from "../Components/ImageCarouselCard";






// Import your images
import img1 from "../Images/contentcreation.webp";
import img2 from "../Images/designai.jpg";
import img3 from "../Images/nlp.webp";
import img4 from "../Images/customai.webp";
import img5 from "../Images/contentaigeneration.jpeg";
import img6 from "../Images/texttoimage.jpg";
import img7 from "../Images/chatbot.jpg";
import img8 from "../Images/ai.jpg";

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







function GenerativeAI() {



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
    "Tailored to automate creativity, enhance productivity, and deliver intelligent experiences that scale with your goals.";
  const serviceList = [
    "AI-Powered Content Creation",
    "AI-Driven Design",
    "Natural Language Processing (NLP)",
    "Custom AI Solutions",
    "AI Content Generation",
    "Text-to-Image/Video Generation",
    "Chatbot & Virtual Assistant Development",
    "Personalized AI Models"
  ];


  return (
    <NextUIProvider>
      <MyNavbar />


      <WebHero  title="Geneartive AI"
            subtitle="Transform Your Ideas into Reality"
            description="Leverage our Generative AI Services to transform your business.
            Tailored to automate creativity, enhance productivity, and deliver intelligent experiences that scale with your goals."
            buttonText="Get Started 🚀"
            ></WebHero>


      <WebSection
       heading="Professional services"
       title="Generative AI Development Solutions for Global Clients"
       description="We specialize in building powerful AI-driven solutions that generate content, ideas, visuals, code, and even conversations — tailored to your unique business needs.
                    Our team of AI engineers, data scientists, and creative technologists leverage the latest in Generative Adversarial Networks (GANs), transformer-based models (like GPT, BERT, and LLaMA), and diffusion models to develop custom applications that think, create, and evolve."
       buttonText="Schedule a Demo"
       imageSrc={serviceImage}
       ></WebSection>


      <WebDescription
      title={serviceTitle} 
      description={serviceDescription} 
      services={serviceList} 
      
      ></WebDescription>

      
      <WebProcess
        title="Generative AI Process"
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

export default GenerativeAI;
