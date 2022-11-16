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
      className=" gap-16 py-10 md:flex md:justify-between md:items-center md:h-full"
    >
      {/* IMAGE SECTION  */}
      <div className="flex justify-center mt-16 md:order-2 basis-3/5 md:mt-32 z-10">
        {isAboveMediumScreens ? (
          <div
            className="relative ml-20 before:absolute before:-top-[3%] before:-left-[9%] before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-4 before:border-lightRed before:z-[-1]"
          >
            <img
              alt="profile"
              src={hero}
              className="hover:filter rounded-t-[400px] hover:grayscale transition duration-500 w-full max-w-[100px] md:max-w-[350px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={hero}
            className="hover:filter hover:grayscale transition duration-500 w-full max-w-[255px] md:max-w-[455px]"
          />
        )}
      </div>
      {/* MAIN SECTION  */}
      <div className="mt-12 md:mt-32 z-10">
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
          <p className="text-md md:text-lg text-center md:mb-[-15px] md:text-start md:w-[22em] mx-auto">
            <span className="font-bold text-lightGreen z-10">Howdy!</span> My name is
            </p>
          <p className="text-center text-4xl xs:text-5xl md:text-6xl text-red font-semibold">
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
          <p className="text-xl sm:text-2xl md:text-3xl text-center ">I am a 
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
          <p className="text-sm md:text-md font-medium tracking-wide text-center mb-7">
          I specialize in front-end development, and I love to create websites, applications, and games for a range of different customers.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center  mt-5"
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
            className="py-2 transition duration-500 px-7 hover:bg-lightBlue hover:text-black border-2 font-medium hover:px-[23px] hover:font-bold tracking-wide border-red"
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