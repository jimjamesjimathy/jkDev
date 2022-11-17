import LineGradient from "../components/LineGradient";
import { projects } from '../data';
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
    bg-accentText z-30 flex flex-col justify-center items-center text-center p-16 text-darkest font-bold`;

  return (
    <>
      {projects.map(project => (
        <motion.div variants={projectVariant} key={project.id} className="relative max-w-[475px] max-h-[235px]">
          <div className={overlayStyles}>
            <h1>{project.title}</h1>
            <p>{project.price}</p>
          </div>
          <img src={project.img} alt={project.title} className="relative max-w-[475px] max-h-[235px]" />
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
        viewport={{ once: false, amount: 0.5 }}
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
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[450px] max-h-[500px] text-xl font-poppins font-normal "
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