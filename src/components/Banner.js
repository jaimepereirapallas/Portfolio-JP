import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { GoCopy } from 'react-icons/go';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;
  const email = "jpereira.contacto@gmail.com"; // Reemplaza con tu correo electrónico
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000); 
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Jaime Pereira`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]' style={{ display: 'block' }}><span className="wrap">{text}</span></span></h1>
                  <p>I'm not a robot<br />I'm a TI Engineer with a passion for databases, web development, and DevOps.</p>
                  <button className="button-lets" ref={buttonRef} onClick={() => setShowPopup(!showPopup)}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  {showPopup && (
                    <div
                      ref={popupRef}
                      className="popup"
                      style={{
                        position: "absolute",
                        top: buttonRef.current.offsetTop,
                        left: buttonRef.current.offsetLeft + buttonRef.current.offsetWidth + 10,
                      }}
                    >
                      <div className="email-container"> {/* Contenedor para el email y el botón */}
                        <p>{email}</p>
                        <button onClick={handleCopyEmail} className="copy-button" aria-label="Copy email" title="Copy email to clipboard" >
                        <GoCopy size={20} />
                        </button>
                      </div>
                      {showConfirmation && <p className="confirmation">Email copied!</p>}
                    </div>
                  )}
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
