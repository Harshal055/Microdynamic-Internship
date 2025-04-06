import React from 'react';

const Contest = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-[19vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contest</h1>
        <p className="text-center text-lg mb-12">
          Participate in our exciting contests and showcase your skills! Check out the details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contest Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Code Challenge</h2>
            <p className="mb-4">
              Test your coding skills in our weekly code challenges. Solve problems and climb the leaderboard!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Join Now
            </button>
          </div>

          {/* Contest Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Hackathon</h2>
            <p className="mb-4">
              Collaborate with others and build innovative projects in our upcoming hackathon event.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Contest Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Design Contest</h2>
            <p className="mb-4">
              Showcase your creativity in our design contest. Submit your best designs and win exciting prizes!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Participate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;