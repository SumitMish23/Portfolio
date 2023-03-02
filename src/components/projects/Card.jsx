import React from "react";

const Card = ({ name, info, image, deploymentLink, githubLink,websiteLink }) => {
   
  return (
    <div className="card">
      <img src={image} alt="" srcSet="" />
      <h2>{name}</h2>
      <p>{info}</p>

     {
      deploymentLink && <form action={deploymentLink} target="_blank">
      <button className="button btn-deployment">Deployment Link</button>
    </form>
     } 

     {
        githubLink &&  <form action={githubLink} target="_blank">
        <button className="button btn-github">Github Link</button>
      </form>
     }
     {
        websiteLink && <form action={websiteLink} target="_blank">
        <button className="button btn-deployment">Go To The Site</button>
      </form>
     }
    </div>
  );
};

export default Card;
