import React from "react";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import { notFound } from "next/navigation";
import CommentForm from "@/components/CommentForm";

export default async function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">{blog.title}</h1>
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
                  <Link href="/blog">Blog</Link>
                </li>
                <li>{blog.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-inner">
                <div className="post-thumbnils">
                  <img src={blog.image} alt="#" />
                </div>
                <div className="post-details">
                  <div className="detail-inner">
                    <h2 className="post-title">{blog.title}</h2>
                    <ul className="custom-flex post-meta">
                      <li>
                        <span style={{ cursor: "default" }}>
                          <i className="lni lni-user"></i> {blog.author}
                        </span>
                      </li>
                      <li>
                        <span style={{ cursor: "default" }}>
                          <i className="lni lni-calendar"></i> {blog.date}
                        </span>
                      </li>
                      <li>
                        <span style={{ cursor: "default" }}>
                          <i className="lni lni-tag"></i> {blog.category}
                        </span>
                      </li>
                      <li>
                        <span style={{ cursor: "default" }}>
                          <i className="lni lni-timer"></i> {blog.readTime}
                        </span>
                      </li>
                    </ul>
                    <div className="content-body">
                      <p>{blog.content}</p>
                      <blockquote>
                        <div className="icon">
                          <i className="lni lni-quotation"></i>
                        </div>
                        <h4>
                          "Don't demand that things happen as you wish, but wish
                          that they happen as they do happen, and you will go on
                          well."
                        </h4>
                        <span>- Epictetus, The Enchiridion</span>
                      </blockquote>
                      <p>
                        Remove aversion, then, from all things that are not in
                        our control, and transfer it to things contrary to the
                        nature of what is in our control. But, for the present,
                        totally suppress desire: for, if you desire any of the
                        things which are not in your own control, you must
                        necessarily be disappointed; and of those which are, and
                        which it would be laudable to desire, nothing is yet in
                        your possession.
                      </p>
                    </div>
                    <div className="post-social-media">
                      <h5 className="share-title">Share post :</h5>
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
                            <i className="lni lni-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Post Comments */}
                  <div className="post-comments">
                    <h3 className="comment-title">Post Comments</h3>
                    <ul className="comments-list">
                      <li>
                        <div className="comment-img">
                          <img src="/assets/images/avator.jpeg" alt="#" />
                        </div>
                        <div className="comment-desc">
                          <div className="desc-top">
                            <h6>Arista Williamson</h6>
                            <span className="date">19th May 2023</span>
                            <button className="reply-link">
                              <i className="lni lni-reply"></i>Reply
                            </button>
                          </div>
                          <p>
                            This is a very informative article. We've been
                            looking for a reliable RO system for our factory,
                            and this guide helps a lot in understanding the key
                            metrics.
                          </p>
                        </div>
                      </li>
                      <li className="children">
                        <div className="comment-img">
                          <img src="/assets/images/avator.jpeg" alt="#" />
                        </div>
                        <div className="comment-desc">
                          <div className="desc-top">
                            <h6>Rosalina Kelian</h6>
                            <span className="date">15th May 2023</span>
                            <button className="reply-link">
                              <i className="lni lni-reply"></i>Reply
                            </button>
                          </div>
                          <p>
                            Great point about the energy efficiency of modern
                            membranes. It's often overlooked but can make a huge
                            difference in long-term operational costs.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="comment-img">
                          <img src="/assets/images/avator.jpeg" alt="#" />
                        </div>
                        <div className="comment-desc">
                          <div className="desc-top">
                            <h6>Alex Jemmi</h6>
                            <span className="date">12th May 2023</span>
                            <button className="reply-link">
                              <i className="lni lni-reply"></i>Reply
                            </button>
                          </div>
                          <p>
                            Does EcoHive offer installation services for these
                            industrial systems as well?
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <CommentForm />
                </div>
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
}
