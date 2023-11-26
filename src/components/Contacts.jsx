import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/berkeley-communications-WEDDt-u3q3o-unsplash.jpg";

export const Contacts = () => {
  return (
    <motion.div className="about--contacts">
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
        Contacts
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
      <motion.div className="contacts--icon__info">
        <motion.div className="icon">
          <motion.img
            src={image}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.4,
            }}
          ></motion.img>
        </motion.div>
        <motion.div
          className="info"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <p>
            <a className="util-text-footer-alt" href="mailto:rv@landa.as">
              rv@landa.as
            </a>
          </p>
          <p>
            <a className="util-text-footer-alt" href="tel:+34 947 25 77 77">
              +34 947 25 77 77
            </a>
          </p>
          <p align="left" className="util-text-footer-alt">
            83 Windsor Road London N15 7WY
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
