import React, { useLayoutEffect, useRef } from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.scss";
import { BsFillMouseFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import { gsap } from "gsap";
gsap.registerPlugin();

const Home = () => {
  const imageContainer = useRef(null);
  const dataContainer = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(imageContainer.current,
      { x: 80, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 1 }
    )
      .fromTo(dataContainer.current,
        { x: -80, opacity: 0.5 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
  }, []);
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <Social />

          <div className="home__img" ref={imageContainer}></div>
          {/* Hero Section Info Data */}
          <Data ref={dataContainer} />

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
