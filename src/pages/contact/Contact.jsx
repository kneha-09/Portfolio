import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlinePermIdentity,MdLocationOn,MdEmail,MdPhone } from "react-icons/md";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact Info</h3>

          <div className="contact__info">

          <div className="info__item">
              <MdOutlinePermIdentity className="info__icon" />
              <div>
            <span className="info__title">Name</span>
            <h4 className="info__desc">Neha Kumavat</h4>
            </div>
            </div>

            <div className="info__item">
              <MdLocationOn className="info__icon" />
              <div>
            <span className="info__title">Address</span>
            <h4 className="info__desc"><a href="https://maps.app.goo.gl/sEMmFqXLzW95TQ3x9" target="_blank">Chh.Sambhajinagar, Maharashtra, India</a></h4>
            </div>
            </div>

            <div className="info__item">
              <MdEmail className="info__icon" />
              <div>
            <span className="info__title">Mail me</span>
            <h4 className="info__desc">nehakumavat58@gmail.com</h4>
            </div>
            </div>

            <div className="info__item">
              <MdPhone className="info__icon" />
              <span className="info__title">Call me</span>
            <h4 className="info__desc">+91 9373657448</h4>
          </div></div>

          <div className="contact__socials">
            <a href="https://Thread.com" className="contact__social-link">
              <FaLinkedin/>
            </a>

            <a href="https://.com" className="contact__social-link">
              <FaInstagram/>
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube/>
            </a>

            <a href="https://Twitter.com" className="contact__social-link">
              <FaXTwitter/>
            </a>
          </div>

        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" className="form__control" placeholder="Your Name" />
            </div>

            <div className="form__input-div">
              <input type="email" className="form__control" placeholder="Your Email"/>
            </div>


            <div className="form__input-div">
              <input type="text" className="form__control" placeholder="Your Subject" />
            </div>
            </div>
            

            <div className="form__input-div">
            <textarea className="form__control teaxtarea" placeholder="Your Message"></textarea>
            </div>
            

            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend/>
              </span>
            </button>


          {/* </div> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
