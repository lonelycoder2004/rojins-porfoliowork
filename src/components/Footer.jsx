import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="container footer-container">
      <hr className="footer-divider" />
      <div className="row footer-content">
        {/* Brand Section */}
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-brand">
          <a href="#home" className="footer-link">
            RSM
          </a>
        </div>

        {/* Navigation Links Section */}
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-links">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#work" className="footer-link">
            Work
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#services" className="footer-link">
            Services
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        {/* Social Links Section */}
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-social">
          <a href="https://twitter.com" className="footer-link">
            X (Twitter)
          </a>
          <a href="https://instagram.com" className="footer-link">
            Instagram
          </a>
          <a href="https://linkedin.com" className="footer-link">
            LinkedIn
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
