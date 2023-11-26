import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import logo from "../assets/logo.png";
import google from "../assets/google.svg";
import { AnimatePresence, motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: -2000 },
  show: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: custom * 0.2,
    },
  }),
  exit: (custom) => ({
    opacity: 0,
    x: 2000,
    transition: {
      ease: "linear",
      duration: custom * 0.2,
      delay: 0.5,
    },
  }),
};

const container = {
  show: {
    transition: { type: "spring", stiffness: 100 },
  },
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.email.value;

    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <AnimatePresence>
      {/*<motion.div
        variants={item}
        key="motion--container"
        className="animation--div"
        custom={2}
        initial="hidden"
        animate="show"
        exit="exit"
  ></motion.div>*/}

      <motion.div className="wrapper" key="test">
        <form className="wrapper-container" onSubmit={handleSubmit}>
          <div className="image-section">
            <div className="image-wrapper"></div>

            <div className="content-container">
              <h1 className="section-heading">
                Empowering Minds Through Digital Education.
              </h1>
              <p className="section-paragraph">
                Every step forward is a step towards knowledge. Embrace the
                journey.
              </p>
            </div>

            <div className="section-rings">
              <div className="ring ring--filled"></div>
              <div className="ring ring--empty"></div>
            </div>

            <div className="section-lines">
              <div className="line--medium"></div>
              <div className="line--text"><p>LOGIN</p></div>
              <div className="line--thin"></div>
            </div>
          </div>
          <div className="form-section">
            <div className="form-wrapper">
              <div className="logo-container">
                <a href="#" className="logo-container">
                  <img src={logo} alt="Logo"></img>
                </a>
              </div>

              <h2>Welcome Back! 👋🏻</h2>
              <p>Enter your credentials to access your account.</p>

              <div className="input-container">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" autoComplete="off"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password"></input>
                </div>
              </div>

              <div className="remember-forgot">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    value="remember-me"
                    id="remember-me"
                  ></input>
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <a href="#">Forgot password?</a>
              </div>

              <button className="login-btn">Log In</button>

              <div className="or-divider">or</div>

              <button className="google-signin" type="submit">
                <object data={google}></object>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export { LoginPage };

/**/
