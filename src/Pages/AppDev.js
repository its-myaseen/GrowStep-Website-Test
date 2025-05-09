import React from "react";
import MyNavbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import WebHero from "../Components/WebHero";
import AppDescription from "../Components/AppDescription";
import AppSection from "../Components/AppSection";
import AppLogo from "../Components/AppLogo";
import AppProcess from "../Components/AppProcess";
import ImageCarouselCard from "../Components/ImageCarouselCard";




// Import your images
import img1 from "../Images/research.jpg";
import img2 from "../Images/UIdesign.jpg";
import img3 from "../Images/appdev.webp";
import img4 from "../Images/quality1.webp";
import img5 from "../Images/api1.webp";
import img6 from "../Images/update.jpg";
import img7 from "../Images/testing.jpg";
import img8 from "../Images/deploy.png";

// Card data
const cards = [
  {
    title: "Research & Strategy",
    image: img1,
    desc: "We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.",
  },
  {
    title: "UI/UX Design",
    image: img2,
    desc: "We build fast, cross-platform apps using React Native for seamless performance and great user experiences.",
  },
  {
    title: "App Development",
    image: img3,
    desc: "We craft custom software solutions to streamline your processes and drive business growth.",
  },
  {
    title: "Quality Assurance",
    image: img4,
    desc: "We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.",
  },
  {
    title: "API Development Service",
    image: img5,
    desc: "Your website will look perfect on every device.",
  },
  {
    title: "Ongoing Support and Updates",
    image: img6,
    desc: "Improve your visibility on search engines and attract more customers.",
  },
  {
    title: "Mobile App Testing",
    image: img7,
    desc: "Create high-converting landing pages that drive results.",
  },
  {
    title: "Launch",
    image: img8,
    desc: "Seamlessly connect your system with external services and platforms.",
  },
];







function AppDev() {
  return (
    <NextUIProvider>
      <MyNavbar />
      <WebHero  title="App Development"
            subtitle="Transform Your Ideas into Reality"
            description="Leverage our Custom App Development Services to create impactful solutions. Tailored to elevate user experience, drive engagement, and scale your vision."
            buttonText="Get Started 🚀"
            ></WebHero>
      <AppSection></AppSection>
      <AppDescription></AppDescription>
      <AppProcess
      ></AppProcess>
      <ImageCarouselCard cardsData={cards} sectionTitle="What We Offer" />
      <AppLogo></AppLogo>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default AppDev;
