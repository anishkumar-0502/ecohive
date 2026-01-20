"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import productsData from "@/data/products.json";
import { useCart, Currency } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    cart,
    totalItems,
    totalAmount,
    removeFromCart,
    currency,
    setCurrency,
    formatPrice,
    showNotification,
  } = useCart();

  const { totalItems: totalWishlistItems } = useWishlist();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  }, [pathname]);

  const categories = Array.from(new Set(productsData.map((p) => p.category)));

  const recommendations =
    searchQuery.length > 1
      ? productsData
          .filter((p) => {
            const matchesCategory =
              searchCategory === "All" || p.category === searchCategory;
            const matchesSearch = p.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          })
          .slice(0, 5)
      : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (searchCategory !== "All") params.append("category", searchCategory);

    setShowRecommendations(false);
    router.push(`/products?${params.toString()}`);
  };

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    showNotification("Coming soon");
  };

  return (
    <header className="header navbar-area">
      {/* Start Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="top-left">
                <ul className="menu-top-link">
                  <li>
                    <div className="select-position">
                      <select
                        id="select4"
                        value={currency}
                        onChange={(e) =>
                          setCurrency(e.target.value as Currency)
                        }
                      >
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EURO</option>
                        <option value="CAD">$ CAD</option>
                        <option value="INR">₹ INR</option>
                        <option value="CNY">¥ CNY</option>
                        <option value="BDT">৳ BDT</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="select-position">
                      <select id="select5">
                        <option value="0">English</option>
                        <option value="1">Español</option>
                        <option value="2">Filipino</option>
                        <option value="3">Français</option>
                        <option value="4">العربية</option>
                        <option value="5">हिन्दी</option>
                        <option value="6">বাংলা</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="top-middle"></div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="top-end">
                <div className="user">
                  <i className="lni lni-user"></i>
                  Hello
                </div>
                <ul className="user-login">
                  <li>
                    <Link href="/login" onClick={handleComingSoon}>
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" onClick={handleComingSoon}>
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}

      {/* Start Header Middle */}
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-7">
              <Link className="navbar-brand" href="/">
                <img src="/assets/images/logo/ecohive.png" alt="Logo" />
              </Link>
            </div>
            <div className="col-lg-5 col-md-7 d-xs-none">
              <div className="main-menu-search">
                <form
                  className="navbar-search search-style-5"
                  onSubmit={handleSearch}
                >
                  <div className="search-select">
                    <div className="select-position">
                      <select
                        id="select1"
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                      >
                        <option>All</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowRecommendations(true);
                      }}
                      onFocus={() => setShowRecommendations(true)}
                      onBlur={() =>
                        setTimeout(() => setShowRecommendations(false), 200)
                      }
                    />
                    {showRecommendations && recommendations.length > 0 && (
                      <div className="search-recommendations">
                        <ul>
                          {recommendations.map((item) => (
                            <li key={item.id}>
                              <Link href={`/products/${item.id}`}>
                                <img src={item.image} alt={item.name} />
                                <div className="info">
                                  <h6>{item.name}</h6>
                                  <span>{formatPrice(item.price)}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="search-btn">
                    <button type="submit">
                      <i className="lni lni-search-alt"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 col-5">
              <div className="middle-right-area">
                <div className="nav-hotline">
                  <i className="lni lni-phone"></i>
                  <h3>
                    Hotline:
                    <span>+91 8870208686</span>
                  </h3>
                </div>
                <div className="navbar-cart">
                  <div className="wishlist">
                    <Link href="/wishlist">
                      <i className="lni lni-heart"></i>
                      <span className="total-items">{totalWishlistItems}</span>
                    </Link>
                  </div>
                  <div className="cart-items">
                    <Link href="/cart" className="main-btn">
                      <i className="lni lni-cart"></i>
                      <span className="total-items">{totalItems}</span>
                    </Link>
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>{cart.length} Items</span>
                        <Link href="/cart">View Cart</Link>
                      </div>
                      <ul className="shopping-list">
                        {cart.map((item) => (
                          <li key={item.id}>
                            <button
                              className="remove"
                              title="Remove this item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className="lni lni-close"></i>
                            </button>
                            <div className="cart-img-head">
                              <Link
                                className="cart-img"
                                href={`/products/${item.id}`}
                              >
                                <img src={item.image} alt="#" />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link href={`/products/${item.id}`}>
                                  {item.name}
                                </Link>
                              </h4>
                              <p className="quantity">
                                {item.quantity}x -{" "}
                                <span className="amount">
                                  {formatPrice(item.price)}
                                </span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">
                            {formatPrice(totalAmount)}
                          </span>
                        </div>
                        <div className="button">
                          <Link href="/checkout" className="btn animate">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Middle */}

      {/* Start Header Bottom */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-6 col-12">
            <div className="nav-inner">
              {/* Start Mega Category Menu */}
              <div className="mega-category-menu">
                <span className="cat-button">
                  <i className="lni lni-menu"></i>All Categories
                </span>
                <ul className="sub-category">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link href={`/products?category=${cat}`}>
                        {cat} <i className="lni lni-chevron-right"></i>
                      </Link>
                      <ul className="inner-sub-category">
                        {productsData
                          .filter((p) => p.category === cat)
                          .map((p) => (
                            <li key={p.id}>
                              <Link href={`/products/${p.id}`}>{p.name}</Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Mega Category Menu */}

              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <button
                  className={`navbar-toggler mobile-menu-btn ${
                    isMenuOpen ? "active" : "collapsed"
                  }`}
                  type="button"
                  aria-controls="navbarSupportedContent"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse sub-menu-bar ${
                    isMenuOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={pathname === "/" ? "active" : ""}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`dd-menu ${isSubMenuOpen ? "" : "collapsed"}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSubMenuOpen(!isSubMenuOpen);
                        }}
                        aria-controls="submenu-1-2"
                        aria-expanded={isSubMenuOpen}
                        aria-label="Toggle navigation"
                      >
                        Our Products
                      </a>
                      <ul
                        className={`sub-menu collapse ${
                          isSubMenuOpen ? "show" : ""
                        }`}
                        id="submenu-1-2"
                      >
                        <li className="nav-item">
                          <Link href="/products?category=Water purification and filters">
                            Water purification and filters
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/products?category=Air filtering">
                            Air filtering
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/products?category=Agricultural machineries">
                            Agricultural machineries
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/products" style={{ color: "#0167F3", fontWeight: "600" }}>
                            All Products
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog"
                        className={pathname === "/blog" ? "active" : ""}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/about"
                        className={pathname === "/about" ? "active" : ""}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={pathname === "/contact" ? "active" : ""}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* End Navbar */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-none d-lg-block">
            <div className="nav-social">
              <h5 className="title">Follow Us:</h5>
              <ul>
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
                    <i className="lni lni-skype"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Bottom */}
    </header>
  );
};

export default Header;
