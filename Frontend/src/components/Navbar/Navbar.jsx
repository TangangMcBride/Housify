import { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const user = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 738) {
        setToggle(false); // Close menu when screen size increases
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggle]);
  return (
    <nav>
      <div className="menu">
        <a href="/" className="logo">
          <img src="public/images/logo1.svg" />
          <span>Housify</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Content</a>
        <a href="/" className="agent">
          Agent
        </a>
      </div>
      <div className="login">
        {user ? (
          <div className="user">
            <img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg" />
            <span>Mc Bride</span>
            <Link to="/login" className="profile">
              <div className="notification">4</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="auth">
              Sign in
            </a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="public/images/menu.svg"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className={toggle ? " active mobileMenu" : "mobileMenu"}>
          <a href="/">
            <img src="public/images/home.png" alt="Home" />
            Home
          </a>

          <a href="/">
            <img src="public/images/info-button.png" />
            About
          </a>
          <a href="/">
            <img src="public/images/copy-writing.png" />
            Content
          </a>
          <a href="/">
            <img src="public/images/businessman.png" />
            Agent
          </a>
          <a href="/">
            <img src="public/images/log-in.png" />
            Sign in
          </a>
          <a href="/">
            <img src="public/images/logout.png" />
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
