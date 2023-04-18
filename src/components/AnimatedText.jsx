import { motion } from "framer-motion";
import { greeting, singleWord } from "@/utilities/motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <>
      <motion.h1
        variants={greeting}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className={`flex items-center justify-start w-full gap-3 leading-[10vh] text-black-200 dark:text-white ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span variants={singleWord} key={word + "-" + index}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </>
  );
};

export default AnimatedText;
