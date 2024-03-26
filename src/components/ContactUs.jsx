import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './css/ContactUs.css';

export const ContactUs = () => {
  const form = useRef();


  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(EMAILJS_SERVICE_ID);
    console.log(EMAILJS_TEMPLATE_ID);
    console.log(EMAILJS_USER_ID);

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Your mail has been sent! I'll talk to you soon!");
      })
      .catch((error) => {
        alert("I'm so sorry! The mailing service must be down - please shoot me an email to let me know!");
        console.log(error.text);
      });
  };

  return (
    <section id ="contact-form">
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" name="company" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <input 
      type="submit" value="Send" />
    </form>
    </section>
  );
};

export default ContactUs;

