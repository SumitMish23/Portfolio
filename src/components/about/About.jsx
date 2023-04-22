import React from 'react';
import './About.css';
import Info from './Info';
import { AiFillFilePdf } from "react-icons/ai";

import Image from '../../assets/profile-pic-edited.jpg'

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid ">
               <img src={Image}  className="about__img"alt="" srcSet="" />

               <div className="about__data">
                <Info/>
                <p className="about__description">
                 Frontend Developer who loves to play with codes,having experience of almost an year in making UI  & UX Designs and converting them into real interfaces. ReactJs,AngularJs,TypeScript,Redux are some of the core frameworks in which I had worked on (and would love to).In my free time,I either dive into Chess or will go for some Sprinting. 
                </p>
                <a href='\contact'  className='button button--flex'>Download CV <AiFillFilePdf className='cv--icon'/></a>
               </div>
        </div>
    </section>
  )
}

export default About