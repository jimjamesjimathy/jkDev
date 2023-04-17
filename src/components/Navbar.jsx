import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../public/assets/profile/logo.png";

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
            ? "opacity-0"
            : "hidden md:flex flex-col justify-center items-center"
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
      <nav className="flex-1 md:hidden block">
        <CustomLink
          href="/"
          title="Home"
          className="text-black-200 dark:text-white mr-4"
        />
        <CustomLink
          href="/about"
          title="About"
          className="text-black-200 dark:text-white mx-4"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="text-black-200 dark:text-white mx-4"
        />
        <CustomLink
          href="/contact"
          title="Contact"
          className="text-black-200 dark:text-white mx-4"
        />
      </nav>
      <nav className="md:hidden flex items-center justify-center">
        <Link
          href="/"
          className="bg-tertiary dark:bg-transparent transition-all duration-300 rounded-full w-auto flex items-center justify-center h-auto px-1 my-2"
        >
          <Image
            src={logo}
            alt="logo"
            className="object-cover h-[5vh] w-auto"
          />
        </Link>
      </nav>
      <nav className="flex-1 md:hidden flex items-center justify-end gap-8">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full"
        >
          {mode === "dark" ? (
            <MdOutlineWbSunny className="text-2xl p-0 text-fifthLight hover:scale-150 transition-all duration-500" />
          ) : (
            <MdOutlineDarkMode className="text-2xl p-0 text-gray-700 hover:scale-150 transition-all duration-500" />
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
          <BsLinkedin className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{
            scale: 0.9,
          }}
          href="/"
          target={"_blank"}
        >
          <BsInstagram className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{
            scale: 0.9,
          }}
          href="/"
          target={"_blank"}
        >
          <BsGithub className="text-2xl text-secondary dark:text-sixthLight" />
        </motion.a>
      </nav>
      {/* {menuOpen ? (
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )} */}
    </header>
  );
};

export default Navbar;
