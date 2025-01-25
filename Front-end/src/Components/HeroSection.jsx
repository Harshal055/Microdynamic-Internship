import React from 'react';

const HeroSection = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Welcome to Code guru
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Join the world's largest competitive programming community.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Get Started
      </button>
    </div>
  </section>
);

export default HeroSection; 