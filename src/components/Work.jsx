import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project.jsx";
import proimg1 from "../assets/icons/Project1.png";
import "./Work.css";

function Work() {
  const project = [
    {
      image: proimg1,
      name: "Ai Recommender",
    },
    {
      image: proimg1,
      name: "Ai Recommender",
    },
    {
      image: proimg1,
      name: "Ai Recommender",
    },
  ];

  return (
    <div className="container work-container" id="work">
      {/* First Row: Number and Title */}
      <div className="row work-header">
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <span className="work-number">01</span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <span className="work-title">Work</span>
        </div>
      </div>

      {/* Divider */}

      <hr className="work-divider" />

      {/* Projects Grid */}
      <div className="row work-projects">
        {project.map((value, index) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={index}>
              <Project project={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
