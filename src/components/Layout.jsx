import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../sass/main.scss";
import { AnimatePresence, LayoutGroup } from "framer-motion";

const Layout = () => {
  return (
    <>
      <Header />

      <LayoutGroup type="crossfade">
        <AnimatePresence>
          <main className="container" key={"container_anim"}>
            <Outlet />
          </main>
        </AnimatePresence>
      </LayoutGroup>
  
     <Footer />
    </>
  );
};

export { Layout };
