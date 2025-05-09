import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Components/subscribe-animation2.json'; // Replace with your downloaded Lottie animation file
import { FaTimes } from 'react-icons/fa'; // For the close button

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true); // Show the popup after a delay
        }, 1000); // 2 second delay
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Hide the popup
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsVisible(false); // Close popup if user clicks outside of the popup card
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    // Lottie animation settings
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        isVisible && (
            <div 
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
                onClick={handleOverlayClick} // Close popup when clicking outside the card
            >
                <div className="bg-white rounded-lg shadow-lg w-96 p-6 flex flex-col relative transition-transform transform duration-500 ease-in-out scale-100">
                    <button 
                        onClick={handleClose} 
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <FaTimes size={18} />
                    </button>

                    {isSubmitted ? (
                        <div className="text-center animate-bounce-in">
                            <Lottie options={defaultOptions} height={150} width={150} className="mx-auto mb-4" />
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Thank You!</h2>
                            <p className="mb-4">You have successfully subscribed to our newsletter.</p>
                            <button 
                                onClick={handleClose} 
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex items-center mb-4">
                                <Lottie options={defaultOptions} height={100} width={90} className="mx-auto" />
                            </div>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Subscribe to Our Newsletter</h2>
                            <p className="mb-4 text-gray-700">Enter your email to stay updated.</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Your Email Address"
                                className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                            />
                            <button 
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition-transform transform hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>
        )
    );
};

export default Popup;
