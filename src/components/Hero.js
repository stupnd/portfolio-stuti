import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center"
      id="hero"
    >
      <motion.h1
        className="text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Stuti Pandya
      </motion.h1>
      <motion.p
        className="text-xl font-light mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Computer Engineer, AI Enthusiast, Web Developer
      </motion.p>
      <motion.a
        href="#work"
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       <a
  href="#work"
  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 shadow-lg transition duration-300"
>
  Explore My Work
</a>

      </motion.a>
    </section>
  );
}

export default Hero;
