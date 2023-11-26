import React from "react";
import { motion } from "framer-motion";

function ImageMain({ img }) {
  return (
    <div className="transition-image final">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.8,
        }}
        src={img}
        layoutId="main-image-1"
      />
    </div>
  );
}

export default ImageMain;
