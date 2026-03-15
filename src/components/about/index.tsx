import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ABout() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">{t("about")}</h3>
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <p className="text-lg leading-relaxed font-[cursive] text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {t("aboutContent")}
        </p>
      </div>
    </motion.section>
  );
}
