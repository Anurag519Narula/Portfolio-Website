import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPostgresql, SiTypescript, SiFastapi } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaJs, FaAws } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TECH = [
  // Languages
  { icon: <FaJs className="text-7xl text-yellow-400" />, duration: 2.5 },
  { icon: <SiTypescript className="text-7xl text-blue-600" />, duration: 2 },
  // Frontend
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 3.5 },
  { icon: <TiHtml5 className="text-7xl text-red-500" />, duration: 4 },
  { icon: <SiCsswizardry className="text-7xl text-sky-500" />, duration: 2.5 },
  // Backend
  { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 3 },
  { icon: <SiFastapi className="text-7xl text-teal-400" />, duration: 3.5 },
  // Databases
  { icon: <SiPostgresql className="text-7xl text-sky-400" />, duration: 4 },
  { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 2.5 },
  // Tools
  { icon: <FaGitAlt className="text-7xl text-orange-500" />, duration: 3 },
  { icon: <FaAws className="text-7xl text-yellow-500" />, duration: 3.5 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tools &amp; Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECH.map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants(item.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
