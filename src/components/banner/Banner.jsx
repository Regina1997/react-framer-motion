import { useEffect } from "react";
import { useState } from "react";
import { BannerRowTop } from "./BannerRowTop";
import { BannerRowCenter } from "./BannerRowCenter";
import { BannerRowBottom } from "./BannerRowBottom";
import { motion } from "framer-motion";
import { banner } from "./AnimatedLetters";

export const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);
    
    const text = 'This blog is specialised in improving your skills and setting you up for success.'

    useEffect(() => {
      setTimeout(() => {
        setPlayMarquee(true);
      }, 2000);
    }, []);
    return (
      <motion.div className='banner' variants={banner}>
        <BannerRowTop title={"react"}  text={text}/>
        <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
        <BannerRowBottom title={"web"} textTop={"let's"} textBottom={'start'}/>
      </motion.div>
    );
  };