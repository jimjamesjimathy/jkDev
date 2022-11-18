import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import { useState } from "react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [school, setSchool] = useState(false);
  const [work, setWork] = useState(false);
  const [life, setLife] = useState(false);





  return (
    <section id="about" className="z-10 pt-10 pb-24">
      <div className="z-10 mt-24 text-center md:text-start md:items-center md:flex md:justify-between md:gap-16">
        <motion.div
          className="z-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 tracking-wide text-7xl ">
            <span className="text-blue">About </span> Me
          </p>
          <LineGradient width="w-5/7 md:w-full" />
          <p className="mt-10 mb-7">
            I am a self-motivated and highly reliable full-stack developer
            positioned to contribute strongly to web developer operations
            demanding tact, enthusiasm, and an exemplary work ethic.
          </p>
        </motion.div>
        <div className="z-10 flex justify-center mt-16 md:mt-0">
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

      <div className="gap-8 md:flex md:justify-between">
        <motion.div
          className="z-10 flex-1 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mt-8">
            <div className="z-10">
              <p className="text-3xl font-quicksand">1.</p>
              <p className="mt-6 text-2xl tracking-widest lg:text-3xl ">
                School Experience
              </p>
            </div>
            <div className="w-5/6 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-red" />
          </div>

          {/* SCHOOL EXPERIENCE  */}

          <motion.div
            initial={false}
            animate={school ? "open" : "closed"}
            className="flex flex-col items-center justify-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              onClick={() => setSchool(!school)}
              className="px-4 py-1 mb-2 border-2 border-red"
            >
              { school ? "Close" : "Read More"}
            </motion.button>
            <motion.div
              variants={{
                open: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    delayChildren: 0.2,
                    staggerChildren: 0.2,
                  },
                },
                closed: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    staggerChildren: 0.2,
                  },
                },
              }}
              style={{ pointerEvents: school ? "auto" : "none" }}
            >
              <motion.p
                variants={itemVariants}
                className="mt-5 mb-4 text-center"
              >
                <span className="font-bold">Bloom Institute of Technology</span>{" "}
                <span className="italic font-semibold">FKA Lambda School</span>,
                Full-Time Program, Full Stack Development
              </motion.p>
              <motion.p variants={itemVariants} className="font-bold text-md">
                Frontend: {""}
                <span className="text-sm font-normal">
                  React.js, Redux, Hooks, Context API, Vercel, Jest, Cypress,
                  Yum, Axios, JavaScript, HTML, CSS, Sass, Material-UI, Tailwind
                </span>
              </motion.p>
              <motion.p variants={itemVariants} className="font-bold text-md">
                Backend: {""}
                <span className="text-sm font-normal">
                  Node.js, Express, SQL, PostgreSQL, Docker, Git CLI, GitHub, VS
                  Code, Heroku, MongoDB
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* WORK EXPERIENCE  */}

        <motion.div
          className="z-10 flex-1 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mt-8">
            <div className="z-10">
              <p className="text-3xl font-quicksand">2.</p>
              <p className="mt-6 text-2xl tracking-widest lg:text-3xl ">
                Work Experience
              </p>
            </div>
            <div className="w-5/6 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-brown" />
          </div>

          <motion.div
            initial={false}
            animate={work ? "open" : "closed"}
            className="flex flex-col items-center justify-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              onClick={() => setWork(!work)}
              className="px-4 py-1 mb-2 border-2 border-brown"
            >
              { work ? "Close" : "Read More"}
            </motion.button>
            <motion.ul
              variants={{
                open: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    delayChildren: 0.2,
                    staggerChildren: 0.2,
                  },
                },
                closed: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    staggerChildren: 0.2,
                  },
                },
              }}
              style={{ pointerEvents: work ? "auto" : "none" }}
              className="flex flex-col items-center justify-center list-disc"
            >
              <motion.p
                variants={itemVariants}
                className="my-2 font-bold text-center "
              >
                Coderheros, Team Project Manager
              </motion.p>
              <motion.li variants={itemVariants} className="text-sm">
                Collaborated with a remote cross-functional 26-person team to
                onboard and ship features in under one month
              </motion.li>
              <motion.li variants={itemVariants} className="text-sm">
                Conducted code reviews, approved Pull Requests, and led team
                meetings to ensure tasks were completed
              </motion.li>
              <motion.li variants={itemVariants} className="text-sm">
                Pitched design ideas made with Figma to the stakeholders weekly,
                and also showcased newly implemented features
              </motion.li>
              <motion.li variants={itemVariants} className="text-sm">
                Utilized Ant-Design and Less to style landing pages and
                implemented media queries to ensure the site was responsive
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* LIFE EXPERIENCE  */}

        <motion.div
          className="z-10 flex-1 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mt-8">
            <div className="z-10">
              <p className="text-3xl">3.</p>
              <p className="mt-6 tracking-widest sm:text-2xl lg:text-3xl">Life Experience</p>
            </div>
            <div className="w-5/6 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-blue" />
          </div>

          <motion.div
            initial={false}
            animate={life ? "open" : "closed"}
            className="flex flex-col items-center justify-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              onClick={() => setLife(!life)}
              className="px-4 py-1 mb-2 border-2 border-blue"
            >
              {life ? "Close" : "Read More"}
            </motion.button>
            <motion.div
              variants={{
                open: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    delayChildren: 0.2,
                    staggerChildren: 0.2,
                  },
                },
                closed: {
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    staggerChildren: 0.2,
                  },
                },
              }}
              style={{ pointerEvents: life ? "auto" : "none" }}
            >
              <motion.p
                variants={itemVariants}
                className="mt-5 text-sm text-center"
              >
                I am originally from San Marcos, TX, but I currently reside in
                Cleveland, OH. I have my sights set on moving to Seattle, WA.
              </motion.p>
              <motion.p variants={itemVariants} className="mt-5 text-sm text-center">
                Outside of the coding world I like to keep busy, I play 5
                instruments, write, record and produce my own music. I also have
                become fond of making comedy skits and doing my best to make
                people laugh. Everyone I know calls me a dad without kids
                because of my jokes, and I say that makes me a faux pa 😎
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
