import { Col, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa"; // Importa el icono de enlace externo

export const ProjectCard = ({ title, description, imgUrl, repoUrl, button_name }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: '10px' }}>
            <Button 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary"
              className="project-btn-dark"
            >
              {button_name} 🔗 
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
