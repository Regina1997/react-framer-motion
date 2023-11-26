import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { team } from "../api/teamData";

export const Team = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className="about--team">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.4,
        }}
      >
        Our team
      </motion.h1>
      <motion.hr
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.4,
        }}
      />
      <motion.div
        ref={carousel}
        className="carousel"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.6,
        }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {team.map((member) => (
            <motion.div key={member.img} className="item">
              <img src={`/team/${member.img}.jpg`} alt={member.img}></img>
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
