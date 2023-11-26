import { motion } from "framer-motion";
import { BannerRowTop } from "../components/banner/BannerRowTop";
import { BannerRowBottom } from "../components/banner/BannerRowBottom";
import { useEffect, useState } from "react";
import { BannerRowCenter } from "../components/banner/BannerRowCenter";

const Notfoundpage = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="container__not-found">
      {/*<BannerRowTop
        title={`404`}
        text={`This page doesn't exist. Go home or check our new posts`}
      />*/}
      <BannerRowCenter title={"404"} playMarquee={playMarquee} />
      <BannerRowTop title={`not found`} text={``} />
      <BannerRowBottom title={"posts"} textTop={"check"} textBottom={"posts"} />
    </motion.div>
  );
};

export { Notfoundpage };
