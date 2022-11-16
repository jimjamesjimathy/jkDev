import { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { BiMenuAltleft } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "./Navbar";
import { navigation } from "../data";
import { useDimensions } from "./useDimensions";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <motion.ul className="absolute top-16 h-2/3 w-full z-50 flex flex-col items-center justify-evenly" variants={navVariants}>
    {navigation.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const Path = props => (
  <motion.path
    strokeWidth="3"
    stroke="#B5432C"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-full transparent z-50">
    <svg width="23" height="23" viewBox="0 0 22.5 21">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    }
  }
};


export const MenuItem = ({ selectedPage, setSelectedPage, i }) => {

  return (
    <motion.li
      className="mb-[20px] flex items-center z-50 text-4xl"
      variants={liVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        page={i.name}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </motion.li>
  );
};


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 30px 29px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 1000,
      damping: 40
    }
  }
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="absolute top-0 left-0 bottom-0 z-50">
      <motion.nav
        className="w-[375px] z-50"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="absolute top-0 left-0 bottom-0 w-[375px] bg-lightGreen z-50" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </nav>
  );

};

export default MobileNav;