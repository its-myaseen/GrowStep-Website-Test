import React from "react";
import '../Styles/style.css';

export default function Clients() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-24 overflow-hidden">
      <div className="container mx-auto grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-blue-500">Trusted by These </span> Clients
          </h2>
        </div>
        <div className="marquee">
          <div className="marquee-content">
            <img src={require('../Images/logo1.png')} alt="Client Logo 1" className="client-logo" />
            <img src={require('../Images/Logo2.png')} alt="Client Logo 2" className="client-logo" />
            <img src={require('../Images/logo3.png')} alt="Client Logo 3" className="client-logo" />
            <img src={require('../Images/logo5.png')} alt="Client Logo 4" className="client-logo" />

            {/* Duplicating logos for continuous scrolling */}
            <img src={require('../Images/logo1.png')} alt="Client Logo 1" className="client-logo" />
            <img src={require('../Images/Logo2.png')} alt="Client Logo 2" className="client-logo" />
            <img src={require('../Images/logo3.png')} alt="Client Logo 3" className="client-logo" />
            <img src={require('../Images/logo5.png')} alt="Client Logo 4" className="client-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
