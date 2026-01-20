"use client";

import React, { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "+918870208686";
    const text = `Hello EcoHive,
    
I would like to get in touch.

Name: ${formData.name}
Subject: ${formData.subject}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Contact Us</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">
                    <i className="lni lni-home"></i> Home
                  </Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  We are here to help you with any questions or concerns you may
                  have. Reach out to us and we&apos;ll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-head">
            <div className="row">
              <div className="col-12">
                <div className="map-section">
                  <div className="map-container">
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          width="100%"
                          height="450"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=Guindy%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight={0}
                          marginWidth={0}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-50" style={{ marginTop: "50px" }}>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="contact-info">
                  <div className="single-info">
                    <i className="lni lni-map-marker"></i>
                    <div className="info-content">
                      <h3>Our Office</h3>
                      <p>Industrial Estate, Guindy, Chennai, Tamil Nadu 600032, India.</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-phone"></i>
                    <div className="info-content">
                      <h3>Contact Numbers</h3>
                      <ul>
                        <li>+91 8870208686</li>
                        <li>+91 44 2250 1234</li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-envelope"></i>
                    <div className="info-content">
                      <h3>Email Address</h3>
                      <ul>
                        <li>
                          <a href="mailto:support@ecohive.com">
                            support@ecohive.com
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@Ecohive.com">info@Ecohive.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-timer"></i>
                    <div className="info-content">
                      <h3>Working Hours</h3>
                      <p>Mon - Fri: 9am - 6pm</p>
                      <p>Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-md-12 col-12">
                <div className="contact-form-head">
                  <div className="form-main">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>Your Name</label>
                            <input
                              name="name"
                              type="text"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>Your Subject</label>
                            <input
                              name="subject"
                              type="text"
                              placeholder="Enter subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>Your Email</label>
                            <input
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>Your Phone</label>
                            <input
                              name="phone"
                              type="text"
                              placeholder="Enter your phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group message">
                            <label>Your Message</label>
                            <textarea
                              name="message"
                              placeholder="Type your message here"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group button">
                            <button type="submit" className="btn">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
