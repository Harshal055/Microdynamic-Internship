import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center text-gray-800">Profile</h2>

        {user ? (
          <div className="mt-4 text-center">
            <p className="text-gray-700 font-medium">Name: {user.name}</p>
            <p className="text-gray-700">Email: {user.email}</p>

            <button
              onClick={handleLogout}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-gray-600">You are not logged in.</p>
            <button
              onClick={() => navigate("/login")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;