import React from "react";
import Navbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "../Components/HeroSection";
import Clients from "../Components/Clients"
import Services from "../Components/Services"
import Steps from "../Components/Steps"
import Stats from "../Components/Stats"
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import Popup from "../Components/Popup";
import Logo from "../Components/Logo";
import Gallery from "../Components/Gallery"






function Home() {
  return (
    <NextUIProvider>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Clients></Clients>
      <Services></Services>
      <Steps></Steps>
      <Stats></Stats>
     <Gallery></Gallery>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
      <Popup />
    </NextUIProvider>
  );
}

export default Home;
