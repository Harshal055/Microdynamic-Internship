import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Check if user is logged in on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsLoggedIn(true);
      setUserName(userData.name);
    }
  }, []);

  // Handle page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setIsLoggedIn(false); // Update login state
    setUserName(""); // Clear username
    navigate("/login"); // Redirect to login page
  };

  // Handle navigation
  const handleNavigation = (path) => {
    if (isLoggedIn && path === "/LanguagePage") {
      navigate(path);
    } else if (!isLoggedIn && path === "/LanguagePage") {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  // Navbar style based on scroll position
  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollPosition / 500, 0.8)})`,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50" style={navbarStyle}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/src/assets/logo.png"
              alt="Code Guru Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-white drop-shadow-lg">
              Code Guru
            </span>
          </div>
<div>
  
</div>
          {/* Navigation Links */}
          <ul className="flex space-x-9">
            {["/Explore", "/Challange", "/contest", "/contact", "/LanguagePage"].map((path, index) => (
              <li key={index}>
                <a 
                  href='/' // Prevent default behavior
                  onClick={(e) => {
                    e.preventDefault(); // Preve nt page reload
                    handleNavigation(path);
                  }}
                  className="text-white hover:text-gray-300 drop-shadow-lg transition-colors cursor-pointer"
                >
                  {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Profile Section */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span
                  onClick={() => navigate("/profile")} // Navigate to profile on click
                  className="text-white hover:text-gray-300 drop-shadow-lg transition-colors cursor-pointer"
                >
                  {userName}
                </span>
                <button
                  onClick={handleLogout} // Call handleLogout on click
                  className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;