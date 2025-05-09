import React from "react";

const LayoutGridDemo = () => {
  return (
    <div className="min-h-[80px] py-20 mt-15 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
};

export default LayoutGridDemo;

// Text Content Components
const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Website Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We build modern, responsive websites tailored to elevate your brand and deliver seamless user experiences.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">App Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We build fast, cross-platform apps using React Native for seamless performance and great user experiences.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Software Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We craft custom software solutions to streamline your processes and drive business growth.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Generative AI</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.
    </p>
  </div>
);


const SkeletonFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Machine Learning</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.
    </p>
  </div>
);

const SkeletonSix = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Computer Vision</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.
    </p>
  </div>
);

const SkeletonSeven = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">ChatGPT Integration</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.
    </p>
  </div>
);

const SkeletonEight = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">UX UI Designing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    We develop generative AI solutions that automate creativity and transform ideas into intelligent outputs.
    </p>
  </div>
);



// Cards Array
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: require("../Images/web-development.webp"),
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: require("../Images/application1.jpg"),
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: require("../Images/software-development2.jpg"),
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: require("../Images/Generative-AI.jpg"),
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: require("../Images/Machine-Learning1.jpg"),
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: require("../Images/ComputerVision1.jpg"),
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: require("../Images/chatgpt3.webp"),
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-2",
    thumbnail: require("../Images/uxui.jpg"),
  },
];

// LayoutGrid Component with Hover Effect
export const LayoutGrid = ({ cards }) => {
  return (
    <div className="w-full h-full opacity-90  p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className={`${card.className} group relative overflow-hidden rounded-lg`}>
          <img
            src={card.thumbnail}
            alt="thumbnail"
            className="w-full h-[250px] object-cover object-top"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white z-10">{card.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
