import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24 z-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-24 text-center md:text-start md:flex md:justify-between md:gap-16 z-10">
        <motion.div
          className="md:w-1/3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 text-5xl font-neucha tracking-wide">
            <span className="text-blue">About </span> Me
          </p>
          <LineGradient width="w-5/7 md:w-full" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            quaerat provident aliquam ipsam autem enim dolorem qui consectetur
            pariatur.
          </p>
        </motion.div>
        <div className="flex justify-center mt-16 md:mt-0 z-10">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-gold before:z-[-1]"
            >
              <img alt="about" className="z-10" src={about} />
            </div>
          ) : (
            <img alt="about" className="z-10 w-1/2" src={about} />
          )}
        </div>
      </div>

      <div className="gap-32 mt-16 md:flex md:justify-between">
        {/* SKILLS */}
        <motion.div
          className="mt-10 md:w-1/3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-3xl font-quicksand">1.</p>
              <p className="mt-6 tracking-widest text-4xl font-neucha">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-green" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-3xl font-quicksand">2.</p>
              <p className="mt-6 tracking-widest text-4xl font-neucha">Refrences</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-accentRed" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-3xl font-quicksand">3.</p>
              <p className="mt-6 tracking-widest text-4xl font-neucha">Innovative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-blue" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;