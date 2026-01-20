import React from "react";
import Link from "next/link";
import blogsData from "@/data/blogs.json";

const BlogGridPage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Blog</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">
                    <i className="lni lni-home"></i> Home
                  </Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section blog-section blog-grid-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="row">
                {blogsData.map((blog) => (
                  <div key={blog.id} className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog">
                      <div className="blog-img">
                        <Link href={`/blog/${blog.id}`}>
                          <img src={blog.image} alt="#" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <Link className="category" href={`/blog/${blog.id}`}>
                          {blog.category}
                        </Link>
                        <h4>
                          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        </h4>
                        <p>{blog.excerpt}</p>
                        <div className="button">
                          <Link href={`/blog/${blog.id}`} className="btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="pagination left blog-grid-page">
                <ul className="pagination-list">
                  <li>
                    <a href="#">Prev</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <aside className="col-lg-4 col-md-12 col-12">
              <div className="sidebar blog-sidebar">
                <div className="widget search-widget">
                  <h5 className="widget-title">Search This Site</h5>
                  <form action="#">
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit">
                      <i className="lni lni-search-alt"></i>
                    </button>
                  </form>
                </div>
                <div className="widget popular-feeds">
                  <h5 className="widget-title">Featured Posts</h5>
                  <div className="popular-feed-loop">
                    {blogsData.slice(0, 3).map((blog) => (
                      <div key={blog.id} className="single-popular-feed">
                        <div className="feed-img">
                          <Link href={`/blog/${blog.id}`}>
                            <img src={blog.image} alt="#" />
                          </Link>
                        </div>
                        <div className="feed-desc">
                          <h6 className="post-title">
                            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                          </h6>
                          <span className="time">
                            <i className="lni lni-calendar"></i> {blog.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="widget categories-widget">
                  <h5 className="widget-title">Top Categories</h5>
                  <ul className="custom">
                    <li>
                      <a href="#">Water Purification</a>
                      <span>(12)</span>
                    </li>
                    <li>
                      <a href="#">Air Filtering</a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="#">Agriculture</a>
                      <span>(15)</span>
                    </li>
                    <li>
                      <a href="#">Sustainability</a>
                      <span>(10)</span>
                    </li>
                    <li>
                      <a href="#">Engineering</a>
                      <span>(7)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget popular-tag-widget">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tags">
                    <a href="#">#Water</a>
                    <a href="#">#AirQuality</a>
                    <a href="#">#Farming</a>
                    <a href="#">#ROSystem</a>
                    <a href="#">#HEPA</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridPage;
