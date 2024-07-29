import React, {  useState } from "react";
import "./Header.scss";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navbarLinks = [
    {
      text: 'Home',
      name: 'home'
    },
    {
      text: 'About',
      name: 'about'
    },
    {
      text: 'Projects',
      name: 'projects'
    },
    {
      text: 'Contact',
      name: 'contact'
    },
  ]
  function handleHamburgerToggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <header className="header | py-3">
        <nav className="nav container ">
          <a href="index.html" className="nav__logo">
            <div className="img"></div>
          </a>
          <div className="navbar | basis-1/2">
            <ul className={isOpen ? "nav__list" : "nav__list__close "}>
              <span className="nav__list-menu-tag">Menu</span>
              {
                navbarLinks.map((linkItem,index) => {
                  return <li className={`nav__item  nav-${linkItem.name}`} key={index} >
                    <Link
                      to={linkItem.name}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={handleHamburgerToggle}
                    >
                      <i className={`uil uil-user nav__icon`}></i>{linkItem.text}
                    </Link>
                  </li>
                })
              }
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
