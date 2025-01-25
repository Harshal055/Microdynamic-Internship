import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/mainlogo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="Code Guru Logo" className="h-20 w-20 mr-2" />
          <div className="text-3xl font-bold">Code Guru</div>
        </div>

        {/* Menu */}
        <ul className="flex space-x-9">
          <li>
            <a href="#" className="hover:text-gray-400">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Problems
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contest
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <div className="flex gap-3">
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
