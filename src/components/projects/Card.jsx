import React, { forwardRef } from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaDribbble as DeployedLine } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import defaultProjectImage from '../../assets/defaultProjectImage.jpg'

const Card = forwardRef((props, ref) => {
  const { projectName, projectInfo, imageSource, deploymentLink, githubLink } = props;
  return (
    <div className='card' ref={ref} >
      {/* Header */}
      <div className="card-header">
        <div className="card-header__image">
          <img src={imageSource ?? defaultProjectImage} alt="project-image" />
        </div>
        <div className="card-header__link">
          <button><FaArrowUp /></button>
        </div>

        <div className="card-header__category">
          <p>Website</p>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="card-body__heading">{projectName}</h3>
        <p className="card-body__description">{projectInfo}</p>
      </div>

      {/* Footer */}
      <div className="card-footer | flex | justify-start | items-center | gap-x-2">
        {githubLink &&
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className="card-footer__btn | btn-github | flex  | items-baseline | gap-x-1"><RiGithubLine className="relative | top-0.5 | scale-110" />View</button>
          </a>
        }
        {deploymentLink &&
          <a href={deploymentLink} target="_blank" rel="noreferrer" >
            <button className="card-footer__btn | btn-deployed | flex | items-baseline | gap-x-1"><DeployedLine className="relative | top-0.5" /> View</button>
          </a>
        }
      </div>
    </div>
  );
});

export default Card;
