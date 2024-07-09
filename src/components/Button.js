import React from "react";
import "../components/Button.css";

export const Buttons = ({ className }) => {
  return (
    <div className={`buttons ${className}`}>
      <button className="primary-button">View Details</button>
    </div>
  );
};

export const SecondaryButton = ({ className }) => {
  return (
    <div className={`buttons ${className}`}>
      <button className="signup-button">Sign Up</button>
    </div>
  );
};
