import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="container Contact-container" id="contact">
      {/* Header Section */}
      <div className="row Contact-header">
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <span className="Contact-number">04</span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <span className="Contact-title">Contact</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="Contact-divider" />

      {/* Content Section */}
      <div className="row Contact-content">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h5 className="service-item">
            For new work enquiries or if you just want to say hello — drop me a
            message. Taking on new projects from August.
          </h5>
          <br />
          <h5 className="service-item">rojinssmartin@gmail.com </h5>
          <hr className="service-divider" />
          <h5 className="service-item">+91 94471 07985</h5>
          <hr className="service-divider" />
          <h5 className="service-item">@instagram</h5>
          <hr className="service-divider" />
          <h5 className="service-item">@xtwitter</h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
