import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import hero from '../assets/hero.webp';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className=" gap-12 py-10 md:flex md:justify-between md:items-center h-screen"
    >
      {/* IMAGE SECTION  */}
      <div className="flex justify-center flex-1 md:justify-start mt-16 md:order-2 md:mt-32 z-10">
        {isAboveMediumScreens ? (
          <div
            className="relative ml-20 before:absolute before:-top-[3%] before:-left-[9%] before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-4 before:border-lightRed before:z-[-1]"
          >
            <img
              alt="profile"
              src={hero}
              className="rounded-t-[400px] w-full max-w-[200px] md:max-w-[350px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={hero}
            className=" w-full max-w-[175px] rounded-full md:max-w-[455px]"
          />
        )}
      </div>
      {/* MAIN SECTION  */}
      <div className="flex-1 mt-12 md:mt-32 z-10">
        {/* HEADINGS */}
        <motion.div
          className="md:mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-md text-center md:mb-[-10px] md:text-start md:w-[20em] mx-auto">
            <span className="font-bold text-lightGreen z-10">Howdy!</span> My name is
            </p>
          <p className="text-center text-4xl xs:text-5xl md:text-5xl text-red font-semibold">
            James {""}
            <span className="xs:relative font-normal text-[#F5F5F5]">
              Kirkwood
            </span>
          </p>
        </motion.div>

        <motion.div
        className="mb-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-xl sm:text-2xl text-center ">I am a 
          <span className="text-lightGreen font-bold"> Full Stack Developer </span>
          </p>
        </motion.div>

        <motion.div
        className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="hidden xs:block text-sm md:text-md font-medium tracking-wide text-center mb-7">
          I specialize in front-end development, and I love to create websites, applications, and games for a range of different customers.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center sm:mt-5"
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
            className="py-2 text-xs xs:text-lg transition duration-500 px-7 border-2 font-medium tracking-wide border-red hover:border-lightBlue"
            onClick={() => setSelectedPage("contact")}
            href="contact"
          >
            Let's create something together!
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex justify-center"
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