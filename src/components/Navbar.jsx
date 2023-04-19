import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import logoLight from "../../public/assets/profile/heroLogo.png";
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
    <header className="w-full px-12 h-[9vh] font-medium flex items-center md:justify-center justify-between">
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
      <nav className="flex items-start flex-1 md:hidden">
        <Link href="/" className="h-[9vh] w-1/3 flex items-center">
          <Image src={logoLight} className="w-auto h-4/6" alt="company logo" />
        </Link>
      </nav>
      <nav className="flex items-center justify-end flex-1 gap-7 md:hidden h-[9vh]">
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <MdOutlineWbSunny className="text-2xl transition-all duration-500 text-fifthLight hover:scale-150" />
          ) : (
            <MdOutlineDarkMode className="text-2xl text-gray-700 transition-all duration-500 hover:scale-150" />
          )}
        </button>
        <CustomLink
          href="/"
          title="Home"
          className="text-black-200 dark:text-white"
        />
        <CustomLink
          href="/about"
          title="About"
          className=" text-black-200 dark:text-white"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className=" text-black-200 dark:text-white"
        />
        <CustomLink
          href="/contact"
          title="Contact"
          className=" text-black-200 dark:text-white"
        />
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
