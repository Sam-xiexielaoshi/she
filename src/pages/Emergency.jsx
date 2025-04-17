import React, { useState, useEffect } from "react";
import "../styles/Emergency.css";
import { PiSirenBold } from "react-icons/pi";
import Parallelx from "../Components/Parallelx";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Emergency = () => {
  const [lat, setLat] = useState("28.750699170426167");
  const [long, setLong] = useState("77.11425847562964");

  const handleSubmit = async () => {
    try {
      const templateParams = {
        lat,
        long,
      };

      const response = await emailjs.send(
        "service_3caxrev",     // Replace with your service ID
        "template_0trrulq",    // Replace with your template ID
        templateParams,
        "SToRFNkcqPYwV3Kg8"      // Replace with your EmailJS public key
      );

      console.log("Email sent!", response.status, response.text);
      toast.success("🚨 SOS Email Sent Successfully!");
    } catch (error) {
      console.error("Email sending failed", error);
      toast.error("❌ Failed to send SOS Email");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude.toString());
          setLong(position.coords.longitude.toString());
        },
        () => {
          toast.error("Geolocation denied. Using default coordinates.");
        }
      );
    } else {
      toast.error("Geolocation not supported.");
    }
  };

  useEffect(() => {
    getLocation();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="heightRes">
        <section className="banner_wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center my-5">
                <p className="banner-subtitle">Your Safety, Our Priority</p>
                <h1 className="banner-title mb-5">
                  Help us bring <span>Women Safety</span> to Reality
                </h1>
                <button className="button-30" onClick={handleSubmit}>
                  <PiSirenBold size={200} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Emergency;
