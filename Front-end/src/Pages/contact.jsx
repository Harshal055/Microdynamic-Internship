import React from 'react';

const Contact = () => (
  <div className="bg-gradient-to-b from-gray-900 to-black text-white py-[19vh]">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have questions or need assistance? Feel free to reach out to us. We're here to help!
          </p>
          <p>
            Email: <a href="mailto:support@codeguru.com" className="hover:text-blue-400 transition-colors duration-300">
              support@codeguru.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors duration-300">
            
            </a>
          </p>
        </div>

        <div className="md:w-1/2">
          <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;