import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-4xl font-bold text-gray-900 dark:text-white"
      >
        <span className="font-mono">&lt;CF/&gt;</span>
      </motion.div>
    </div>
  );
}
