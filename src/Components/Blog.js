import React, { useState } from "react";
import "../Styles/style.css";
import RiseAI from '../Images/riseofai.jpg';
import RiseAI1 from '../Images/riseofai1.jpg';
import RiseAI2 from '../Images/riseofai2.jpg';
import RiseAI3 from '../Images/riseofai3.jpg';


const blogData = [
  {
    title: "The Rise of Artificial Intelligence: Transforming the Future",
    image: RiseAI,
    date: "June 10, 2024",
    description: "Artificial Intelligence (AI) is transforming the world by enabling machines to think and learn like humans. From voice assistants to self-driving cars, AI is making daily tasks smarter and more efficient. It’s being used in healthcare, finance, and even education to solve complex problems faster than ever. As AI grows, it’s important to use it responsibly to benefit society and protect our future.",
    link: "#"
  },
  {
    title: "Webiste",
    image: "https://denizhalil.com/wp-content/uploads/2024/06/what-is-linux-by-denizhalil-1024x580.png",
    date: "June 11, 2024",
    description: "Nullam vehicula turpis in tellus lacinia euismod. Proin tristique arcu vel ullamcorper fermentum.",
    link: "#"
  },
  {
    title: "Blog Post 3",
    image: "https://denizhalil.com/wp-content/uploads/2024/05/Anomaly-Detection-in-Cybersecurity-Using-Machine-Learning-1024x580.png",
    date: "June 12, 2024",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    link: "#"
  },
  {
    title: "Blog Post 4",
    image: "https://denizhalil.com/wp-content/uploads/2024/05/Creating-Ransomware-with-Python-part-1-by-denizhalil-1024x597.png",
    date: "June 13, 2024",
    description: "Etiam nec justo euismod, maximus dui in, posuere nunc. Phasellus mollis felis sed felis ullamcorper.",
    link: "#"
  },
  {
    title: "Blog Post 5",
    image: "https://denizhalil.com/wp-content/uploads/2024/05/End-to-End-Encryption-Implementation-and-Practical-Code-1024x580.png",
    date: "June 14, 2024",
    description: "Curabitur dignissim quam a felis rhoncus, non sagittis nunc ultricies. Sed vel massa semper, egestas.",
    link: "#"
  },
  {
    title: "Blog Post 6",
    image: "https://denizhalil.com/wp-content/uploads/2024/05/recommendations-for-learning-cryptography-1024x580.png",
    date: "June 15, 2024",
    description: "Donec mattis libero sit amet dui vehicula, vel suscipit nulla aliquam. Fusce in ex nec est dapibus.",
    link: "#"
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="pt-20 px-4 mt-10">
      <h1 className="text-3xl font-bold text-center tracking-tighter mb-10 sm:text-4xl">
        <span className="text-blue-500">Stay Up-To-Date</span> With Our Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-10">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="glass-effect bg-white bg-opacity-10 backdrop-blur-lg text-white rounded-xl shadow-xl p-4 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => openModal(post)}
          >
            <div className="relative ">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded ">
                {post.date}
              </div>
            </div>
            <div className="mt-3">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <a
                href={post.link}
                className="text-blue-400 hover:text-blue-600 text-sm font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 overflow-auto p-4 ">
          <div className="bg-blue-900 rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto relative p-8 glass-effect">
            {/* Close Button Top Right */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl z-10"
            >
              ✖
            </button>

            {/* Main Image */}
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
            />

            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{selectedPost.date}</p>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed mb-6">{selectedPost.description}</p>

              {/* Additional Blog Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <img
                  src= {RiseAI1}
                  alt="Related Image 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src={RiseAI2}
                  alt="Related Image 2"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src={RiseAI3}
                  alt="Related Image 3"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Additional Heading and Description */}
              <h3 className="text-2xl font-semibold text-white mb-4">More on This Topic</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                The evolution of AI is just the beginning. In the coming years, we expect AI to be integrated into more aspects of daily life, from transportation to healthcare, and even personalized education. It’s crucial for industries to adapt and learn how to leverage AI in ethical and responsible ways to ensure a positive impact on society.
              </p>

              {/* Button to Close */}
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
