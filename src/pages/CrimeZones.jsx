import React from "react";
import "../styles/StreetLight.css";
import Navbar from "../Components/Navbar/Navbar";

const DelhiStreetlightMap = () => {
  return (
   
    <div className="map-container">
         <Navbar/>
      <iframe
        src="https://crimedetection-7uvqtecjhkwrbyqvfjkrte.streamlit.app/?embedded=true"
        title="Crime Zones"
        className="map-iframe"
        loading="lazy" // Optimizes performance
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default DelhiStreetlightMap;