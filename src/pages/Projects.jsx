import LineGradient from "../components/LineGradient";
import { projects } from '../data';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.27,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-darkest`;

  return (
    <>
    {projects.map(project => (
    <motion.div variants={projectVariant} key={project.id} className="relative max-w-[400px] max-h-[500px] border border-black bg-gold">
      <div className={overlayStyles}>
        <h1>{project.title}</h1>
        <p>{project.price}</p>
      </div>
      <img src={project.img} alt={project.title} />
    </motion.div>
    ))}
    </>
  );
};

const Projects = () => {
  return (
    <section id="portfolio" className="py-28">
      <motion.div
        className="mx-auto text-center md:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="">
          <p className="text-6xl font-semibold font-neucha tracking-widest">
            My <span className="text-bronze">Projects</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-full" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
          quaerat provident aliquam ipsam autem enim dolorem qui consectetur
          pariatur.
        </p>
      </motion.div>

      {/* SERVICES */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-poppins font-normal"
          >
            SERVICES & PRICES
          </div>

          <Project />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;