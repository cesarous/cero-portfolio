import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './css/ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nnsr9sa', 'template_mk1dsy8', form.current, 'e_GbC-iNiX6gBn0Ar4LqG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
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
      <input maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={hover ? '0 4px 8px 0 rgba(94, 23, 235, 0.2), 0 6px 20px 0 rgba(94, 23, 235, 0.19)' : ''}
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      type="submit" value="Send" />
    </form>
    </section>
  );
};

export default ContactUs;

