// import React from 'react';
// import '../styles/SheRide.css';
// import sheimage from '../images/sherideimg.jpg';
// import Navbar from '../Components/Navbar/Navbar';

// const SheRide = () => {
//   return (
//     <div className="sheride-container">
//       <Navbar />
//       <div className="sheride-image-wrapper">
//         <img src={sheimage} alt="SheRide" className="sheride-image" />
//       </div>
//     </div>
//   );
// };

// export default SheRide;
import React from 'react';
import '../styles/SheRide.css';
import sheimage from '../images/sherideimg.jpg';
import Navbar from '../Components/Navbar/Navbar';
import NotFound from '../Components/Errors/404'; // Import your 404 page
import { useState, useEffect } from 'react';

const SheRide = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to handle screen resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      {isMobile ? (
        <div className="sheride-container">
          <Navbar />
          <div className="sheride-image-wrapper">
            <img src={sheimage} alt="SheRide" className="sheride-image" />
          </div>
        </div>
      ) : (
        <NotFound /> // Render your 404 page for larger screens
      )}
    </div>
  );
};

export default SheRide;
