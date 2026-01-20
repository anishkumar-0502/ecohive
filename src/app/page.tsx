"use client";

import React from "react";
import Link from "next/link";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import HomeProductList from "@/components/HomeProductList";
import PopularBrands from "@/components/PopularBrands";
import { useCart } from "@/context/CartContext";

const HomePage = () => {
  const trendingProducts = productsData.slice(0, 8);
  const bestSellers = productsData.slice(0, 3);
  const newArrivals = productsData.slice(3, 6);
  const topRated = productsData.slice(6, 9);
  const { formatPrice } = useCart();
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventEnded, setIsEventEnded] = React.useState(false);

  React.useEffect(() => {
    // Set a target date 30 days from now for demonstration
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsEventEnded(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      title: "Water Purification",
      items: [
        "Industrial RO",
        "Domestic Filters",
        "Water Softeners",
        "UV Sterilizers",
      ],
      image: "/assets/images/products/RO-Water-Purifier.png",
      link: "/products?category=Water purification and filters",
    },
    {
      title: "Air Filtering",
      items: [
        "HEPA Purifiers",
        "Industrial Exhaust",
        "Carbon Filters",
        "Air Quality Monitors",
      ],
      image: "/assets/images/products/HEPA-Air-Purifier.png",
      link: "/products?category=Air filtering",
    },
    {
      title: "Agricultural Machinery",
      items: [
        "Irrigation Pumps",
        "Soil Sensors",
        "Greenhouse Fans",
        "Crop Sprayers",
      ],
      image: "/assets/images/products/Compact-Tractor.jpeg",
      link: "/products?category=Agricultural machineries",
    },
  ];

  return (
    <>
      {/* Start Hero Area */}
      <section className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 custom-padding-right">
              <div className="slider-head">
                {/* Start Hero Slider */}
                <div className="hero-slider">
                  {/* Start Single Slider */}
                  <div
                    className="single-slider"
                    style={{
                      backgroundImage:
                        "url(/assets/images/hero/slider-bg1.png)",
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>Premium Water Filters</span>
                        Industrial RO System
                      </h2>
                      <p>
                        High-performance water purification systems for
                        industrial and agricultural use. Ensure clean and safe
                        water for all your needs.
                      </p>
                      <h3>
                        <span>Now Only</span> {formatPrice(320.99)}
                      </h3>
                      <div className="button">
                        <Link href="/products" className="btn">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                </div>
                {/* End Hero Slider */}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                  {/* Start Small Banner */}
                  <div
                    className="hero-small-banner"
                    style={{
                      backgroundImage:
                        "url(/assets/images/hero/slider-bg2.png)",
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>Special Offer</span>
                        Air Purifier X100
                      </h2>
                      <h3>{formatPrice(259.99)}</h3>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner style2">
                    <div className="content">
                      <h2>Weekly Sale!</h2>
                      <p>
                        Saving up to 50% off all online store items this week.
                      </p>
                      <div className="button">
                        <Link className="btn" href="/products">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}

      {/* Start Featured Categories Area */}
      <section className="featured-categories section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Featured Categories</h2>
                <p>
                  Explore our specialized solutions across key environmental and
                  agricultural sectors, designed for efficiency and
                  sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {categories.map((cat, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="single-category">
                  <h3 className="heading">{cat.title}</h3>
                  <ul>
                    {cat.items.map((item, idx) => (
                      <li key={idx}>
                        <Link href={cat.link}>{item}</Link>
                      </li>
                    ))}
                    <li>
                      <Link href={cat.link}>View All</Link>
                    </li>
                  </ul>
                  <div className="images">
                    <img
                      src={cat.image}
                      alt="#"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://via.placeholder.com/200x200?text=${cat.title}`;
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Featured Categories Area */}

      {/* Start Trending Product Area */}
      <section
        className="trending-product section"
        style={{ marginTop: "12px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Product</h2>
                <p>
                  Explore our most popular products in Water Purification, Air
                  Filtering, and Agricultural Machinery.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {trendingProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6 col-12">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Trending Product Area */}

      {/* Start Banner Area */}
      <section className="banner section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div
                className="single-banner"
                style={{
                  backgroundImage:
                    "url('/assets/images/banner/banner-1-bg.png')",
                }}
              >
                <div className="content">
                  <h2>Industrial RO System</h2>
                  <p>
                    High-performance water purification <br />
                    for industrial and agricultural use.
                  </p>
                  <div className="button">
                    <Link
                      href="/products?category=Water purification and filters"
                      className="btn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div
                className="single-banner custom-responsive-margin"
                style={{
                  backgroundImage:
                    "url('/assets/images/banner/banner-2-bg.png')",
                }}
              >
                <div className="content">
                  <h2>Smart Air Purifier</h2>
                  <p>
                    Advanced HEPA filtration <br />
                    for the cleanest indoor air quality.
                  </p>
                  <div className="button">
                    <Link
                      href="/products?category=Air filtering"
                      className="btn"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}

      {/* Start Special Offer Area */}
      <section className="special-offer section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Special Offer</h2>
                <p>
                  Take advantage of our limited-time deals on premium water and
                  air purification systems.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="single-product">
                    <div className="product-image">
                      <img
                        src="/assets/images/products/RO-Water-Purifier.png"
                        alt="Smart RO Purifier"
                      />
                    </div>
                    <div className="product-info">
                      <span className="category">Water Purification</span>
                      <h4 className="title">
                        <Link href="/products">Smart RO Purifier</Link>
                      </h4>
                      <ul className="review">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <span>5.0 Review(s)</span>
                        </li>
                      </ul>
                      <div className="price">
                        <span>{formatPrice(199.0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="single-product">
                    <div className="product-image">
                      <img
                        src="/assets/images/products/HEPA-Air-Filter.jpeg"
                        alt="HEPA Air Filter"
                      />
                    </div>
                    <div className="product-info">
                      <span className="category">Air Filtering</span>
                      <h4 className="title">
                        <Link href="/products">HEPA Air Filter</Link>
                      </h4>
                      <ul className="review">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star"></i>
                        </li>
                        <li>
                          <span>4.0 Review(s)</span>
                        </li>
                      </ul>
                      <div className="price">
                        <span>{formatPrice(149.0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="single-product">
                    <div className="product-image">
                      <img
                        src="/assets/images/products/Digital-Soil-Meter.jpeg"
                        alt="Digital Soil Meter"
                      />
                    </div>
                    <div className="product-info">
                      <span className="category">Agriculture</span>
                      <h4 className="title">
                        <Link href="/products">Digital Soil Meter</Link>
                      </h4>
                      <ul className="review">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <span>5.0 Review(s)</span>
                        </li>
                      </ul>
                      <div className="price">
                        <span>{formatPrice(89.0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="offer-content"
                style={{
                  backgroundColor: "#f4f7fa",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  padding: "80px 50px",
                }}
              >
                <div
                  className="text"
                  style={{ position: "static", transform: "none" }}
                >
                  <h2>Solar Irrigation System</h2>
                  <p>
                    Eco-friendly irrigation solution <br />
                    for modern sustainable farming.
                  </p>
                  <div className="price">
                    <span>{formatPrice(899.0)}</span>
                  </div>
                  <div className="button">
                    <Link href="/products" className="btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="offer-sidebar">
                <div className="single-offer">
                  <div className="offer-image">
                    <img
                      src="/assets/images/products/Pro-Air-Station.jpeg"
                      alt="Pro Air Station"
                    />
                    <span className="sale-tag">-50%</span>
                  </div>
                  <div className="offer-info">
                    <h4>Pro Air Station</h4>
                    <ul className="review">
                      <li>
                        <i className="lni lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni lni-star-filled"></i>
                      </li>
                      <li>
                        <span>5.0 Review(s)</span>
                      </li>
                    </ul>
                    <div className="price">
                      <span className="discount-price">
                        {formatPrice(499.0)}
                      </span>
                      <span className="regular-price">
                        {formatPrice(998.0)}
                      </span>
                    </div>
                    <p>
                      Advanced multi-stage filtration system for large
                      commercial spaces.
                    </p>
                  </div>
                  <div
                    className="box-head"
                    style={{ display: isEventEnded ? "none" : "flex" }}
                  >
                    <div className="box">
                      <h1 id="days">{timeLeft.days}</h1>
                      <h4>Days</h4>
                    </div>
                    <div className="box">
                      <h1 id="hours">{timeLeft.hours}</h1>
                      <h4>Hours</h4>
                    </div>
                    <div className="box">
                      <h1 id="minutes">{timeLeft.minutes}</h1>
                      <h4>Minutes</h4>
                    </div>
                    <div className="box">
                      <h1 id="seconds">{timeLeft.seconds}</h1>
                      <h4>Seconds</h4>
                    </div>
                  </div>
                  <div
                    className="event-ended-banner"
                    style={{ display: isEventEnded ? "block" : "none" }}
                  >
                    <h2>We are sorry, Event ended!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Special Offer Area */}

      {/* Start Product Lists Area */}
      <section
        className="home-product-lists section"
        style={{ padding: "60px 0", borderTop: "1px solid #eee" }}
      >
        <div className="container">
          <div className="row">
            <HomeProductList title="Best Sellers" products={bestSellers} />
            <HomeProductList title="New Arrivals" products={newArrivals} />
            <HomeProductList title="Top Rated" products={topRated} />
          </div>
        </div>
      </section>
      {/* End Product Lists Area */}

      {/* Start Popular Brands Area */}
      <PopularBrands />
      {/* End Popular Brands Area */}

      {/* Start Call Action Area */}
      <section className="call-action section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              <div className="inner">
                <div className="content">
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Need Help Choosing?
                    <br />
                    Contact our experts today!
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    We provide professional advice on the best systems for your
                    specific requirements, whether it&apos;s for home, office,
                    or agricultural use.
                  </p>
                  <div className="button wow fadeInUp" data-wow-delay=".8s">
                    <Link href="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Call Action Area */}

      {/* Start Shipping Info */}
      <section className="shipping-info">
        <div className="container">
          <ul>
            <li>
              <div className="media-icon">
                <i className="lni lni-delivery"></i>
              </div>
              <div className="media-body">
                <h5>Free Shipping</h5>
                <span>On order over {formatPrice(99)}</span>
              </div>
            </li>
            <li>
              <div className="media-icon">
                <i className="lni lni-support"></i>
              </div>
              <div className="media-body">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            <li>
              <div className="media-icon">
                <i className="lni lni-credit-cards"></i>
              </div>
              <div className="media-body">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            <li>
              <div className="media-icon">
                <i className="lni lni-reload"></i>
              </div>
              <div className="media-body">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
