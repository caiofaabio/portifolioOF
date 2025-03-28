import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { EMAIL, GITHUB, INSTAGRAM, LINKEDIN, PHONE } from "../constants";
import { useTranslation } from "react-i18next";

interface ContactProps {
  copiedEmail: boolean;
  copiedPhone: boolean;
  handleCopy: (text: string, type: "email" | "phone") => void;
}

export default function Contact({
  copiedEmail,
  copiedPhone,
  handleCopy,
}: ContactProps) {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-6">{t("letsConnect")}</h3>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
        {t("letsConnectDescription")}
      </p>
      <div className="flex flex-col gap-6 max-w-lg mx-auto mb-8">
        <button
          onClick={() => handleCopy(EMAIL, "email")}
          className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Mail size={24} />
            <span>{EMAIL}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {copiedEmail ? `${t("copied")}` : `${t("clipCopy")}`}
          </span>
        </button>
        <button
          onClick={() => handleCopy(PHONE, "phone")}
          className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Phone size={24} />
            <span>{PHONE}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {copiedPhone ? `${t("copied")}` : `${t("clipCopy")}`}
          </span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Github size={24} />
          <span>GitHub</span>
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Instagram size={24} />
          <span>Instagram</span>
        </a>
      </div>
    </motion.section>
  );
}
