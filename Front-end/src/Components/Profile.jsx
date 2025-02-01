import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login after logout
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Back
      </button>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Profile</h2>
          <p className="text-sm text-blue-200 mt-1">Manage your account details</p>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {user ? (
            <div className="space-y-4">
              {/* User Avatar and Details */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* Logout Button */}
              <div className="mt-6">
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // If user is not logged in
            <div className="text-center">
              <p className="text-gray-600">You are not logged in.</p>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;