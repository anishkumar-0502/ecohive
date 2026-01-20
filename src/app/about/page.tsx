import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">About Us</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">
                    <i className="lni lni-home"></i> Home
                  </Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="content-left">
                <img src="/assets/images/hero/slider-bg1.png" alt="#" />
                <div className="video-inner">
                  <a
                    href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                    className="video-btn glightbox"
                  >
                    <i className="lni lni-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="content-right">
                <h2>Ecohive - Your Trusted & Reliable Partner.</h2>
                <p>
                  EcoHive is dedicated to providing sustainable and innovative
                  solutions for water purification, air filtration, and
                  agricultural machinery. Our mission is to empower communities
                  with clean resources and efficient technology, ensuring a
                  healthier and more productive environment for everyone.
                </p>
                <p>
                  With years of expertise in environmental engineering and
                  agri-tech, we offer a range of products designed for both
                  industrial and domestic use. From advanced RO systems to
                  precision soil sensors, we are your trusted partner in
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Core Team</h2>
                <p>
                  Our team consists of dedicated professionals with expertise in
                  environmental science, engineering, and sustainable
                  development, all working towards a greener future.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-team">
                <div className="team-image">
                  <img src="/assets/images/avator.jpeg" alt="#" />
                </div>
                <div className="team-content">
                  <h4>Grace Wright</h4>
                  <span>Founder, CEO</span>
                  <ul className="social">
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
                        <i className="lni lni-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-team">
                <div className="team-image">
                  <img src="/assets/images/avator.jpeg" alt="#" />
                </div>
                <div className="team-content">
                  <h4>Taylor Jackson</h4>
                  <span>Financial Director</span>
                  <ul className="social">
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
                        <i className="lni lni-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-team">
                <div className="team-image">
                  <img src="/assets/images/avator.jpeg" alt="#" />
                </div>
                <div className="team-content">
                  <h4>Quinton Cross</h4>
                  <span>Marketing Director</span>
                  <ul className="social">
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
                        <i className="lni lni-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-team">
                <div className="team-image">
                  <img src="/assets/images/avator.jpeg" alt="#" />
                </div>
                <div className="team-content">
                  <h4>Liana Mullen</h4>
                  <span>Lead Designer</span>
                  <ul className="social">
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
                        <i className="lni lni-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
