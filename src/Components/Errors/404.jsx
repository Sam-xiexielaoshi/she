// import React from 'react'
// import notFound from '../../images/notFound.png'
// import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'
// import sheridelarge from '../../images/sheridelargescreen.jpg'

// const NotFound = () => {
//     return (
//         <>
//             <Navbar />
//             <div className='text-center marginStyle'>
//                 <img src={sheridelarge}  alt='NOT FOUND' />
//                 <h1>
//                     <span className='text-danger fs-1'>Under Process</span><br /> Feature is Currently available on mobile only
//                 </h1>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default NotFound
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import sheridelarge from '../../images/sheridelargescreen.jpg';
import '../../styles/Error.css'; // Import the CSS file

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className="not-found-container">
                <img src={sheridelarge} alt="NOT FOUND" className="not-found-image" />
                <h1 className="not-found-heading">
                    <span className="text-danger fs-1">Under Process</span>
                    <br />
                    
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
