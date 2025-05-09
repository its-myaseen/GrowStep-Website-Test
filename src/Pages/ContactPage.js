import React from "react";
import MyNavbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";



function About() {
  return (
    <NextUIProvider>
      <MyNavbar />
      <Contact></Contact>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default About;
