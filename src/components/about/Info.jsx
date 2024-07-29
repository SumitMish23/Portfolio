import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const parentBoxRef = useRef(null);
  const boxRef = useRef([]);
  useLayoutEffect(() => {
    gsap.set(parentBoxRef.current, { perspective: 1000 });
    boxRef.current.forEach((el, index) => {
      gsap.fromTo(el, { rotationY: 0, rotationX: 0 }, {
        rotationX: 0,
        rotationY: 360,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // Adjust the start point as needed
          end: 'bottom center', // Adjust the end point as needed
          scrub: 0.5,
        }
      });
    })

  }, []);
  const addRefs = (el) => {
    if (boxRef.current.includes(el)) return;
    boxRef.current.push(el);
  };
  return (
    <div className="about__info grid" ref={parentBoxRef}>
      <div className="about__box" ref={addRefs}>
        <i className="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ years Working</span>
      </div>

      <div className="about__box" ref={addRefs}>
        <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Projects</h3>
        <p className="about__subtitle">15+</p>
      </div>

      <div className="about__box" ref={addRefs}>
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
