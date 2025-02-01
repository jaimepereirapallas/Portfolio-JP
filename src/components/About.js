import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assets/img/self.jpg"; // Reemplaza con la ruta de tu foto
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row>
          <Col size={12} className="text-center">
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <img 
              className="profile-img" 
              src={myPhoto} 
              alt="About Me" 
            />
          </Col>
          <Col xs={12} md={8} className="text-center text-md-start">
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <p className="about-description">
                    Hi, I'm Jaime Pereira, a passionate Computer Engineer with a keen interest in databases, web development, and DevOps.
                    With years of experience in the tech field, I've developed strong skills in building efficient and robust systems.
                    I love solving complex problems, collaborating with others, and continuously learning new technologies.
                  </p>
                  <p className="about-description">
                    In my free time, I enjoy exploring new tech trends, working on personal projects, and sharing knowledge with the community.
                    I'm always looking forward to the next challenge and the opportunity to make an impact through technology.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
