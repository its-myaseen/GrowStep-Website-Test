import React from "react";
import MyNavbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import SectionAbout from "../Components/SectionAbout";
import Mission from "../Components/Mission";
import AboutClient2 from "../Components/AboutClient2";
import AboutClient from "../Components/AboutClient";



function About() {
  return (
    <NextUIProvider>
      <MyNavbar />
      <SectionAbout></SectionAbout>
      <Mission></Mission>
      <AboutClient2></AboutClient2>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default About;
