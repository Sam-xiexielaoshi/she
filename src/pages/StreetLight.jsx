import React from "react";
import "../styles/StreetLight.css";
import Navbar from "../Components/Navbar/Navbar";

const DelhiStreetlightMap = () => {
  return (
   
    <div className="map-container">
         <Navbar/>
      <iframe
        src="https://delhi-streetlight-map.streamlit.app/?embedded=true"
        title="Delhi Streetlight Map"
        className="map-iframe"
        loading="lazy" // Optimizes performance
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default DelhiStreetlightMap;

// import React from 'react'
// import Error from '../Components/Errors/404'

// const StreetLight = () => {
//   return (
//     <div>
//       <Error/>
//     </div>
//   )
// }

// export default StreetLight
