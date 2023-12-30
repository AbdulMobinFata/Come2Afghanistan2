import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaMapMarker,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./footer.css";

const socialMediaLinks = [
  {
    path: "https://www.youtube.com/@Come2Afghanistan2024",
    icon: <FaYoutube style={{ color: "#FF0000" }} />,
    alt: "YouTube",
  },
  // {
  //   path: "https://www.tiktok.com/Come2Afghanistan2024",
  //   icon: (
  //     <FaTiktok style={{ color: "#000000", border: "1px solid #FFFFFF" }} />
  //   ),
  //   alt: "TikTok",
  // },
  {
    path: "https://www.instagram.com/Come2Afghanistan2024",
    icon: <FaInstagram style={{ color: "#FF0000" }} />,
    alt: "Instagram",
  },
  // {
  //   path: "https://www.facebook.com/Come2Afghanistan2024",
  //   icon: <FaFacebook style={{ color: "#1877F2" }} />,
  //   alt: "Facebook",
  // },
  {
    path: "https://wa.me/989335510161",
    icon: <FaWhatsapp style={{ color: "#25D366" }} />,
    alt: "WhatsApp",
  },
  // Add more social media links as needed
];

const quickLinks = [
  { path: "/home", display: "Home" },
  { path: "/attention", display: "Adivce" },
  { path: "/about", display: "About" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer__content">
          <Col lg="4" style={{ marginBottom: "1.3rem" }}>
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                We are the first and only private
                <br />
                tour guide agency company in Afghanistan
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                {socialMediaLinks.map((link, index) => (
                  <span key={index}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.alt}
                      style={{ textAlign: "center" }}
                    >
                      {link.icon}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </Col>
          <Col lg="3" style={{ marginBottom: "1.3rem" }}>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="5">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="contacts__icons">
                    <FaMapMarker />
                  </span>
                  Address:
                </h6>
                <a
                  href="https://www.google.com/maps/place/%D8%B4%D8%B1%DA%A9%D8%AA+%D8%B3%DB%8C%D8%A7%D8%AD%D8%AA%DB%8C+%D9%88+%D8%AA%DA%A9%D8%AA+%D9%81%D8%B1%D9%88%D8%B4%DB%8C+%D8%B1%D8%A7%D8%B4%D8%AF+%D8%A7%D9%85%DB%8C%D8%B1%DB%8C%E2%80%AD/@34.532136,69.1747052,20z/data=!4m15!1m8!3m7!1s0x38d16ec60902da77:0xd7fa01592207a38!2sShahre+Naow,+Kabul,+Afghanistan!3b1!8m2!3d34.5289109!4d69.1715302!16s%2Fg%2F1hc2d5bll!3m5!1s0x38d16f96f32afa6d:0xb48249fb97679223!8m2!3d34.5320225!4d69.1746066!16s%2Fg%2F11k4yp4ry0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-0"
                >
                  Shar-e-Naw, Kabul, Afghanistan
                </a>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="contacts__icons">
                    <FaWhatsapp />
                  </span>
                  Whatsapp:
                </h6>
                <a
                  href="https://wa.me/989335510161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-0"
                >
                  +98 9335510161
                </a>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="contacts__icons">
                    <FaEnvelope />
                  </span>
                  Email:
                </h6>
                <a
                  href="mailto:come2afghanistan_com@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-0"
                >
                  come2afghanistan_com@gmail.com
                </a>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, Designed by AbdulMobin Fata. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
