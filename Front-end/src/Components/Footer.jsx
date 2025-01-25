import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2025 Code guru. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="simple-icons:linkedin"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="bi bi-instagram"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="line-md:discord"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="bi bi-youtube"></i></a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">
            Contact us: <a href="mailto:support@codeguru.com" className="hover:text-gray-400">support@codeguru.com</a>
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm font-bold">Resources</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm font-bold">Customer Support</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Help Center</a>
            <a href="#" className="hover:text-gray-400">Contact Support</a>
            <a href="#" className="hover:text-gray-400">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;