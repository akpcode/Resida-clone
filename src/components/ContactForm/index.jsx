import React from 'react';
import './contactForm.css';
import { FaLocationDot, FaTwitter, FaInstagram  } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { SiGooglecardboard } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="contact_page_cont">
        <div className='conc_form_container'>
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write us a message!</p>
        </div>
    <div>
    <div className="contact-info">
        <div className='contact_content'>
        <h2>Contact Information</h2>
        <div className='conc_item'>
        <p>Say something to start a live chat!</p>
        </div>
      
      <div className='conc_item'>
        <i><BiPhoneCall /></i>
        <span>+1 012 3826 781</span>
      </div>
      <div className='conc_item'>
        <i><IoMdMail /></i>
        <span>demo@gmail.com</span>
      </div>
      <div className='conc_item'>
            <i><FaLocationDot /></i>
        <h5>132 Dartmouth Street Boston, Massachusetts 02156 United States</h5>
      </div>
      <div className="social-icons">
        <i className="form_icon"><FaTwitter /></i>
        <i className="form_icon"><FaInstagram /></i>
        <i className="form_icon"><SiGooglecardboard /></i>
      </div>
    </div>
        </div>
     
    <div className="contact-form">
      <form>
        <div className="form-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label>Select Subject:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="subject" value="general" />
                     <p> General Inquiry</p>
            </label>
            <label>
              <input type="radio" name="subject" value="payments" />
              Payments and Fees
            </label>
            <label>
              <input type="radio" name="subject" value="technical" />
              Technical
            </label>
            <label>
              <input type="radio" name="subject" value="registration" />
              Registration
            </label>
            <label>
              <input type="radio" name="subject" value="other" />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Write your message.."></textarea>
        </div>
        <button type="submit" className="form_button">Send Message</button>
      </form>
    </div>
    </div>
    
  </div>
  )
}

export default ContactForm;
