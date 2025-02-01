import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      repoUrl: "https://github.com/user/repo1",
      button_name: "Ver en github",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      repoUrl: "https://github.com/user/repo2",
      button_name: "Ver en github",
    },
  ];

  const projectsTab2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      button_name: "Ver en github",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      button_name: "Ver en github",
    },
  ];

  const projectsTab3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      button_name: "Ver en github",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      button_name: "Ver en github",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectsTab1.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectsTab2.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projectsTab3.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
}
