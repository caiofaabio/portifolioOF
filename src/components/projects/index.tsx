import { motion } from "framer-motion";
import { PROJECTS } from "../arrays";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="mb-16">
      <h3 className="text-3xl font-bold mb-8 text-center">
        {t("featuredProjects")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg h-full ">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    {t("visitProjects")}
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h4 className="text-xl font-semibold mb-2">
                  {t(project.title)}
                </h4>
                <p className="text-gray-600 mb-2 dark:text-gray-400">
                  {t(project.description)}
                </p>
                <p className="text-sm mt-auto font-medium text-gray-500 dark:text-gray-500">
                  {project.tech}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
