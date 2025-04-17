import React from "react";
import "../styles/parallelx.css";
import { Link } from "react-router-dom";
import parallelxImage from "../images/chipi.png";

const Parallelx = () => {
  return (
    <div>
      <section 
        className="more-info-section bg-color"
        style={{
          backgroundImage: `url(${parallelxImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="overlay"></div>
        <section className="container position-relative">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-start">
              <h1 className="common-heading text-capitalize fw-bolder">
                Women Safety Our one and only priority
              </h1>
              <p className="mt-3 mb-5 para-width" style={{ textAlign: "justify" }}>
                Effortlessly oversee your safety, increases your security, and
                empowers you, by introducing features like SOS, SCZ and Street
                Light Opt.
              </p>
              <Link to="/contact" className="btn learn-more-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Parallelx;