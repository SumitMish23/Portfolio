import React from 'react';
import { useRef, useState } from 'react';
import '../contact/contact.css'
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
    const form = useRef();
    const textArea = useRef();
    const [validInputs, setValidInputs] = useState({ user_email: true });
    const [showLoader, setShowLoader] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'user_name':
                e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, '');
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const regexForEmail = /\S+@\S+\.\S+/;
        const { user_email } = e.target.elements;
        if (!regexForEmail.test(user_email.value)) {
            setValidInputs((prev) => ({ ...prev, user_email: false }));
            return;
        } else {
            setValidInputs((prev) => ({ ...prev, user_email: true }));
        };
        setShowLoader(true);


        // Call API for sending email :
        const formData = new FormData(e.target);
        try {
            const data = await fetch("http://localhost:8000/contact", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (data.status == 200) {
                form.current.reset();
                setShowLoader(false);
                setEmailModal(true);
                setInterval(() => {
                    setEmailModal(false);
                }, 3000);
            }
        } catch (error) {
            setShowLoader(false);
            console.log('ERROR SENDING THE MESSAGE', error);
        }


    }


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
                            <a href="mailto:sumit894sumit@gmail.com" className='contact__button' target={'_blank'} rel="noreferrer">Write a mail<i className="bx bx-right-arrow-alt"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"> </i>
                            <h3 className="contact__card-title">Whatsapp</h3>
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

                    <form ref={form} className="contact__form" onSubmit={handleFormSubmit}>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" name="user_name" className='contact__form-input' placeholder='Enter You Name..' onChange={handleInputChange} />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Email</label>
                            <div className='contact__form-email | relative | w-full'>
                                <input type="email" name='user_email' className='contact__form-input | w-10/12' placeholder='Enter You Email..' onChange={handleInputChange} />
                                {!validInputs?.user_email && <span className='contact__error |'>Invalid Email Address ! Please Enter Again :</span>}

                            </div>
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Message</label>
                            <textarea ref={textArea} name="message" cols="30" maxLength="215" rows="10" className='contact__form-input-text | ml-4' placeholder='Enter Your Text..' onChange={handleInputChange}></textarea>
                        </div>
                        <button type='submit' href="#contact" className='button button--flex submit-button'>{showLoader ? <>Sending Message <Loader /> </> : <>Send Message <TbBrandTelegram className='telegram-icon' /></>}  </button>
                    </form>
                </div>
            </div>

            {/* Toast on successfull email sender */}
            {emailModal && <div id="toast-default" className="fixed top-[16px] right-[16px] z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                    </svg>
                    <span className="sr-only">Fire icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">Email Sent Successfully !</div>
                <button type="button" onClick={()=>setEmailModal(false)} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>}
        </section>
    )
}

export default Contact;