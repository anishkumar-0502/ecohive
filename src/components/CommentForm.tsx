"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const CommentForm = () => {
  const { showNotification } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Comment will be updated shortly");
    setFormData({
      name: "",
      email: "",
      website: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="comment-form">
      <h3 className="comment-reply-title">Leave A Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-box form-group">
              <input
                type="text"
                name="website"
                className="form-control form-control-custom"
                placeholder="Website URL"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-box form-group">
              <input
                type="text"
                name="name"
                className="form-control form-control-custom"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-box form-group">
              <input
                type="email"
                name="email"
                className="form-control form-control-custom"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-box form-group">
              <input
                type="text"
                name="phone"
                className="form-control form-control-custom"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-box form-group">
              <textarea
                name="message"
                className="form-control form-control-custom"
                placeholder="Your Comments"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="button">
              <button type="submit" className="btn">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
