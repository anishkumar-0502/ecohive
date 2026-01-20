"use client";

import React, { useState, use } from "react";
import productsData from "@/data/products.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = ({ params }: PageProps) => {
  const { id } = use(params);
  const product = productsData.find((p) => p.id === id);
  const { addToCart, formatPrice } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  if (!product) {
    notFound();
  }

  const isFavorite = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Ensure selectedImage is updated if product changes
  React.useEffect(() => {
    setSelectedImage(product.image);
  }, [product.image]);

  const images = (product as any).images || [product.image];

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">{product.name}</h1>
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
                <li>{product.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="item-details section">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-images">
                  <main id="gallery">
                    <div className="main-img">
                      <img 
                        src={selectedImage} 
                        id="current" 
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/600x600?text=${encodeURIComponent(product.name)}`;
                        }}
                      />
                    </div>
                    <div className="images">
                      {images.map((img: string, index: number) => (
                        <img 
                          key={index}
                          src={img} 
                          className={`img ${selectedImage === img ? 'active' : ''}`} 
                          alt={`${product.name} ${index + 1}`} 
                          onClick={() => setSelectedImage(img)}
                          style={{ cursor: 'pointer', opacity: selectedImage === img ? 1 : 0.6 }}
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/100x100?text=Image+${index + 1}`;
                          }}
                        />
                      ))}
                    </div>
                  </main>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-info">
                  <h2 className="title">{product.name}</h2>
                  <p className="category">
                    <i className="lni lni-tag"></i> {product.category}:
                    <Link href={`/products?category=${encodeURIComponent(product.category)}`}> {product.category}</Link>
                  </p>
                  <h3 className="price">
                    {formatPrice(product.price)}
                    {product.price > 100 && <span>{formatPrice(product.price * 1.1)}</span>}
                  </h3>
                  <p className="info-text">{product.description}</p>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group color-option">
                        <label className="title-label" htmlFor="size">
                          Choose color
                        </label>
                        <div className="single-checkbox checkbox-style-1">
                          <input type="checkbox" id="checkbox-1" defaultChecked />
                          <label htmlFor="checkbox-1">
                            <span></span>
                          </label>
                        </div>
                        <div className="single-checkbox checkbox-style-2">
                          <input type="checkbox" id="checkbox-2" />
                          <label htmlFor="checkbox-2">
                            <span></span>
                          </label>
                        </div>
                        <div className="single-checkbox checkbox-style-3">
                          <input type="checkbox" id="checkbox-3" />
                          <label htmlFor="checkbox-3">
                            <span></span>
                          </label>
                        </div>
                        <div className="single-checkbox checkbox-style-4">
                          <input type="checkbox" id="checkbox-4" />
                          <label htmlFor="checkbox-4">
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <label htmlFor="color">Capacity</label>
                        <select className="form-control" id="color">
                          <option>Standard</option>
                          <option>Premium</option>
                          <option>Industrial</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group quantity">
                        <label htmlFor="qty">Quantity</label>
                        <select 
                          className="form-control" 
                          id="qty"
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value))}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-content">
                    <div className="row align-items-end">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="button cart-button">
                          <button 
                            className="btn" 
                            style={{ width: "100%" }}
                            onClick={() => addToCart(product, quantity)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="wish-button">
                          <button className="btn">
                            <i className="lni lni-reload"></i> Compare
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="wish-button">
                          <button 
                            className="btn"
                            onClick={toggleWishlist}
                            style={{ color: isFavorite ? "#f44336" : "inherit" }}
                          >
                            <i className={isFavorite ? "lni lni-heart-filled" : "lni lni-heart"}></i> {isFavorite ? "Remove" : "To Wishlist"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-info">
            <div className="single-block">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="info-body custom-responsive-margin">
                    <h4>Details</h4>
                    <p>{product.description}</p>
                    <h4>Features</h4>
                    <ul className="features">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="info-body">
                    <h4>Specifications</h4>
                    <ul className="normal-list">
                      <li>
                        <span>Category:</span> {product.category}
                      </li>
                      <li>
                        <span>Product ID:</span> {product.id}
                      </li>
                      <li>
                        <span>Warranty:</span> 1 Year
                      </li>
                      <li>
                        <span>Manufacturer:</span> Global Tech
                      </li>
                    </ul>
                    <h4>Shipping Options:</h4>
                    <ul className="normal-list">
                      <li>
                        <span>Courier:</span> 2 - 4 days, $22.50
                      </li>
                      <li>
                        <span>Local Shipping:</span> up to one week, $10.00
                      </li>
                    </ul>
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

export default ProductDetailsPage;
