import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Projects</h3>
        <p className="about__subtitle">15+</p>
      </div>

      <div className="about__box">
        <i className="bx bxs-school"></i>
        <h3 className="about__title">Education </h3>
        <p className="about__subtitle">
          B.Sc(IT) <br /> <span className="cgpa">CGPA : 9.65</span>
        </p>
      </div>
    </div>
  );
};

export default Info;
