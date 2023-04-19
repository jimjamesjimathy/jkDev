import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { mobileNavContainer, navItem } from "@/utilities/motion";

const MotionLink = motion(Link);

const MobileNav = ({ menuOpen, setMenuOpen }) => {
  const [mode, setMode] = useThemeSwitcher();

  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
      <MotionLink
        href={href}
        variants={navItem}
        className={`${className} relative group`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {title}
        <motion.span
          className={`h-[2px] inline-block bg-fourthLight dark:bg-fifthLight absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </motion.span>
      </MotionLink>
    );
  };

  return (
    <motion.nav className="absolute top-0 left-0 right-0 z-50 items-center justify-center hidden min-h-screen md:flex min-w-screen">
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-white-200" />
      <motion.div
        variants={mobileNavContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-50 flex flex-col items-center justify-center py-24 sm:w-10/12 md:w-7/12 rounded-2xl shadow-about shadow-black-200 bg-sixth dark:bg-fourthLight gap-11"
      >
        <button
          className="absolute z-50 flex-col items-center justify-center hidden transition-all delay-200 top-10 right-10 md:flex"
          onClick={() => setMenuOpen(!menuOpen)}
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
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="absolute flex items-center justify-center rounded-full top-7 left-10"
        >
          {mode === "dark" ? (
            <MdOutlineWbSunny className="p-0 text-4xl transition-all duration-500 text-fifthLight hover:scale-150" />
          ) : (
            <MdOutlineDarkMode className="p-0 text-4xl text-gray-700 transition-all duration-500 hover:scale-150" />
          )}
        </button>
        <CustomLink
          href="/"
          title="Home"
          className="text-5xl font-light text-white"
        />
        <CustomLink
          href="/about"
          title="About"
          className="text-5xl font-light text-white"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="text-5xl font-light text-white"
        />
        <CustomLink
          href="/contact"
          title="Contact"
          className="text-5xl font-light text-white"
        />
        <motion.nav
          variants={navItem}
          className="flex items-center justify-center w-full gap-9"
        >
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="https://www.linkedin.com/in/jimjamesjimathy/"
            target={"_blank"}
          >
            <BsLinkedin className="text-3xl transition-all duration-200 text-primary hover:text-fourthLight dark:hover:text-fifthLight dark:text-tertiary" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="https://www.instagram.com/jim.james.jimathy/"
            target={"_blank"}
          >
            <BsInstagram className="text-3xl transition-all duration-200 text-primary hover:text-fourthLight dark:hover:text-fifthLight dark:text-tertiary" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            whileTap={{
              scale: 0.9,
            }}
            href="https://github.com/jimjamesjimathy"
            target={"_blank"}
          >
            <BsGithub className="text-3xl transition-all duration-200 text-primary hover:text-fourthLight dark:hover:text-fifthLight dark:text-tertiary" />
          </motion.a>
        </motion.nav>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNav;
