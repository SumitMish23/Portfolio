import React from "react";
import "./skills.css";
import ProgressBar from "./Progressbar";

const Skills = () => {
   const languages = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    'GraphQL',
    "Java",
    "C++",
    "C",
  ];
  const frameworks=['ReactJs','AngularJs','Redux','Material UI','BootStrap','TailwindCSS','React Native','SpringBoot']

  const percentageData = [
    { bgcolor: "#6a1b9a", completed: 90 },
    { bgcolor: "#00695c", completed: 90 },
    { bgcolor: "#ef6c00", completed: 95 },
    { bgcolor: "#6a1b9a", completed: 70 },
    { bgcolor: "#6a1b9a", completed: 70 },
    { bgcolor: "#00695c", completed: 60 },
    { bgcolor: "#ef6c00", completed: 50 },
    { bgcolor: "#ef6c00", completed: 50 },
    
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Languages & Frameworks</span>
      <div className="skills">
        <div className="skills-languages">
          <h3 className="skills-title">Languages</h3>
            <div className="languages-section">
            <ul>
            {languages.map((value,index) => {
              return (
                <div className="skills-container" key={index}>
                  <i className="bx bxs-right-arrow-circle"></i>
                  <li>{value}</li>
                </div>
              );
            })}
          </ul>
          <div className="progress-bar">
            {percentageData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
            </div>
         
        </div>
        <div className="skills-frameworks">
        <h3 className="skills-title">Frameworks</h3>
        <ul>
            {frameworks.map((value,index) => {
              return (
                <div className="skills-container" key={index}>
                  <i className="bx bxs-right-arrow-circle"></i>
                  <li >{value}</li> {value==='ReactJs' || value==='Redux' ? <span className="expertise">Advanced</span> : <span className="expertise">Intermediate</span>}
                </div>
              );
            })}
          </ul>
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
