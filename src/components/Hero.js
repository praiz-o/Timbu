import React from "react";
import vector from '../images/frame2.png'; // Adjust the path as needed
import "../components/hero.css";
import { Buttons } from './Button'; // Import the button component if you have it separately

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
          <div className="hero-left">
            <div className="text-wrapper">PREMIUM QUALITY!</div>
            <p className="p">We give you a seamless <br/>shopping experience.</p>
            <Buttons/>
          </div>
          <div className="hero-right">
          <img className="vector" alt="Vector" src={vector} />
          </div>
        </div>
        </div>

  );
};
