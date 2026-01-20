"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, formatPrice } = useCart();

  const handleAddToCart = (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  }) => {
    addToCart(item);
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Wishlist</h1>
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
                <li>Wishlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="shopping-cart section">
        <div className="container">
          <div className="cart-list-head">
            {/* Wishlist List Title */}
            <div className="cart-list-title">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-3 col-12">
                  <p>Product Name</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Category</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Price</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Action</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <p>Remove</p>
                </div>
              </div>
            </div>
            {/* End Wishlist List Title */}

            {wishlist.length === 0 ? (
              <div className="p-5 text-center">
                <h3>Your wishlist is empty</h3>
                <Link href="/products" className="btn mt-3">Explore Products</Link>
              </div>
            ) : (
              wishlist.map((item) => (
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
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <p>{item.category}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <p>{formatPrice(item.price)}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <button 
                        className="btn btn-sm" 
                        onClick={() => handleAddToCart(item)}
                        style={{ backgroundColor: '#081828', color: '#fff', padding: '8px 15px', borderRadius: '4px' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                      <button className="remove-item" onClick={() => removeFromWishlist(item.id)}>
                        <i className="lni lni-close"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {wishlist.length > 0 && (
            <div className="row">
              <div className="col-12">
                <div className="total-amount">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-12"></div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="right">
                        <div className="button">
                          <Link href="/products" className="btn btn-alt">Continue Shopping</Link>
                          <Link href="/cart" className="btn">View Cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
