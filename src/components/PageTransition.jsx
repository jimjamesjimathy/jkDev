import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-fourthLight"
      />

      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.35, duration: 0.55, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
      />

      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.55, duration: 0.55, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-fifthLight"
      />
    </>
  );
};

export default PageTransition;
