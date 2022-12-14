import LineGradient from "../components/LineGradient";
import { projects } from "../data";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-75 transition duration-500
    bg-accentText z-30 flex flex-col justify-between items-center text-center p-16 text-darkest font-bold`;

  return (
    <>
      {projects.map((project) => (
        <motion.div
          variants={projectVariant}
          key={project.id}
          className="relative max-w-[450px] max-h-[235px] overflow-hidden"
        >
          <div className={overlayStyles}>
            <h1>{project.title}</h1>
            <div className="flex w-full items-center justify-between">
              <a
                target="_blank"
                rel="noreferrer"
                href={project.demo}
                className="bg-lightBlue px-4 py-2 text-white rounded-md hover:bg-blue transition duration-300"
              >
                <button>Demo</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.code}
                className="bg-lightBlue px-4 py-2 text-white rounded-md hover:bg-blue transition duration-300"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
          <img
            src={project.img}
            alt={project.title}
            className="w-full relative max-w-[450px] max-h-[235px]"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <section id="portfolio" className="pb-10 pt-24">
      <motion.div
        className="mx-auto text-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mb-12">
          <p className="text-6xl font-normal tracking-widest">
            My <span className="">Projects</span>
          </p>
          <div className="flex justify-center mt-4">
            <LineGradient width="w-3/4" />
          </div>
        </div>
      </motion.div>

      {/* SERVICES */}
      <div className="flex justify-center ">
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="transition duration-500 flex justify-center text-center items-center p-10 hover:bg-lightBlue hover:text-darkest bg-brown font-bold
              max-w-[475px] max-h-[235px] text-xl font-poppins"
          >
            My Recent Projects:
          </div>
          <Project />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

// 1397 X 969
