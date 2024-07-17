import React, { useState } from "react";
import { TbBrandTelegram } from "react-icons/tb";
import "./Home.css";

const Data = () => {
  const [text] = useState("Frontend Developer");

  return (
    <div className="home__data">
      <h1 className="home__title ">Sumit Mishra</h1>
      <h3 className="home__subtitle blinker anim-typewriter">{text}</h3>
      <p className="home__description">
        I'm a passionate frontend developer and UI/UX Designer.
      </p>
      <a href="#contact" className="button button--flex home__cta">
        Say Hello <TbBrandTelegram className="telegram-icon" />
      </a>
    </div>
  );
};

export default Data;
