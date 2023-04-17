import { motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({
  type,
  time,
  place,
  desc,
  frontend,
  frontendInfo,
  backend,
  backendInfo,
  add,
  addInfo,
}) => {
  const ref = useRef(null);

  return (
    <div className="first:mt-0 last:mb-0 w-[75%] xmd:w-full mx-auto flex flex-col items-center justify-center">
      <div className="xmd:hidden block">
        <LiIcon reference={ref} />
      </div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize text-2xl font-bold text-black-200 dark:text-white">
          {type}
        </h3>
        <span className="capitalize text-sixth italic">
          {time} | {place}
        </span>
        <h4 className="font-semibold text-xl text-black-200 dark:text-white">
          {desc}
        </h4>
        <p className="w-full text-black-200 dark:text-white text-light">
          <span className="font-bold text-lg">{frontend}</span>- {frontendInfo}
        </p>
        <p className="w-full text-black-200 dark:text-white text-light">
          <span className="font-bold text-lg">{backend}</span>- {backendInfo}
        </p>
        <p className="w-full text-black-200 dark:text-white text-light">
          <span className="font-bold text-lg">{add}</span>- {addInfo}
        </p>
      </motion.div>
    </div>
  );
};

const Education = ({ ref }) => {
  return (
    <div className="mt-32 mb-64 sm:mb-24 sm:text-center" ref={ref}>
      <AnimatedText
        text="Education"
        className="xs:text-[15vw] sm:text-[11vw] lg:text-[7vw] text-[4vw] justify-center font-light mb-8"
      />
      <div className="relative">
        <div className="w-full flex flex-col items-start justify-between ml-4 xmd:ml-0 xmd:px-4">
          <Details
            type="Full Stack Developer Certification"
            time="Sep 2021 - July 2022"
            place="Bloom Institute of Technology"
            desc="Full-Time Program, Full Stack Web Development"
            frontend="Frontend"
            frontendInfo="React.js, Redux, Hooks, Context API, Jest, Cypress, Yum, Axios, JavaScript, HTML, CSS, Sass, Material-UI, Tailwind"
            backend="Backend"
            backendInfo=" Node.js, Express, SQL, PostgreSQL, Docker, Git CLI, GitHub, VS Code, Vercel, Heroku, MongoDB"
            add="Additional Skills"
            addInfo="Agile Project Management, Algorithms, Architecture, Debugging, Deployment"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
