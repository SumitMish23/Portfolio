import React, { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  function handleHamburgerToggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            <div className="img"></div>
          </a>
          <div className="navbar">
            <ul className={isOpen ? "nav__list" : "nav__list__close "}>
              <li className="nav__item">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <i className="uil uil-user nav__icon"></i>About
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>Projects
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hamburger">
          <Hamburger
            toggled={isOpen}
            toggle={() => {
              handleHamburgerToggle();
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
