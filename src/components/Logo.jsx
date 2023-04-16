import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-tertiary text-white-100 flex items-center justify-center rounded-full full font-normal"
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
