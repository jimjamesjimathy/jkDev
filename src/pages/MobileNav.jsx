import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from 'react-icons/gr';


const menuVariants = {
    opened: {
      right: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      right: "100%",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      x: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            className="z-50 fixed top-0 right-0"
            initial={false}
            variants={menuVariants}
            animate={open ? "opened" : "closed"}
        >
            <motion.button className="text-white">
                { open ? <GiHamburgerMenu size={31} /> : <GrClose size={31} /> }
            </motion.button>
            <motion.ul
                initial={false}
                variants={menuVariants}
                animate={open ? "opened" : "closed"}
            >
                <motion.li variants={linkVariants}>Home</motion.li>
                <motion.li variants={linkVariants}>About</motion.li>
                <motion.li variants={linkVariants}>Portfolio</motion.li>
                <motion.li variants={linkVariants}>Contact</motion.li>
            </motion.ul>
        </motion.nav>
    );
};

export default MobileNav;