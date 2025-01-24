import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Code guru</div>

        {/* Menu */}
        <ul className="flex space-x-9 ">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            
          </li>
          
        </ul>
        <div className='pr-9 hover:red'><button type="button" >Login</button></div>
        
      </div>
    </nav>
  );
}

export default Navbar;
