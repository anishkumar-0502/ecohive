"use client";

import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className="toast-container">
      <div className="toast-content">
        <div className="toast-icon">
          <i className="lni lni-check-mark-circle"></i>
        </div>
        <div className="toast-message">
          <p>{message}</p>
        </div>
        <button className="toast-close" onClick={onClose}>
          <i className="lni lni-close"></i>
        </button>
      </div>
    </div>
  );
};

export default Toast;
