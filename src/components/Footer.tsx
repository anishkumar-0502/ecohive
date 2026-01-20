"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { showNotification } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showNotification("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    showNotification("Coming soon");
  };

  return (
    <footer className="footer">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/images/logo/ecohive-white.png" alt="#" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="footer-newsletter">
                  <h4 className="title">
                    Subscribe to our Newsletter
                    <span>
                      Get all the latest information, Sales and Offers.
                    </span>
                  </h4>
                  <div className="newsletter-form-head">
                    <form
                      onSubmit={handleSubscribe}
                      className="newsletter-form"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address here..."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="button">
                        <button className="btn" type="submit">
                          Subscribe<span className="dir-part"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}

      {/* Start Footer Middle */}
      <div className="footer-middle">
        <div className="container">
          <div className="bottom-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-contact">
                  <h3>Get In Touch With Us</h3>
                  <p className="phone">Phone: +91 8870208686</p>
                  <ul>
                    <li>
                      <span>Monday-Friday: </span> 9.00 am - 8.00 pm
                    </li>
                    <li>
                      <span>Saturday: </span> 10.00 am - 6.00 pm
                    </li>
                  </ul>
                  <p className="mail">
                    <a href="mailto:support@ecohive.com">support@ecohive.com</a>
                  </p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer our-app">
                  <h3>Our Mobile App</h3>
                  <ul className="app-btn">
                    <li>
                      <a href="#" onClick={handleComingSoon}>
                        <i className="lni lni-apple"></i>
                        <span className="small-title">Download on the</span>
                        <span className="big-title">App Store</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={handleComingSoon}>
                        <i className="lni lni-play-store"></i>
                        <span className="small-title">Download on the</span>
                        <span className="big-title">Google Play</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Information</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Shop Departments</h3>
                  <ul>
                    <li>
                      <Link href="/products?category=Water purification and filters">
                        Water purification and filters
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=Air filtering">
                        Air filtering
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=Agricultural machineries">
                        Agricultural machineries
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Middle */}

      {/* Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-content">
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
                <div className="payment-gateway">
                  <span>We Accept:</span>
                  <img
                    src="/assets/images/footer/credit-cards-footer.png"
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="copyright">
                  <p>
                    Designed and Developed by
                    <a
                      href="https://outdidunified.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      Outdid Tech Team
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <ul className="socila">
                  <li>
                    <span>Follow Us On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Bottom */}
    </footer>
  );
};

export default Footer;
