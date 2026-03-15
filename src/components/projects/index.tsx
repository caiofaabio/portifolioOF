import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../arrays";
import { useTranslation } from "react-i18next";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const { t } = useTranslation();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const images = "images" in project && project.images?.length ? project.images : [project.image];
  const isCarousel = images.length > 1;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg h-full">
        <div className="relative h-48 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={carouselIndex}
              src={images[carouselIndex]}
              alt={`${t(project.title)} - ${carouselIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
          {isCarousel && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCarouselIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === carouselIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col p-6">
          <h4 className="text-xl font-semibold mb-2">{t(project.title)}</h4>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            {t(project.description)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="mb-16">
      <h3 className="text-3xl font-bold mb-8 text-center">
        {t("featuredProjects")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
