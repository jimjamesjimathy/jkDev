import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import hero from "../assets/hero-cartoon.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="z-20 flex flex-col items-center justify-center h-screen py-10 md:flex-row md:justify-center md:items-center"
    >
      <div className="z-20 landing" />
      {/* IMAGE SECTION  */}
      <div className="z-20 flex justify-center w-1/2 mx-auto mt-16 md:order-2 md:mt-32 ">
        {isAboveMediumScreens ? (
          <div
            className="z-20 relative ml-20 before:absolute before:top-0 before:-left-[19%]
                before:w-full before:rounded-[200px] before:max-w-[400px] md:before:max-w-[600px] before:h-[90%] before:bg-lightRed before:bg-opacity-30 before:z-[-1]"
          >
            <img
              alt="profile"
              src={hero}
              className="z-20 rounded-t-[400px] w-full max-w-[200px] md:max-w-[350px] rounded-full"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={hero}
            className="z-20 w-full max-w-[175px] rounded-full md:max-w-[455px] mt-[-75px]"
          />
        )}
      </div>
      {/* MAIN SECTION  */}
      <div className="z-20 flex flex-col items-center mt-12 md:w-1/2 md:items-start md:mt-32">
        {/* HEADINGS */}
        <motion.div
          className="z-20 md:mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-20 mx-auto text-sm text-center md:text-start">
            <span className="z-20 font-bold text-lightGreen ">Howdy!</span> My
            name is
          </p>
          <p className="z-20 text-4xl text-center sm:text-5xl lg:text-6xl text-red font-meduim">
            James {""}
            <span className="z-20 text-accentText">Kirkwood</span>
          </p>
        </motion.div>

        <motion.div
          className="z-20 w-2/3 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-20 text-lg text-center md:text-start sm:text-xl">
            I am a
            <span className="z-20 md:text-lightGreen">
              {" "}
              Full Stack Developer{" "}
            </span>
          </p>
        </motion.div>

        <motion.div
          className="z-20 flex justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="hidden sm:block mx-auto xs:block mb-6 text-sm text-center md:mx-0 md:text-start font-medium tracking-wide w-2/3 md:w-[65%]">
            I specialize in front-end development, and I love to create
            websites, applications, and games for a range of different
            customers.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="z-20 sm:mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="z-20 py-2 text-xs font-medium tracking-wide transition duration-500 bg-opacity-50 border-2 xs:text-lg px-7 border-red hover:border-green hover:bg-green hover:bg-opacity-50 bg-red"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
