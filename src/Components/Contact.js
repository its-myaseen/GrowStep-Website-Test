import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationData from '../Images/Contact.json';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:8000/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full overflow-hidden">
        <div className="w-full md:w-3/5 p-6">
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-400 mt-[10px]">Contact Us</h2>
          <p className="text-center text-gray-300 mb-8">
            We’d love to hear from you. Fill out the form below and we’ll get in touch shortly.
          </p>

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl bg-white/10 border border-blue-400 text-white"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-white/10 border border-blue-400 text-white"
              required
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="p-4 rounded-xl bg-white/10 border border-blue-400 text-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-white/10 border border-blue-400 text-white"
              required
            ></textarea>

            <div className="flex justify-center ">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold shadow-lg transition text-white ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center p-4">
          <Lottie animationData={animationData} loop autoplay className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
