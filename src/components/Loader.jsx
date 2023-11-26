import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

import image_1 from "../assets/images/image-1.webp";
import image_1_jpg from "../assets/images/image-1.jpg";
import image_2 from "../assets/images/image-2.jpg";
import image_3 from "../assets/images/image-3.webp";
import image_3_jpg from "../assets/images/image-3.jpg";
import image_4 from "../assets/images/image-4.webp";
import image_4_jpg from "../assets/images/image-4.jpg";
import image_5 from "../assets/images/image-5.webp";
import image_5_jpg from "../assets/images/image-5.jpg";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: custom * 0.2,
    },
  }),
  exit: custom => ({
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: custom * 0.2,
    },
  }),
};


const Loader = ({ setLoading }) => {
  return (
    
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit='exit'
        className="loader-inner"
      >
        <ImageBlock custom={2} variants={item} id="image_1" img={image_1} fallback={image_1_jpg} />
        <motion.div custom={3} variants={item} className="transition-image">
          <motion.img layoutId="main-image-1" src={image_2} />
        </motion.div>
        <ImageBlock custom={4} variants={item} id="image_3" img={image_3} fallback={image_3_jpg}/>
        <ImageBlock custom={5} variants={item} id="image_4" img={image_4} fallback={image_4_jpg}/>
        <ImageBlock custom={6} variants={item} id="image_5 " img={image_5} fallback={image_5_jpg}/>
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ variants, id, img, fallback, custom }) => {
  return (
    <motion.div custom={custom} variants={variants} className={`image-block ${id}`}>
      <Image img={img} fallback={fallback} alt={id} />
    </motion.div>
  );
};
export default Loader;
