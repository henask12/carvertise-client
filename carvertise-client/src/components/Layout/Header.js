import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 py-4 px-6 flex justify-between items-center">
      {/* Left Side: Carvertise Logo */}
      <div className="text-white text-lg font-semibold">
        <span className="text-yellow-500">Carvertise</span> Logo
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="space-x-4">
        <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
          Brands & Agencies
        </a>
        <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
          Drivers
        </a>
      </nav>
    </header>
  );
}

export default Header;
