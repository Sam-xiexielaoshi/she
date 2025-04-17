import React from "react";
import "../styles/features.css";
import RideImg from "../images/rideimg.png";
import Emergency from "./../images/Emergency.png";

const Features = () => {
  return (
    <div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">
                AI-Powered Platform built to protect. Designed to empower.
              </p>
              <h2 className="features_title">
                Our one-stop platform is designed to enhance women’s safety. A
                more effective way to track locations and movement. through the
                following features:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/036/259/520/non_2x/ai-generated-wall-mount-cctv-security-camera-isolated-on-transparent-background-free-png.png"
                  alt="Real-Time Crime Detection"
                  width={150}
                  height={130}
                />
                <h3 className="mt-4">Real-Time Crime Detection</h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cartogram_of_2008-2020_US_presidential_elections.svg/350px-Cartogram_of_2008-2020_US_presidential_elections.svg.png"
                  alt="Emergency Service Support"
                  width={150}
                  height={130}
                />
                <h3 className="mt-4">Safety Zone Classification</h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRZGWoeTAPPo4i6atni2P2WFMzL0Wemwb6tspshpYgccJwFM8Gy0WaQzGSWukTD1dIRQ&usqp=CAU"
                  alt="Live Location"
                  width={150}
                  height={130}
                />
                <h3 className="mt-4">Street Lighting Optimization</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-5 ">
                <div className="ft-2 text-center header-img-section">
                  <img
                    src={Emergency}
                    alt="Mail Services"
                    width={150}
                    height={130}
                  />
                  <h3 className="mt-4">Crime Reporting Assistance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
