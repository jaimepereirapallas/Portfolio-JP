import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/icons8-github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6} className="text-center text-sm-end d-flex flex-column align-items-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/jaime-pereira-pallas-537515299/" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/jaimepereirapallas" target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="" />
            </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
