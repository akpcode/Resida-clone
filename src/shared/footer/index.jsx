import React from 'react'
import './footer.css';
import { IoCallOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail} from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ResidaFooter = () => {
  return (
    <div className='footer-main'>
        <div  className='footer_container'>
          <div className="resida_section">
            <h3>Resida</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
            <div className="footer_icons">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>

          </div>
          <div className="footer_section">
            <h4>Product</h4>
            <p>Pricing</p>
            <p>Case studies</p>
            <p>Reviews</p>
            <p>Updates</p>
          </div>
          <div className="footer_section">
            <h4>Company</h4>
            <p>Contact us</p>
            <p>Careers</p>
            <p>Culture</p>
            <p>Blog</p>
          </div>
          <div className="footer_section">
            <h4>Support</h4>
            <p>Help center</p>
            <p>Server status</p>
            <p>Report a bug</p>
            <p>Chat support</p>
          </div>
          <div className="footer_section">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>User Terms of Use</p>
            <p>Payments & Pricing policy</p>
            <p>Cookies & Data Privacy</p>
          </div>
        </div>
        <div className="footer_contact">
        <p>
            <span><MdOutlineEmail /></span>
              Resida@gmail.com
             <span><IoCallOutline /></span> (414) 687 - 5892
              7B, Ibebu Lekki Steet, Dolphin Estate, Ikoyi Lagos. <span><CiLocationOn /></span>
            </p>
        </div>
       
        <div className="footer_copyright">
          <p>Copyright © 2022 Resida Group</p> <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
          
        </div>
      </div>
  )
}

export default ResidaFooter;
