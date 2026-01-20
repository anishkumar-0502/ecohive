"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface HomeProductListProps {
  title: string;
  products: Product[];
}

const HomeProductList: React.FC<HomeProductListProps> = ({ title, products }) => {
  const { formatPrice } = useCart();

  return (
    <div className="col-lg-4 col-md-4 col-12">
      <div className="section-title" style={{ marginBottom: "30px", textAlign: "center", position: "relative" }}>
        <h2 style={{ fontSize: "20px", paddingBottom: "15px", marginBottom: "0", display: "inline-block", whiteSpace: "nowrap" }}>{title}</h2>
      </div>
      <div className="home-product-list" style={{ paddingLeft: "15px" }}>
        {products.map((product) => (
          <div key={product.id} className="single-list-product" style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
            <div className="list-image" style={{ width: "85px", height: "85px", marginRight: "20px", flexShrink: 0, backgroundColor: "#f9f9f9", borderRadius: "5px", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Link href={`/products/${product.id}`} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/85x85?text=Product";
                  }}
                />
              </Link>
            </div>
            <div className="list-info">
              <h4 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px", lineHeight: "1.2" }}>
                <Link href={`/products/${product.id}`} style={{ color: "#081828" }}>{product.name}</Link>
              </h4>
              <span style={{ color: "#0167F3", fontWeight: "700", fontSize: "14px" }}>{formatPrice(product.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductList;
