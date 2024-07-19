import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.scss";
import { BsFillMouseFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <Social />

          <div className="home__img"></div>
          {/* Hero Section Info Data */}
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
