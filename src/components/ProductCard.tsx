"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, formatPrice } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="single-product" style={{ width: "100%" }}>
      <div className="product-image" style={{ height: "280px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f9", position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxHeight: "240px", width: "auto", objectFit: "contain" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}`;
          }}
        />
        <div className="wishlist-btn" style={{ position: "absolute", top: "15px", right: "15px", zIndex: "5" }}>
          <button 
            onClick={toggleWishlist} 
            style={{ 
              background: "white", 
              border: "none", 
              borderRadius: "50%", 
              width: "35px", 
              height: "35px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              color: isFavorite ? "#f44336" : "#888",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.3s ease"
            }}
            title={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <i className={isFavorite ? "lni lni-heart-filled" : "lni lni-heart"}></i>
          </button>
        </div>
        <div className="button">
          <button onClick={() => addToCart(product)} className="btn">
            <i className="lni lni-cart"></i> Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h4 className="title">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
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
          <span>{formatPrice(product.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
