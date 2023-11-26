import { CustomLink } from "./CustomLink";

const BurgerMenu = ({ setOpen }) => {
  return (
    <nav className="burger__nav" onClick={setOpen}>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to={`/posts/1`}>Blog</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </nav>
  );
};

export default BurgerMenu;
