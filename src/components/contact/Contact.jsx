import React from 'react';
import { useRef } from 'react';
import '../contact/contact.css'
import emailjs from '@emailjs/browser';
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
    const form = useRef();
    const textArea=useRef();
    const sendEmail = (e) => {
        alert('Message was sent to the Sumit !')
      
         document.querySelector('textarea').value=''; 
        emailjs.sendForm('service_v2azgws', 'template_0ndi3b3', form.current, 'fVQX914ugZCWBD0ne');
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          textArea.current.value=''
      };
  return (
   <section className="contact section" id='contact'>
    <h2 className="section__title">Get in touch</h2>
    <span className="section__subtitle">Contact Me</span>
  
    <div className="contact__container container">
        <div className="contact__content">
            <h3 className="contact__title">
                Talk to me
            </h3>
            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"> </i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">sumit894sumit@gmail.com</span>

                        <a href="mailto:sumit894sumit@gmail.com" className='contact__button' target={'_blank'}>Write a mail<i className="bx bx-right-arrow-alt"></i></a>
                   
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"> </i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+91 7304071596</span>
                        <a href="https://api.whatsapp.com/send?phone=7304071596&text=Hello,Sumit" target={'_blank'}>DM me<i className="bx bx-right-arrow-alt"></i></a>
                     
                   
                </div>
                <div className="contact__card">
                <i className='bx bxl-linkedin-square'></i> 
                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Sumit Mishra</span>
                        <a href="https://www.linkedin.com/in/sumitmishra23/" target={'_blank'}>DM me<i className="bx bx-right-arrow-alt"></i></a>
                     
                   
                </div>
            </div>
        </div>

        <div className="contact__content">
            <h3 className="contact__title">
                React Out to me
            </h3>

            <form action="" ref={form}  className="contact__form">

                <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Name</label>
                    <input  type="text"  name="user_name" className='contact__form-input' placeholder='Enter You Name..'/>
                </div>

                <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Email</label>
                    <input  type="text"  name='user_email' className='contact__form-input' placeholder='Enter You Email..'/>
                </div>
                <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Message</label>
                   <textarea ref={textArea} name="message"  cols="30" rows="10" className='contact__form-input-text'  placeholder='Enter Your Text..'></textarea>
                </div>
                <a onClick={sendEmail} href="#contact" className='button button--flex submit-button'>Send Message  <TbBrandTelegram className='telegram-icon'/></a>
            </form>
        </div>
    </div>
  
   </section>
  )
}

export default Contact;