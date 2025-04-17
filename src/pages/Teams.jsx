import React from "react";
import girl1 from "../images/girl1.png";
import girl2 from "../images/girl2.jpg";
import girl3 from "../images/girl3.jpg";
import girl4 from "../images/girl4.jpg";
import "../styles/Teams.css";
import Navbar from "../Components/Navbar/Navbar";

const Teams = () => {
  const developers = [
    {
      name: "Kashish Rajput",
      image: girl1,
      domain: "Cutie",
      github: "https://github.com/kashishrajputt",
    },
    {
      name: "Mushkan Chandravanshi",
      image: girl2,
      domain: "Pookie",
      github: "https://github.com/mushkan200",
    },
    {
      name: "Rio Deb",
      image: girl3,
      domain: "Heart throb",
      github: "https://github.com/riocodez12",
    },
    {
      name: "Samagra Singh",
      image: girl4,
      domain: "Stupid One",
      github: "https://github.com/Sam-xiexielaoshi",
    },
  ];

  return (
    <section className="team-section">
      <Navbar />
      <h2 className="team-title ">Our Team</h2>
      <div className="dev-container">
        {developers.map((dev, index) => (
          <div key={index} className="dev-card">
            <img src={dev.image} alt={dev.name} className="rounded-image" />
            <h3>{dev.name}</h3>
            <p>{dev.domain}</p>
            <a
              href={dev.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
