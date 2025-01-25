import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Code guru</div>  

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
        <div className="pr-9 gap-3 flex">
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