import React from 'react';
import './About.scss';
import Info from './Info';
import Image from '../../assets/profile-pic-edited.jpg'
import gsap from 'gsap';

const About = () => {
  
  return (
    <section className="about section" id='about'>
      <h2 className='section__title | uppercase '>About Me</h2>
      <span className="section__subtitle | text-lg">My Introduction</span>
      <div className="about__container container grid ">
        <div className="about__img-container">
          <img src={Image} className="about__img" alt="" srcSet="" />
        </div>


        <div className="about__data">
          <Info />
          <p className="about__description">
            <span className='text-2xl'>F</span>rontend Developer passionate about crafting <b>Web Apps & Software</b> with excellent UI/UX interfaces, With several years of experience, I have successfully delivered numerous projects,consistently achieving high client satisfaction.In my free time,I either dive into Chess or will go for some Sprinting.
          </p>
          <p className='text-black | text-sm | font-bold w-[70%] md:w-full'><span className='w-2 | h-2 | bg-black | inline-block | mb-0.5' ></span> My core skills are : <span className='text-sm | font-normal'> ReactJs , AngularJs , TypeScript , Javascript , Redux, Express & Node.js.</span> </p>


        </div>
      </div>
    </section>
  )
}

export default About