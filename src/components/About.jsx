import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../assets/icons/ed403d1ec6688303a62f296938a561ee.jpg";
import "./About.css";

function About() {
  return (
    <div className="container about-container" id="about">
      {/* Header Section */}
      <div className="row about-header">
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <span className="about-number">02</span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <span className="about-title">About</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="about-divider" />

      {/* Content Section */}
      <div className="row about-content">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <p className="about-text">
            "Since 2018, I've been passionate about designing brands and visuals
            that leave a mark. My focus is on creating playful yet impactful
            projects that bring ideas to life as unique and memorable digital
            experiences. I enjoy crafting thoughtful designs that reflect a
            brand's personality and values.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <p className="about-text">
            I'm open to new projects starting in August. Whether you're
            launching something fresh or giving an existing brand a new look,
            I'm here to collaborate and make it extraordinary. Let's create
            something that stands out—drop me a message, and let's get started!"
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="row about-image">
        <img src={pic1} alt="Flower" className="about-img" />
      </div>
    </div>
  );
}

export default About;
