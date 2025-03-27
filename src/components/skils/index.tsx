import { motion } from "framer-motion";
import { SKILLS } from "../arrays";

interface SkillsProps {
  hoveredSkill: string | null;
  setHoveredSkill: (value: string | null) => void;
}

export default function Skills({ hoveredSkill, setHoveredSkill }: SkillsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 ">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, filter: "blur(0px)" }}
            animate={{
              opacity: 1,
              scale: hoveredSkill
                ? hoveredSkill === skill.id
                  ? 1.1
                  : 0.95
                : 1,
              filter:
                hoveredSkill && hoveredSkill !== skill.id
                  ? "blur(3px)"
                  : "blur(0px)",
            }}
            transition={{ delay: index * 0.01 }}
            className="flex flex-col items-center cursor-pointer gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-100"
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.icon}
              alt={
                typeof skill.name === "string"
                  ? skill.name
                  : "Subgraphs (The Graph)"
              }
              className="w-12 h-12"
            />
            <span className="font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
