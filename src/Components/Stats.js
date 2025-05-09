import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import '../Styles/style.css';

const statsData = [
  {
    icon: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 18c0-3.33 3.67-6 6-6s6 2.67 6 6" />
    ),
    count: 100,
    label: "Active Clients",
  },
  {
    icon: (
      <path d="M3 18h18M3 12h18M3 6h18M7 12l-4-4m0 8l4-4" />
    ),
    count: 800,
    label: "Projects Delivered",
  },
  {
    icon: (
      <path d="M12 15.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zM9 8h6M9 12h6M21 12a9 9 0 10-18 0 9 9 0 0018 0z" />
    ),
    count: 90,
    label: "Happy Clients",
  },
  {
    icon: (
      <path d="M4 4h16v16H4V4zM8 4v16M16 4v16M4 8h16M4 12h16M4 16h16" />
    ),
    count: 4,
    label: "Years of Experience",
  },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="text-gray-100 body-font mt-24" ref={ref}>
      <div className="container px-8 mx-auto">
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500 ease-in-out relative group">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md group-hover:rotate-12 transition-all duration-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-white w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h2 className="title-font font-bold text-4xl mt-8 text-white">
                  {inView && <CountUp end={item.count} duration={2} />}
                </h2>
                <p className="mt-2 text-white text-opacity-80 text-lg">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
