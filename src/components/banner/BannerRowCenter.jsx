import { AnimatedLetters } from "./AnimatedLetters";
import { motion } from "framer-motion";

export const BannerRowCenter = ({ title, playMarquee }) => {
    return (
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className='marquee__inner'>
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };