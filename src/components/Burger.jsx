const Burger = ({ setOpen }) => {
    return (
      <button className="burger__button" onClick={setOpen}>
        <div className="burger__button--item" />
        <div className="burger__button--item" />
        <div className="burger__button--item" />
      </button>
    );
  };
  
  export default Burger;