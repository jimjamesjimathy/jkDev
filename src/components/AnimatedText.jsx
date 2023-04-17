import { motion } from "framer-motion";

const greeting = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.6,
      staggerChildren: 0.175,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 1,
    },
  },
};

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
