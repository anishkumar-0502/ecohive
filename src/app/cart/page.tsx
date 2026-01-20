"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount, formatPrice } = useCart();

  const shipping = 0;
  const discount = 29.00; // Mock discount for design matching
  const totalPay = totalAmount + shipping - (cart.length > 0 ? discount : 0);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+918870208686";
    let message = "Hello, I would like to place an order for the following products:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity} - Price: ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\nTotal Amount: ${formatPrice(totalPay)}`;
    
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
                <h1 className="page-title">Cart</h1>
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
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="shopping-cart section">
        <div className="container">
          <div className="cart-list-head">
            {/* Cart List Title */}
            <div className="cart-list-title">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-3 col-12">
                  <p>Product Name</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Quantity</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Subtotal</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Discount</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <p>Remove</p>
                </div>
              </div>
            </div>
            {/* End Cart List Title */}

            {cart.length === 0 ? (
              <div className="p-5 text-center">
                <h3>Your cart is empty</h3>
                <Link href="/products" className="btn mt-3">Continue Shopping</Link>
              </div>
            ) : (
              cart.map((item) => (
                <div className="cart-single-list" key={item.id}>
                  <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 col-12">
                      <Link href={`/products/${item.id}`}>
                        <img src={item.image} alt="#" />
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-3 col-12">
                      <h5 className="product-name">
                        <Link href={`/products/${item.id}`}>{item.name}</Link>
                      </h5>
                      <p className="product-des">
                        <span><em>Type:</em> {item.category}</span>
                        <span><em>Color:</em> Black</span>
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <div className="count-input">
                        <select 
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <p>{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <p>{item.id === "1" ? formatPrice(29.00) : "—"}</p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                      <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                        <i className="lni lni-close"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-12">
                    <div className="left">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <input name="Coupon" placeholder="Enter Your Coupon" />
                          <div className="button">
                            <button className="btn">Apply Coupon</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="right">
                      <ul>
                        <li>Cart Subtotal<span>{formatPrice(totalAmount)}</span></li>
                        <li>Shipping<span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></li>
                        <li>You Save<span>{cart.length > 0 ? formatPrice(29.00) : formatPrice(0)}</span></li>
                        <li className="last">You Pay<span>{formatPrice(Math.max(0, totalPay))}</span></li>
                      </ul>
                      <div className="button">
                        <button 
                          onClick={handleWhatsAppOrder} 
                          className="btn whatsapp-btn"
                          disabled={cart.length === 0}
                        >
                          <i className="lni lni-whatsapp"></i> Order via WhatsApp
                        </button>
                        <Link href="/checkout" className="btn">Checkout</Link>
                        <Link href="/products" className="btn btn-alt">Continue Shopping</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
