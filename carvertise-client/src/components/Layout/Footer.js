import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-700 py-4 text-white text-center  absolute bottom-0 w-full">
      &copy; {new Date().getFullYear()} Carvertise. All rights reserved.
    </footer>
  );
}

export default Footer;
