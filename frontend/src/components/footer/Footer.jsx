import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_container">
            
            <h1 className="footer__title">Sumit Mishra</h1>
            <span className="footer__subtitle">Frontend Developer</span>

    
            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href="#contact" className='footer__link'>Contact</a>
                </li>
                <li>
                    <a href="#projects" className='footer__link'>Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/sumitmishra23/" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                 <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sumitmishra23/" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                 <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/sumitmishra23/" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                 <i className="bx bxl-twitter"></i>
                </a>
            </div>

<span className="footer_made">Made with &hearts; By Sumit </span>

        </div>
    </div>
  )
}

export default Footer