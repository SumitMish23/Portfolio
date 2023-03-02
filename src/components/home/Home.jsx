import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.css";

import { BsFillMouseFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import {
  Link,
  animateScroll as scroll,
  } from "react-scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          
          <div className="scroll-down">
            <BsFillMouseFill className="mouse-svg" />
            Scroll Down <BsArrowDownCircle />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
