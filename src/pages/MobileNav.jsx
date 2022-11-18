import { motion } from "framer-motion";
import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import Link from "./Navbar";

const MobileNav = ({ selectedPage, setSelectedPage }) => {
  const [open, setOpen] = useState(false);

  const navVariants = {
    open: {
      opacity: 1, 
      x: 0, 
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0, 
      x: "-100%", 
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.nav 
      animate={open ? "open" : "closed"}
      variants={navVariants}
    >
      <motion.button
        onClick={() => setOpen(!open)}
      >
        { open ? <CgClose size={35} /> : <CgMenuRight size={35} />}
      </motion.button>
      <motion.ul>
        { navigation.map(link => (
          <motion.li key={link.id}>
            <Link 
              page={link.name}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
    );
};

export default MobileNav;
