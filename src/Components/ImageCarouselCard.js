import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageCarouselCard = ({ cardsData, sectionTitle = "Our Services" }) => {
  const scrollRef = React.useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full opacity-75 max-w-7xl mx-auto px-4 py-12 select-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">{sectionTitle}</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-500 hover:bg-gray-400 text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-500 hover:bg-gray-400 text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth cursor-grab"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02] group"
            style={{ width: "380px", height: "550px" }}
          >
            <div className="relative h-full flex flex-col justify-end p-6">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"></div>

              <div className="relative z-10 p-4 rounded-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-200">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselCard;
