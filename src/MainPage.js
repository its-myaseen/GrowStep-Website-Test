import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Web from './Pages/Web';
import AppDev from './Pages/AppDev';
import Software from './Pages/Software';
import GenerativeAI from './Pages/GenerativeAI';
import Machine from './Pages/Machine';
import ComputerVision from './Pages/ComputerVision';
import ChatGPT from './Pages/ChatGPT';
import UIUX from "./Pages/UIUX";
import Contact from "./Pages/ContactPage";
import BlogCards from "./Pages/blogpage";
import ScrollToTop from "./Components/ScrollToTop";
import Bloger from "./Pages/blogpage";
import TeamPage from "./Pages/TeamPage"





function MainPage() {
  return (
    <Router>
       <ScrollToTop />
      <main className="dark text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/web" element={<Web />} />
          <Route path="/app" element={<AppDev />} />
          <Route path="/software" element={<Software />} />
          <Route path="/generativeai" element={<GenerativeAI />} />
          <Route path="/machinelearning" element={<Machine />} />
          <Route path="/computervision" element={<ComputerVision />} />
          <Route path="/chatgpt" element={<ChatGPT />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/blog" element={<Bloger />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default MainPage;
