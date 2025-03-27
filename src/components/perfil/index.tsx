import { motion } from "framer-motion";

export default function Perfil() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div className="md:w-1/2 md:text-left">
        <h2 className="text-4xl font-bold mb-6">Front-end Developer</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Hi, I'm Caio Fabio, a Front-end Developer specialized in transforming
          creative ideas into responsive and intuitive digital experiences. With
          a focus on modern technologies and best practices, my goal is to
          deliver solutions that delight users and exceed expectations.
        </p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/perfil.png"
          alt="Profile"
          className="absolute top-[20px] left-[7px] object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
