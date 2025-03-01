import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

function Services() {
  return (
    <div className="container Services-container" id="services">
      {/* Header Section */}
      <div className="row Services-header">
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <span className="Services-number">03</span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <span className="Services-title">Services</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="Services-divider" />

      {/* Content Section */}
      <div className="row services-content">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h5 className="service-item">Brand Design</h5>
          <hr className="service-divider" />
          <h5 className="service-item">Visual Design</h5>
          <hr className="service-divider" />
          <h5 className="service-item">Web Development</h5>
          <hr className="service-divider" />
          <h5 className="service-item">App Development</h5>
          <hr className="service-divider" />
          <h5 className="service-item">Digital Product Design</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;
