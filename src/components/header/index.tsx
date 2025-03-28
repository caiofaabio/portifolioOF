import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { LanguageSwitch } from "../languageSwitch";

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold font-mono"
        >
          &lt;Caio Fabio/&gt;
        </motion.h1>

        <div>
          <LanguageSwitch flag />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
