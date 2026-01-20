"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cart, totalAmount, formatPrice } = useCart();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postCode: "",
    country: "USA",
    region: "",
    shippingFirstName: "",
    shippingLastName: "",
    shippingEmail: "",
    shippingPhone: "",
    shippingAddress: "",
    shippingCity: "",
    shippingPostCode: "",
    shippingCountry: "USA",
    shippingRegion: "",
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [deliveryOption, setDeliveryOption] = useState("standard");

  const shipping = deliveryOption === "standard" ? 10.5 : 25.0;
  const discount = cart.length > 0 ? 10.0 : 0;
  const subtotal = totalAmount;
  const totalPay = Math.max(0, subtotal + shipping + 10.0 - discount); // Adding $10 as seen in screenshot pricing table

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+918870208686";
    let message = "Hello, I would like to place an order:\n\n";

    message += "*Customer Details:*\n";
    message += `Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}, ${formData.city}, ${formData.postCode}, ${formData.country}\n\n`;

    message += "*Order Summary:*\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity} - Price: ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\n*Total Amount: ${formatPrice(totalPay)}*`;

    const encodedMessage = encodeURIComponent(message);
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
                <h1 className="page-title">Checkout</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">
                    <i className="lni lni-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link href="/products">Shop</Link>
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="checkout-wrapper section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="coming-soon-banner">
                <span className="badge">New Feature</span>
                <h2>Online Payments Coming Soon!</h2>
                <p>
                  We are currently working on integrating secure online payment
                  methods. For now, please complete the form below and click
                  &quot;Confirm Order via WhatsApp&quot; to place your order
                  directly with our team.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="checkout-steps-form-style-1">
                <ul id="accordionExample">
                  {/* Step 1: Personal Details */}
                  <li>
                    <h6
                      className={`title ${activeStep !== 1 ? "collapsed" : ""}`}
                      onClick={() => setActiveStep(1)}
                    >
                      Your Personal Details
                    </h6>
                    <section
                      className={`checkout-steps-form-content collapse ${activeStep === 1 ? "show" : ""}`}
                    >
                      <div className="row form-default">
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>First Name</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Last Name</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Email Address</label>
                            <div className="form-input">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Phone Number</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="single-form">
                            <label>Mailing Address</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="address"
                                placeholder="Mailing Address"
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>City</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Post Code</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="postCode"
                                placeholder="Post Code"
                                value={formData.postCode}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Country</label>
                            <div className="form-input">
                              <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                              >
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Region/State</label>
                            <div className="form-input">
                              <select
                                name="region"
                                value={formData.region}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="single-checkbox checkbox-style-3">
                            <input
                              type="checkbox"
                              id="checkbox-3"
                              defaultChecked
                            />
                            <label htmlFor="checkbox-3">
                              <span></span> My delivery and billing addresses
                              are the same.
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="steps-btn">
                            <button
                              className="btn"
                              onClick={() => setActiveStep(2)}
                            >
                              Next Step
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>

                  {/* Step 2: Shipping Address */}
                  <li>
                    <h6
                      className={`title ${activeStep !== 2 ? "collapsed" : ""}`}
                      onClick={() => setActiveStep(2)}
                    >
                      Shipping Address
                    </h6>
                    <section
                      className={`checkout-steps-form-content collapse ${activeStep === 2 ? "show" : ""}`}
                    >
                      <div className="row form-default">
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>First Name</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingFirstName"
                                placeholder="First Name"
                                value={formData.shippingFirstName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Last Name</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingLastName"
                                placeholder="Last Name"
                                value={formData.shippingLastName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Email Address</label>
                            <div className="form-input">
                              <input
                                type="email"
                                name="shippingEmail"
                                placeholder="Email Address"
                                value={formData.shippingEmail}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Phone Number</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingPhone"
                                placeholder="Phone Number"
                                value={formData.shippingPhone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="single-form">
                            <label>Mailing Address</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingAddress"
                                placeholder="Mailing Address"
                                value={formData.shippingAddress}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>City</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingCity"
                                placeholder="City"
                                value={formData.shippingCity}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-form">
                            <label>Post Code</label>
                            <div className="form-input">
                              <input
                                type="text"
                                name="shippingPostCode"
                                placeholder="Post Code"
                                value={formData.shippingPostCode}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <h6 className="mt-4 mb-3">Select Delivery Option</h6>
                          <div className="delivery-options">
                            <div
                              className={`single-delivery-option ${deliveryOption === "standard" ? "active" : ""}`}
                              onClick={() => setDeliveryOption("standard")}
                            >
                              <img
                                src="/assets/images/shipping/shipping-1.png"
                                alt=""
                                onError={(e) =>
                                  (e.currentTarget.src =
                                    "https://via.placeholder.com/100x30?text=Standard")
                                }
                              />
                              <p>Standard Shipping</p>
                              <span>$10.50</span>
                            </div>
                            <div
                              className={`single-delivery-option ${deliveryOption === "dhl" ? "active" : ""}`}
                              onClick={() => setDeliveryOption("dhl")}
                            >
                              <img
                                src="/assets/images/shipping/shipping-2.png"
                                alt=""
                                onError={(e) =>
                                  (e.currentTarget.src =
                                    "https://via.placeholder.com/100x30?text=DHL")
                                }
                              />
                              <p>DHL Shipping</p>
                              <span>$25.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="steps-btn">
                            <button
                              className="btn btn-alt"
                              onClick={() => setActiveStep(1)}
                            >
                              Previous
                            </button>
                            <button
                              className="btn"
                              onClick={() => setActiveStep(3)}
                            >
                              Save & Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>

                  {/* Step 3: Payment Info */}
                  <li>
                    <h6
                      className={`title ${activeStep !== 3 ? "collapsed" : ""}`}
                      onClick={() => setActiveStep(3)}
                    >
                      Payment Info
                    </h6>
                    <section
                      className={`checkout-steps-form-content collapse ${activeStep === 3 ? "show" : ""}`}
                    >
                      <div className="row form-default">
                        <div className="col-md-12 text-center py-4">
                          <i
                            className="lni lni-construction"
                            style={{
                              fontSize: "48px",
                              color: "#0167F3",
                              marginBottom: "20px",
                              display: "block",
                            }}
                          ></i>
                          <h4>Direct Online Payment is Under Development</h4>
                          <p className="mt-2 mb-4">
                            Our secure payment gateway is currently being set
                            up. Please use the WhatsApp order option for a quick
                            and easy checkout process.
                          </p>
                          <button className="btn" onClick={handleWhatsAppOrder}>
                            <i className="lni lni-whatsapp"></i> Order via
                            WhatsApp Now
                          </button>
                        </div>
                        {/* Hidden card fields for future use */}
                        <div className="col-md-12 d-none"></div>
                      </div>
                    </section>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout-sidebar">
                <div className="checkout-sidebar-coupon">
                  <p>Appy Coupon to get discount!</p>
                  <form action="#">
                    <div className="single-form">
                      <input type="text" placeholder="Coupon Code" />
                      <div className="button">
                        <button className="btn">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="checkout-sidebar-price-table mt-30">
                  <h5 className="title">Pricing Table</h5>
                  <div className="sub-total-price">
                    <div className="total-price">
                      <p className="value">Subtotal Price:</p>
                      <p className="price">{formatPrice(subtotal)}</p>
                    </div>
                    <div className="total-price">
                      <p className="value">Shipping Cost:</p>
                      <p className="price">{formatPrice(shipping)}</p>
                    </div>
                    <div className="total-price">
                      <p className="value">Tax:</p>
                      <p className="price">{formatPrice(10.0)}</p>
                    </div>
                    <div className="total-price discount">
                      <p className="value">Discount:</p>
                      <p className="price">-{formatPrice(discount)}</p>
                    </div>
                  </div>
                  <div className="total-payable">
                    <div className="payable-price">
                      <p className="value">Total Payable:</p>
                      <p className="price">{formatPrice(totalPay)}</p>
                    </div>
                  </div>
                  <div className="price-table-btn button mt-4">
                    <button className="btn" onClick={handleWhatsAppOrder}>
                      Checkout
                    </button>
                  </div>
                </div>
                <div className="checkout-sidebar-banner mt-30">
                  <Link
                    href="/products"
                    style={{ position: "relative", display: "block" }}
                  >
                    <img src="/assets/images/hero/slider-bg2.png" alt="#" />
                    <div
                      className="content"
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        color: "#fff",
                      }}
                    >
                      <h6 style={{ color: "#fff" }}>Tablets, Smartphones</h6>
                      <h4 style={{ color: "#fff" }}>UP TO 50% Off</h4>
                      <button
                        className="btn btn-sm mt-2"
                        style={{
                          padding: "5px 15px",
                          fontSize: "12px",
                          background: "#fff",
                          color: "#081828",
                        }}
                      >
                        Shop Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
