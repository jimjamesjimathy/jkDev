import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import Education from "./Education";
import AnimatedText from "./AnimatedText";

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const containerItem = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[87%] mx-auto flex flex-col items-center justify-center">
      <LiIcon reference={ref} />
      <motion.div variants={containerItem}>
        <h3 className="capitalize text-2xl text-black-200 dark:text-white">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-fourthLight">
            @{company}
          </a>
        </h3>
        <span className="capitalize text-sixth italic">
          {time} | {address}
        </span>
        <p className="w-full text-black-200 dark:text-white">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div>
      <AnimatedText
        text="Experience"
        className="text-[4vw] justify-center font-light mb-8"
      />
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[3px] h-full bg-tertiary origin-top"
        />

        <motion.ul
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full flex flex-col items-start justify-between"
        >
          <Details
            position="team project manager / full stack developer"
            company="coder heros"
            companyLink="/"
            time="June 2022 - July 2022"
            address="Chicago, IL"
            work="Collaborated with a remote cross-functional 26-person team to onboard and ship features in under one month
            Conducted code reviews, approved Pull Requests, and led team meetings to ensure tasks were completed
            Pitched design ideas made with Figma to the stakeholders weekly, and also showcased newly implemented features 
            Utilized Ant-Design and Less to style landing pages and implemented media queries to ensure the site was responsive
            Followed accessibility protocols to ensure that all font sizes and colors were in accordance with accessibility laws
            "
          />

          <Details
            position="full stack developer"
            company="Freelance"
            companyLink="/"
            time="July 2022 - Present"
            address="Lakewood, OH"
            work="Collaborated with a remote cross-functional 26-person team to onboard and ship features in under one month
            Conducted code reviews, approved Pull Requests, and led team meetings to ensure tasks were completed
            Pitched design ideas made with Figma to the stakeholders weekly, and also showcased newly implemented features 
            Utilized Ant-Design and Less to style landing pages and implemented media queries to ensure the site was responsive
            Followed accessibility protocols to ensure that all font sizes and colors were in accordance with accessibility laws
            "
          />
        </motion.ul>
        <Education />
      </div>
    </div>
  );
};

export default Experience;
