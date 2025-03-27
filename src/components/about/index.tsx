import { motion } from "framer-motion";

export default function ABout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <p className="text-lg leading-relaxed font-[cursive] text-gray-700 dark:text-gray-300">
          Hi, I'm Caio Fabio, I'm 29 years old and I'm finishing the Systems
          Analysis and Development course at Descomplica College. I'm passionate
          about cryptocurrencies and Web3 technology, and my main projects
          involve integrating the front-end with the blockchain, creating
          innovative and decentralized experiences. I've been working as a
          Front-end Developer for a little over 3 years, always looking for
          functional and engaging interfaces. I was born in Belo Horizonte (MG)
          and currently live in Davenport, Florida. I've been married to
          Isabella for 4 years, and in addition to all these passions, I'm a
          Christian, which guides my personal and professional values. In my
          free time, I like to play games, play the drums and explore new
          technological trends. My biggest dream is to achieve financial and
          geographic freedom to travel the world, expanding my horizons.
        </p>
      </div>
    </motion.section>
  );
}
