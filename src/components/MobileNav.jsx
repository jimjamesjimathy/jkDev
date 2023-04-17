import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "./Icons";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const greeting = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
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

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      <motion.h1 variants={singleWord} className="text-white">
        {title}
      </motion.h1>
      <motion.span
        className={`h-[2px] inline-block bg-fifthLight absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </motion.span>
    </Link>
  );
};

const MobileNav = ({ menuOpen, setMenuOpen }) => {
  const [mode, setMode] = useThemeSwitcher();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute top-0 bottom-0 left-0 z-50 flex flex-col items-center justify-between w-screen h-screen font-medium ring-0 bg-white-200 md:justify-center dark:bg-tertiary">
      <motion.nav
        variants={greeting}
        initial="initial"
        animate="animate"
        exit={{ width: "0%", height: "0%", opacity: 0 }}
        className="relative flex flex-col items-center justify-center w-7/12 gap-10 bg-sixth h-2/3 rounded-2xl"
      >
        <button
          className="absolute left-0 right-0 flex-col items-center justify-center hidden md:flex top-10"
          onClick={handleMenu}
        >
          <span
            className={`bg-white block h-0.5 w-[2em] rounded-sm transition duration-500 ${
              menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block h-0.5 w-[2em] rounded-sm transition duration-500 my-0.5 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block h-0.5 w-[2em] rounded-sm transition duration-500 -translate-y-0.5 ${
              menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <CustomLink href="/" title="Home" className="text-5xl font-light" />
        <CustomLink
          href="/about"
          title="About"
          className="text-5xl font-light"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="text-5xl font-light"
        />
        <div className="flex items-center justify-center w-full gap-8">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="flex items-center justify-center ml-3 rounded-full"
          >
            {mode === "dark" ? (
              <MdOutlineWbSunny className="p-0 text-2xl text-fifthLight" />
            ) : (
              <MdOutlineDarkMode className="p-0 text-2xl text-gray-400" />
            )}
          </button>
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="/"
            target={"_blank"}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="/"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
        </div>
      </motion.nav>
    </header>
  );
};

export default MobileNav;
