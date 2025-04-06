import React from 'react';
import challengesData from './challenges.json'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const ChallengesSection = () => {
    const navigate = useNavigate(); // Correctly use the useNavigate hook

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">Current Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {challengesData.challenges.map((challenge) => (
                        <div key={challenge.id} className="text-white p-10 rounded-lg border h-full shadow-lg bg-gray-800">
                            <img
                                src={challenge.imageUrl}
                                alt={challenge.imageDescription}
                                className="w-full h-40 object-cover mb-6 rounded-lg border-2 h-auto border-gray-700"
                            />
                            <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                            <p className="text-gray-300 mb-4">{challenge.description}</p>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/Challange')} // Correctly use navigate
                            >
                                View All Challanges
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;