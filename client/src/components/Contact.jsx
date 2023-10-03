import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ea5sxm', 'template_3icmumi', form.current, 'Q9r8d8DXQ6J_SQJao')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>How To Contact Us</h2>
      <h4>575-627-0144</h4>
      

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>lebonmange.com</h5>
            <a href="mailto:carloanthonyignacio@gmail.com">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='contactBtn btn-primary'>Send Message</button>
        </form>
    
      </div>
    </section>
  )
};

export default Contact