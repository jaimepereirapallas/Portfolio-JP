import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assets/img/self.jpg"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
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
                  I'm a passionate and highly motivated IT Engineer currently completing my Bachelor's degree in Computer Science at the University of A Coruña, Spain. 
                  I thrive on solving complex problems, embracing innovation, and constantly expanding my knowledge.
                  </p>
                  <p className="about-description">
                  With a strong foundation in cybersecurity, DevOps, and cloud computing, I’m committed to building impactful, forward-thinking solutions that address real-world challenges. 
                  I take pride in writing clean, efficient code and collaborating within dynamic, goal-driven teams.
                  </p>

                  <p className="about-description">
                  I’m actively seeking new opportunities—whether on-site, remote, or involving travel—and I'm especially interested in roles abroad where I can contribute my skills, creativity, and energy to cutting-edge projects in the global tech space.
                  </p>
                  <p className="about-description">
                  If you're looking for a IT Engineer who’s driven by curiosity and dedicated to making a difference through technology, let’s connect.
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
