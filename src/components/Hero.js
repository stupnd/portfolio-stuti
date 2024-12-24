import React from "react";

function Hero() {
  return (
    <section
      className="h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center"
      id="hero"
    >
      <h1 className="text-6xl font-extrabold mb-4">Stuti Pandya</h1>
      <p className="text-xl font-light mb-6">
        Computer Engineer, AI Enthusiast, Web Developer
      </p>
      <a
        href="#work"
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        Explore My Work
      </a>
    </section>
  );
}

export default Hero;
