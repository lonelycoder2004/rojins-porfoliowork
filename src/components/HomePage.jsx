import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css"; // Import custom CSS

function HomePage() {
  return (
    <div className="container homepage-container" id="home">
      {/* First Section: Name */}
      <div className="row name-section col-sm-12">
        <span>Rojins S Martin</span>
      </div>
      <hr className="divider" />

      {/* Second Section: Title */}
      <div className="row title-section col-sm-12">
        <span>Freelance Designer</span>
      </div>
      <hr className="divider" />

      {/* Third Section: Description and Download Icon */}
      <div className="row description-section">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <p>
            "Since 2018, I've been designing modern, interactive experiences and
            bringing ideas to life. As the Design Co-lead at IEEE SB AJCE and
            Designer at GDG AJCE, I combine creativity and technical expertise
            to craft playful brands and impactful digital products. Open to new
            projects starting this August!"
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 icon-container">
          <img
            src={"src/assets/icons/download-solid.svg"} // Update the path to your icon
            alt="Download"
            className="download-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
