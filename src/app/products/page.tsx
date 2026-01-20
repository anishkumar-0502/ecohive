"use client";

import React, { Suspense, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const ProductsList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const brandFilter = searchParams.get("brand");
  const priceFilter = searchParams.get("price");
  const sortBy = searchParams.get("sort") || "default";

  const categories = useMemo(() => Array.from(new Set(productsData.map(p => p.category))), []);
  const brands = useMemo(() => Array.from(new Set(productsData.map(p => (p as any).brand).filter(Boolean))), []);

  const filteredProducts = useMemo(() => {
    let result = productsData.filter((p) => {
      const matchesCategory = !categoryFilter || p.category === categoryFilter;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !brandFilter || (p as any).brand === brandFilter;
      
      let matchesPrice = true;
      if (priceFilter) {
        const [min, max] = priceFilter.split("-").map(Number);
        if (max) {
          matchesPrice = p.price >= min && p.price <= max;
        } else {
          matchesPrice = p.price >= min;
        }
      }

      return matchesCategory && matchesSearch && matchesBrand && matchesPrice;
    });

    if (sortBy === "price-low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [categoryFilter, searchQuery, brandFilter, priceFilter, sortBy]);

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push("/products");
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Shop</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/"><i className="lni lni-home"></i> Home</Link>
                </li>
                <li>Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="product-grids section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <div className="product-sidebar">
                <div className="single-widget search" style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}>Search Product</h3>
                  <form action="#" style={{ position: "relative" }} onSubmit={(e) => {
                    e.preventDefault();
                    const query = (e.currentTarget.elements.namedItem("search") as HTMLInputElement).value;
                    updateFilters("search", query);
                  }}>
                    <input 
                      name="search" 
                      type="text" 
                      placeholder="Search Here..." 
                      defaultValue={searchQuery || ""} 
                      style={{ width: "100%", height: "45px", padding: "0 50px 0 20px", border: "1px solid #eee", borderRadius: "5px", outline: "none" }}
                    />
                    <button type="submit" style={{ position: "absolute", right: "0", top: "0", height: "45px", width: "45px", background: "none", border: "none", color: "#888", fontSize: "18px" }}><i className="lni lni-search-alt"></i></button>
                  </form>
                </div>

                <div className="single-widget" style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}>All Categories</h3>
                  <ul className="list">
                    <li>
                      <button 
                        onClick={() => updateFilters("category", null)}
                        className={!categoryFilter ? "active-link" : ""}
                        style={{ background: "none", border: "none", padding: "8px 0", textAlign: "left", width: "100%", cursor: "pointer", color: !categoryFilter ? "#0167F3" : "#666", fontSize: "14px", fontWeight: !categoryFilter ? "600" : "500" }}
                      >
                        All Categories
                      </button>
                    </li>
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => updateFilters("category", cat)}
                          className={categoryFilter === cat ? "active-link" : ""}
                          style={{ background: "none", border: "none", padding: "8px 0", textAlign: "left", width: "100%", cursor: "pointer", color: categoryFilter === cat ? "#0167F3" : "#666", fontSize: "14px", fontWeight: categoryFilter === cat ? "600" : "500" }}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="single-widget range" style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}>Price Range</h3>
                  <ul className="list">
                    {[
                      { label: "$0 - $100", value: "0-100" },
                      { label: "$100 - $500", value: "100-500" },
                      { label: "$500 - $1000", value: "500-1000" },
                      { label: "$1000+", value: "1000" },
                    ].map(range => (
                      <li key={range.value}>
                        <button 
                          onClick={() => updateFilters("price", range.value)}
                          style={{ background: "none", border: "none", padding: "8px 0", textAlign: "left", width: "100%", cursor: "pointer", color: priceFilter === range.value ? "#0167F3" : "#666", fontSize: "14px", fontWeight: priceFilter === range.value ? "600" : "500" }}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="single-widget condition" style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}>Filter by Brand</h3>
                  {brands.map(brand => (
                    <div className="form-check" key={brand} style={{ marginBottom: "10px" }}>
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={`brand-${brand}`}
                        checked={brandFilter === brand}
                        onChange={() => updateFilters("brand", brandFilter === brand ? null : brand)}
                        style={{ cursor: "pointer" }}
                      />
                      <label className="form-check-label" htmlFor={`brand-${brand}`} style={{ cursor: "pointer", fontSize: "14px", color: "#666", marginLeft: "5px" }}>
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="single-widget">
                  <button onClick={clearFilters} className="btn btn-alt" style={{ width: "100%" }}>Clear All Filters</button>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-12">
              <div className="product-grids-head">
                <div className="product-grid-topbar" style={{ padding: "15px 25px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "30px", background: "#fff" }}>
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8 col-12">
                      <div className="product-sorting" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                        <label htmlFor="sorting" style={{ marginBottom: "0", marginRight: "15px", whiteSpace: "nowrap", color: "#666", fontSize: "14px" }}>Sort by:</label>
                        <select 
                          className="form-control" 
                          id="sorting"
                          value={sortBy}
                          onChange={(e) => updateFilters("sort", e.target.value)}
                          style={{ width: "200px", height: "40px", fontSize: "14px", border: "1px solid #eee" }}
                        >
                          <option value="default">Default</option>
                          <option value="price-low-high">Low - High Price</option>
                          <option value="price-high-low">High - Low Price</option>
                          <option value="name-asc">A - Z Order</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-start mt-3 mt-md-0">
                        <h3 className="total-show-product" style={{ fontSize: "14px", color: "#666", marginRight: "20px", marginBottom: "0" }}>Showing: <span style={{ fontWeight: "700", color: "#081828" }}>{filteredProducts.length} items</span></h3>
                        <nav>
                          <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{ border: "none" }}>
                            <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true" style={{ padding: "8px 12px", border: "1px solid #eee", marginRight: "5px", borderRadius: "4px" }}><i className="lni lni-grid-alt"></i></button>
                            <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false" style={{ padding: "8px 12px", border: "1px solid #eee", borderRadius: "4px" }}><i className="lni lni-list"></i></button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                    <div className="row justify-content-center">
                      {filteredProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                          <div style={{ width: "100%", maxWidth: "350px", marginBottom: "30px" }}>
                            <ProductCard product={product} />
                          </div>
                        </div>
                      ))}
                      {filteredProducts.length === 0 && (
                        <div className="col-12 text-center p-5">
                          <h3>No products found</h3>
                          <p>Try adjusting your filters or search query.</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                    <div className="row">
                      {filteredProducts.map((product) => (
                        <div key={product.id} className="col-lg-12 col-md-12 col-12">
                          <div className="single-product">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    onError={(e) => {
                                      e.currentTarget.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}`;
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-info">
                                  <span className="category">{product.category}</span>
                                  <h4 className="title">
                                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                                  </h4>
                                  <p className="description">{product.description}</p>
                                  <div className="price">
                                    <span>${product.price.toFixed(2)}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

const ProductsPage = () => {
  return (
    <Suspense fallback={<div className="container p-5 text-center">Loading products...</div>}>
      <ProductsList />
    </Suspense>
  );
};

export default ProductsPage;
