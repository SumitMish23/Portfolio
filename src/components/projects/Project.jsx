import React from "react";
import "./project.css";
import Card from "./Card";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import crypBixImage from "../../assets/Screenshot_20230225_061614.png";
import stickitImage from "../../assets/Screenshot_20230226_055206.png";
import stockifyImage from "../../assets/stockify.png";
import graphLookerImage from '../../assets/graphloooker.png'
import dappLookerImage from '../../assets/dapplooker.png'
const Project = () => {
  const projectData = [
    {
      projectName: "CrypBix",
      projectInfo:
        "A Multipage Website for tracking Cryptocurrencies and revelant Crypto-Data",
      imageSource: crypBixImage,
      deploymentLink: "https://sumitmish23.github.io/cryptobix/",
      githubLink: "https://github.com/SumitMish23/cryptobix",
    },
    {
      projectName: "Stockify",
      projectInfo:
        "A react based app used to track and get information about various stocks,prices and their current volume",
      imageSource: stockifyImage,
      deploymentLink: "https://stockify-sumit23.netlify.app/",
      githubLink: "https://github.com/SumitMish23/Stockify",
    },
    {
      projectName: "StickIt",
      projectInfo:
        "A Elegant React Web Application used for taking notes and writing down important tasks and considerations.",
      imageSource: stickitImage,
      deploymentLink: "https://master--comfy-eclair-06eb76.netlify.app/",
      githubLink: "https://github.com/SumitMish23/Stick-it",
    },
  ];

  const professionalProject=[{
    projectName:'GraphLooker',
    projectInfo:'Graphlooker is react based web app(Open Source) made for users to search relevant web3 crypto data among millions of the data into well structured table format.',
    imageSource:graphLookerImage,
    websiteLink:'https://graphlooker.com/'
  },{
    projectName:'DappLooker',
    projectInfo:'Dapplooker is a No-code Multi-chain Blockchain Analytics based project.',
    imageSource:dappLookerImage,
    websiteLink:'https://dapplooker.com/'


  }]
  return (
    <section className="projects-section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Professional & Personal <p>(Hover around to see the live version)</p></span>
       
      <div className="projects">
        {projectData.map((value, index) => {
          return (
            <Card
            key={index}
              name={value.projectName}
              info={value.projectInfo}
              image={value.imageSource}
              deploymentLink={value.deploymentLink}
              githubLink={value.githubLink}
            />
          );
        })}
      </div>
      
        <p className="professional-project-text">
          Here are some of the professional projects in which I had work upon
          while working as a Front-End Developer <BsFillArrowDownCircleFill/>
        </p>
        <div className="projects-professional">
          {professionalProject.map((value,index)=>{
            return <Card  name={value.projectName} 
            key={index}
            info={value.projectInfo}
            image={value.imageSource}
            websiteLink={value.websiteLink}
            />
          })}
      </div>
    </section>
  );
};

export default Project;
