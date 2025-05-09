import React from "react";
import Navbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../Components/Footer";
import BlogPage from "../Components/Blog"
import Clients from "../Components/Clients";







function Bloger() {
  return (
    <NextUIProvider>
      <Navbar />
      <BlogPage></BlogPage>
      <Clients></Clients>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default Bloger;
