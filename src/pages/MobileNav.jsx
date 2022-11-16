import { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "./Navbar";
import { navigation } from "../data";

const MobileNav = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <nav className="relative flex items-center justify-center">
      <div
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        className="cursor-pointer text-accentGreen rounded-full"
      >
        <BiMenuAltRight className="w-10 h-10" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isMenuToggled ? "visible" : "hidden"}
        className="fixed top-0 right-0 w-4 h-4 bg-accentText"
      />

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isMenuToggled ? "visible" : ""}
        className={`${
          isMenuToggled ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 flex flex-col w-full justify-evenly items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="absolute cursor-pointer top-8 right-8"
        >
          <TfiClose className="w-8 h-8 text-darkest" />
        </div>
        <div className="flex flex-col items-center w-1/3 h-3/5 justify-evenly">
          {navigation.map((item) => (
                <li className="text-4xl text-darkest" key={item.id}>
              <Link
                page={item.name}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
          ))}
        </div>
      </motion.ul>
    </nav>
  );
};

export default MobileNav;