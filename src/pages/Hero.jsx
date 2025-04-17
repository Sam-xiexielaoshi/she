import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import "../../src/App.css";
import heroImage from "../images/fac.png";

const Hero = () => {
  return (
    <div>
      <section className="banner_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 header-img-section">
              <img src={heroImage} alt="Women Safety" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
              <p className="banner-subtitle">
                Empower Her Safety, Ensure Her Freedom.
              </p>
              <h1 className="banner-title">
                Celebrate the power of safety with a platform designed to track
                your position, secure your location, and empower your every step
                you take.
              </h1>
              {/* <div className="learn-more-btn-section">
                <Link to="/emergency" className="sos-button">
                  SOS
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
