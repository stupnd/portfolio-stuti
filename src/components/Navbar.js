import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white py-4 px-6 flex justify-center items-center z-50">
      <ul className="flex space-x-6 text-sm tracking-wide font-mono">
        <li>
          <a href="#home" className="hover">
            // home
          </a>
        </li>
        <li>
          <a href="#expertise" className="hover">
            // expertise
          </a>
        </li>
        <li>
          <a href="#work" className="hover">
            // work
          </a>
        </li>
        <li>
          <a href="#experience" className="hover">
            // experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover">
            // contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
