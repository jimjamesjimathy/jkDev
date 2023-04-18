import { motion } from "framer-motion";
import { gridContainer, gridItem } from "@/utilities/motion";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";

const Skill = ({ img, name, className = "" }) => {
  return (
    <motion.div
      className={` ${className} bg-white dark:bg-secondary dark:text-white border-2 border-black-200 text-black-200 h-[15vh] w-full rounded-2xl flex flex-col items-center justify-center shadow-about shadow-black-200 p-5`}
      variants={gridItem}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-center w-full h-full">
        {img}
      </div>
      <div className="flex items-center justify-center w-full h-full capitalize">
        {name}
      </div>
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
          className="w-screen min-h-[55vh] my-12 px-24 grid grid-cols-6 2xl:grid-cols-5 lg:grid-cols-4 xmd:grid-cols-2 sm:grid-cols-2 grid-rows-auto gap-3"
        >
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="h-5/6"
              />
            }
            name="HTML5"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                className="h-5/6"
              />
            }
            name="CSS3"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                className="h-5/6"
              />
            }
            name="sass"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                className="h-5/6"
              />
            }
            name="Tailwind"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                className="h-5/6"
              />
            }
            name="Material-UI"
          />
          <Skill
            name="Gsap"
            img={
              <img
                src="https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png"
                className="h-5/6"
              />
            }
          />
          <Skill
            img={
              <img
                src="https://www.sajandeep.com/images/skill-icons/framer.png"
                className="h-5/6"
              />
            }
            name="Framer Motion"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                className="h-5/6"
              />
            }
            name="Bootstrap"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="h-5/6"
              />
            }
            name="javaScript"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="h-5/6"
              />
            }
            name="React"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                className="h-5/6"
              />
            }
            name="Next"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                className="h-5/6"
              />
            }
            name="jest"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                className="h-5/6"
              />
            }
            name="Redux"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                className="h-5/6"
              />
            }
            name="Node"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                className="h-5/6"
              />
            }
            name="Express"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                className="h-5/6"
              />
            }
            name="git"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="h-5/6"
              />
            }
            name="github"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                className="h-5/6"
              />
            }
            name="MongoDB"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                className="h-5/6"
              />
            }
            name="POSTGRESQL"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                className="h-5/6"
              />
            }
            name="figma"
          />
          <Skill
            img={
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"
                className="h-5/6"
              />
            }
            name="gimp"
          />
        </motion.div>
      </Layout>
    </section>
  );
};

export default Skills;
