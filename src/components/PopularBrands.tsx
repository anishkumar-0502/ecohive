"use client";

import React from "react";

const brands = [
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1000px-HP_logo_2012.svg.png" },
  { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Canon_logo.svg/1000px-Canon_logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png" },
  { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1000px-Bosch-logo.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1000px-HP_logo_2012.svg.png" },
  { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Canon_logo.svg/1000px-Canon_logo.svg.png" },
];

const PopularBrands = () => {
  return (
    <section className="brands section" style={{ backgroundColor: "#f9f9f9", padding: "80px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title" style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "28px" }}>Popular Brands</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {brands.map((brand, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6">
              <div className="single-brand" style={{ textAlign: "center", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100px" }}>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "60px", 
                    width: "auto",
                    height: "auto",
                    filter: "grayscale(100%)", 
                    opacity: "0.4",
                    transition: "all 0.3s ease"
                  }} 
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.opacity = "0.4";
                  }}
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/150x50?text=${brand.name}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
