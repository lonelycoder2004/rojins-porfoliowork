import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Work.css"; // Import the same CSS file for consistency

function Project({ project }) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={project.image} className="project-image" />
      <Card.Body className="project-body">
        <Card.Title className="project-title">{project.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Project;
