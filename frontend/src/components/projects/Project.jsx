import React, { useLayoutEffect } from "react";
import "./project.scss";
import Card from "./Card";
import { projectData } from "../../utils/Constants";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const triggerRef = useRef(null);
  const childRef = useRef([]);

  const createAnimation = () => {
    const childsLength = childRef.current.length - 1;
    const triggerWidth = triggerRef.current.offsetWidth;
   
    const animation = gsap.to(childRef.current, {
      xPercent: (-((childsLength + 1)*10) * (childsLength)),
    
      ease: "none",
      rotate: 0,
      scrollTrigger: {
        trigger: triggerRef.current,
        markers: false,
        start: 'top 100px',
        end:()=> `+=${childRef.current[0].offsetWidth * childsLength}px`,
        pin: true,
        scrub: 1,
      },
    });

    return animation;
  };

  useLayoutEffect(() => {
    let animation = createAnimation();

    const handleResize = () => {
      animation.scrollTrigger.kill();
      animation.kill();
      animation = createAnimation();
    };

    // window.addEventListener('resize', handleResize);

    return () => {
      animation.scrollTrigger.kill();
      animation.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const addToRefs = (ref) => {
    if (childRef?.current.includes(ref)) return;
    childRef.current.push(ref);
  }
  return (
    <>
      <section className="projects-section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Professional & Personal <p>(Hover around to see the live version)</p></span>

        <div className="projects" ref={triggerRef}>
          {projectData.map((project, index) => {
            return <Card ref={addToRefs} key={index} {...project} />
          })}
        </div>
      </section>

    </>
  );
};

export default Project;
