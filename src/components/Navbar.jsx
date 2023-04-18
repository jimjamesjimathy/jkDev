import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/profile/logo.png";
import MobileNav from "./MobileNav";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full px-32 h-[9vh] font-medium flex items-center md:justify-center justify-between">
      <button
        className={`${
          menuOpen
            ? "opacity-0 "
            : "hidden md:flex flex-col justify-center items-center transition-all delay-200"
        }`}
        onClick={handleMenu}
      >
        <span
          className={`bg-tertiary dark:bg-white block h-0.5 w-6 rounded-sm transition duration-500 ${
            menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-tertiary dark:bg-white block h-0.5 w-6 rounded-sm transition duration-500 my-0.5 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-tertiary dark:bg-white block h-0.5 w-6 rounded-sm transition duration-500 -translate-y-0.5 ${
            menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <nav className="flex-1 block md:hidden">
        <CustomLink
          href="/"
          title="Home"
          className="mr-4 text-black-200 dark:text-white"
        />
        <CustomLink
          href="/about"
          title="About"
          className="mx-4 text-black-200 dark:text-white"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4 text-black-200 dark:text-white"
        />
        <CustomLink
          href="/contact"
          title="Contact"
          className="mx-4 text-black-200 dark:text-white"
        />
      </nav>
      <nav className="flex items-center justify-center md:hidden">
        <Link
          href="/"
          className="flex items-center justify-center w-auto h-auto px-1 my-2 transition-all duration-300 rounded-full bg-tertiary dark:bg-transparent"
        >
          <Image
            src={logo}
            alt="logo"
            className="object-cover h-[5vh] w-auto"
          />
        </Link>
      </nav>
      <nav className="flex items-center justify-end flex-1 gap-8 md:hidden">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="flex items-center justify-center ml-3 rounded-full"
        >
          {mode === "dark" ? (
            <MdOutlineWbSunny className="p-0 text-2xl transition-all duration-500 text-fifthLight hover:scale-150" />
          ) : (
            <MdOutlineDarkMode className="p-0 text-2xl text-gray-700 transition-all duration-500 hover:scale-150" />
          )}
        </button>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{
            scale: 0.9,
          }}
          href="https://www.linkedin.com/in/jimjamesjimathy/"
          target={"_blank"}
        >
          <BsLinkedin className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{
            scale: 0.9,
          }}
          href="https://www.instagram.com/jim.james.jimathy/"
          target={"_blank"}
        >
          <BsInstagram className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{
            scale: 0.9,
          }}
          href="https://github.com/jimjamesjimathy"
          target={"_blank"}
        >
          <BsGithub className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
      </nav>

      {/* MOBILE NAVBAR */}
      <AnimatePresence>
        {menuOpen && (
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
