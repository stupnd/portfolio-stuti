import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center z-50">
      <div className="text-lg font-bold">Stuti Pandya</div>
      <ul className="flex space-x-8">
  <li>
    <a href="#about" className="hover:text-blue-400 transition duration-300">
      About
    </a>
  </li>
  <li>
    <a href="#work" className="hover:text-blue-400 transition duration-300">
      Work
    </a>
  </li>
  <li>
    <a href="#contact" className="hover:text-blue-400 transition duration-300">
      Contact
    </a>
  </li>
  <li>
    <a
      href="#resume"
      className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Resume
    </a>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
