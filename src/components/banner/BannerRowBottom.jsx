import { Link } from "react-router-dom";
import { AnimatedLetters } from "./AnimatedLetters";
import { motion } from "framer-motion";

export const BannerRowBottom = ({ title, textTop, textBottom }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="scroll"
      >
        <Link to="/posts/1">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            {textTop}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            {textBottom}
          </motion.span>
        </Link>
      </motion.div>

      <AnimatedLetters title={title} />
    </div>
  );
};
