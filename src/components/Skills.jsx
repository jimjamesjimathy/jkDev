import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";

const gridContainer = {
  initial: {},
  animate: {
    transition: {
      duration: 0.35,
      staggerChildren: 0.25,
    },
  },
};

const gridItem = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const Skill = ({ name, className = "" }) => {
  return (
    <motion.div
      className={` ${className} bg-secondary text-white h-[19vh] w-full text-center rounded-2xl flex items-center justify-center mx-auto shadow-about shadow-black-200`}
      variants={gridItem}
      whileHover={{ y: -5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="my-32">
      <Layout className="w-full">
        <AnimatedText
          text="Skills & Languages"
          className="sm:text-[11vw] lg:text-[7vw] text-[4vw] justify-center font-light mb-8"
        />
        <motion.div
          variants={gridContainer}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          className="w-screen min-h-[55vh] my-12 px-8 grid grid-cols-6 2xl:grid-cols-5 lg:grid-cols-4 xmd:grid-cols-2 sm:grid-cols-2 grid-rows-auto gap-3"
        >
          <Skill name="HTML5" />
          <Skill name="CSS3" />
          <Skill name="Scss" />
          <Skill name="Tailwind.css" />
          <Skill name="Material-UI" />
          <Skill name="Gsap" />
          <Skill name="Framer Motion" />
          <Skill name="Bootstrap" />
          <Skill name="javaScript" />
          <Skill name="React.js" />
          <Skill name="Next.js" />
          <Skill name="Redux" />
          <Skill name="Redux Toolkit" />
          <Skill name="Node.js" />
          <Skill name="Express" />
          <Skill name="MongoDB" />
          <Skill name="SQL" />
        </motion.div>
      </Layout>
    </section>
  );
};

export default Skills;
