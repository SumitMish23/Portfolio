import React, { useState } from "react";
import { TbBrandTelegram } from "react-icons/tb";
import "./Home.scss";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title ">Sumit Mishra</h1>
      <h3 className="home__subtitle blinker anim-typewriter">Frontend Developer</h3>
      <p className="home__description ">
        I'm a passionate frontend developer,with knowledge in <span className="home__description--highlight | font-semibold">web development</span> and <span className="home__description--highlight | font-semibold">software development .</span>
      </p>
      <a href="#contact" className="button button--flex home__cta">
        Say Hello <TbBrandTelegram className="telegram-icon" />
      </a>
    </div>
  );
};

export default Data;
