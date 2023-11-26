import { Outlet, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import image_4 from "../assets/images/image-4.jpg";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div className="container--about">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.4,
            }}
          >
            LET'S GET TO KNOW EACH OTHER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
          >
            We are not just a team of developers, we are DECODErs - a tight-knit
            community of like-minded and passionate specialists in our field. We
            turn ideas into algorithms. Concepts into code. And, we are able to
            help each other do a better job each day thanks to the common
            principles that drive us.
          </motion.p>
          <motion.div
            className="about--image"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <img src={image_4}></img>
          </motion.div>
          <motion.ul>
            <motion.li
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <Link to="contacts">Our Contacts</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <Link to="team">Our Team</Link>
            </motion.li>
          </motion.ul>
          <Outlet />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { About };
