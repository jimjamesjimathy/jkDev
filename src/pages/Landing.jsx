import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import hero from "../assets/hero.webp";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="z-20 py-10 flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center h-screen"
    >
      <div className="z-20 landing" />
      {/* IMAGE SECTION  */}
      <div className="z-20 flex w-1/2 justify-center mx-auto mt-16 md:order-2 md:mt-32 ">
        {isAboveMediumScreens ? (
          <div
            className="z-20 relative ml-20 before:absolute before:-top-[3%] before:-left-[19%]
                before:w-full before:rounded-[200px] before:max-w-[400px] md:before:max-w-[600px] before:h-full before:bg-red before:bg-opacity-30 before:z-[-1]"
          >
            <img
              alt="profile"
              src={hero}
              className="z-20 rounded-t-[400px] w-full max-w-[200px] md:max-w-[350px] hover:filter hover:greyscale transition duration-500"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={hero}
            className="z-20 w-full max-w-[175px] rounded-full md:max-w-[455px] mt-[-75px] hover:filter hover:greyscale transition duration-500"
          />
        )}
      </div>
      {/* MAIN SECTION  */}
      <div className="z-20 flex md:w-1/2 flex-col items-center md:items-start mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          className="z-20 md:mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-20 text-sm text-center md:text-start mx-auto">
            <span className="z-20 font-bold text-lightGreen ">Howdy!</span> My
            name is
          </p>
          <p className="z-20 text-center text-4xl sm:text-5xl lg:text-6xl text-red font-meduim">
            James {""}
            <span className="z-20 text-accentText">Kirkwood</span>
          </p>
        </motion.div>

        <motion.div
          className="z-20 mb-4 w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-20 text-lg text-center md:text-start sm:text-xl">
            I am a
            <span className="z-20 text-lightGreen"> Full Stack Developer </span>
          </p>
        </motion.div>

        <motion.div
          className="z-20 flex justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-20 mx-auto xs:block mb-6 text-sm text-center md:mx-0 md:text-start font-medium tracking-wide w-2/3 md:w-[65%]">
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
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="z-20 py-2 text-xs xs:text-lg transition duration-500 px-7 border-2 font-medium tracking-wide border-red hover:border-lightBlue"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let's create something together!
          </AnchorLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
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
