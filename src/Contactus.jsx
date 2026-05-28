import React, { useState } from "react";
import "./Contactus.css";
import emailjs from "@emailjs/browser";

const Contactus = () => {

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SEND EMAIL
  const sendEmail = (e) => {

    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
       "service_o06erzs",
        "template_yuuhhsl",
        templateParams,
        "MhqLBVxPKsFszlaqe"
      )
      .then((response) => {

        console.log("SUCCESS!", response.status, response.text);

        alert("✅ Message Sent Successfully!");

        // CLEAR FORM
        setFormData({
          name: "",
          email: "",
          message: "",
        });

      })
      .catch((error) => {

        console.log("FAILED...", error);

        alert("❌ Failed To Send Message");

      });
  };

  return (

    <div className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h2>We'd Love to Hear From You</h2>

          <p>
            Have a question, suggestion, or just want to say hello?
            Feel free to contact us anytime.
          </p>

          <div className="contact-info">
            <div>📍 Hyderabad, India</div>
            <div>📞 +91 8143140412</div>
            <div>📧 geethapidugu37@gmail.com</div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <h2>Send Message</h2>

          <form className="contact-form" onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="modern-footer">

        <div className="modern-footer-container">

          {/* BRAND */}
          <div className="footer-brand">

            <h1>Foodie</h1>

            <p>
              Bringing delicious meals to your doorstep with fast delivery
              and amazing taste every day.
            </p>

          </div>

          {/* LINKS */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>

          </div>

          {/* CONTACT */}
          <div className="footer-contact">

            <h3>Contact Info</h3>

            <div className="contact-card">
              <span>📍</span>
              <p>Hyderabad, India</p>
            </div>

            <div className="contact-card">
              <span>📞</span>
              <p>+91 8143140412</p>
            </div>

            <div className="contact-card">
              <span>📧</span>
              <p>geethapidugu37@gmail.com</p>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom-bar">
          © 2026 Foodie Restaurant | All Rights Reserved
        </div>

      </footer>

    </div>
  );
};

export default Contactus;