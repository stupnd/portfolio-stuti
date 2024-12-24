import React from "react";

function Hero() {
  return (
    <section
      className="h-screen bg-gradient-to-b from-gray-900 to-blue text-white flex flex-col justify-center items-center text-center relative"
      id="hero"
    >
      {/* Add a background sphere */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-600 blur-xl rounded-full opacity-40"></div>
      </div>

      <h1
  className="text-8xl font-extrabold relative z-10 font-mono"

>
  Stuti Pandya
</h1>
      <p className="text-xl font-light mt-4 relative z-10 font-mono">
        Computer Engineer, AI Enthusiast, Web Developer
          </p>
          

    </section>
  );
}

export default Hero;
