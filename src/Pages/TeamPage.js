import React from "react";
import Navbar from '../Components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../Components/Footer";
import Team from "../Components/Team";






function TeamPage() {
  return (
    <NextUIProvider>
      <Navbar></Navbar>
      <Team></Team>
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default TeamPage;
