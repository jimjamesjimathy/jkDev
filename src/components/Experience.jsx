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

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work1,
  work2,
  work3,
  work4,
  work5,
}) => {
  const ref = useRef(null);
  return (
    <div className="ml-24 first:mb-16 xmd:ml-0 xmd:px-4">
      <div className="block xmd:hidden">
        <LiIcon reference={ref} />
      </div>
      <motion.div variants={containerItem}>
        <h3 className="text-2xl capitalize text-black-200 dark:text-white">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-fourthLight">
            @{company}
          </a>
        </h3>
        <span className="italic capitalize text-sixth">
          {time} | {address}
        </span>
        <p className="w-full text-black-200 dark:text-white">&bull; {work1}</p>
        <p className="w-full text-black-200 dark:text-white">&bull; {work2}</p>
        <p className="w-full text-black-200 dark:text-white">&bull; {work3}</p>
        <p className="w-full text-black-200 dark:text-white">&bull; {work4}</p>
        <p className="w-full text-black-200 dark:text-white">&bull; {work5}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  console.log(scrollYProgress);

  return (
    <div className="w-full xmd:text-center">
      <AnimatedText
        text="Experience"
        className="xs:text-[15vw] sm:text-[11vw] lg:text-[7vw] text-[4vw] justify-center font-light mb-8"
      />
      <div ref={ref} className="w-[75%] xmd:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[3px] h-full bg-tertiary origin-top xmd:hidden"
        />

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center w-full xmd:items-center"
        >
          <Details
            position="team project manager / full stack developer"
            company="coder heros"
            companyLink="/"
            time="June 2022 - July 2022"
            address="Remote"
            work1="Collaborated with a remote cross-functional 26-person team to onboard and ship features in under one month"
            work2="Conducted code reviews, approved Pull Requests, and led team meetings to ensure tasks were completed"
            work3="Pitched design ideas made with Figma to the stakeholders weekly, and also showcased newly implemented features"
            work4="Utilized Ant-Design and Less to style landing pages and implemented media queries to ensure the site was responsive"
            work5="Followed accessibility protocols to ensure that all font sizes and colors were in accordance with accessibility laws"
          />

          <Details
            position="full stack developer"
            company="Freelance"
            companyLink="/"
            time="July 2022 - Present"
            address="Lakewood, OH"
            work1="Architect brand-new software solutions to fulfill project requirements"
            work2="Create, design, and implement layouts for new and existing web pages"
            work3="Create and maintain database designs for data storage and processing"
            work4="Maintain legacy code written by other developers, including bug fixes"
            work5="Integrate external software libraries and APIs into existing projects"
          />
        </motion.div>
        <Education />
      </div>
    </div>
  );
};

export default Experience;
