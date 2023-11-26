import { AnimatedLetters } from "./AnimatedLetters";
import { motion } from "framer-motion";

export const BannerRowTop = ({ title, text }) => {
    return (
      <div className={"banner-row"}>
        <div className='row-col'>
          <AnimatedLetters title={title} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className='row-col'>
          <span className='row-message'>
            {text}
          </span>
        </motion.div>
      </div>
    );
  };