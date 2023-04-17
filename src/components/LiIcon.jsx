import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-black-200">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 stroke-fourthLight fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white-100"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="20" className="stroke-1 fill-fourthLight" />
      </svg>
    </figure>
  );
};

export default LiIcon;
