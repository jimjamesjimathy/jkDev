import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 h-16 font-normal rounded-full bg-tertiary text-white-100 full"
        whileHover={{
          backgroundColor: ["#243F4D", "#EF3400", "#F0A800", "#799871"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        JK
      </MotionLink>
    </div>
  );
};

export default Logo;
