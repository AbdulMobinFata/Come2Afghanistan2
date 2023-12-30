import React from "react";
import { Container, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./../App.css";

const About = () => {
  return (
    <section>
      <Container>
        <Col>
          <h3 style={{ color: "black" }}>Come2Afghanistan Tour Agency</h3>
          <p style={{ fontSize: "1.2rem", margin: "2rem" }}>
            With pride and unwavering commitment, our company has proudly
            delivered exceptional in-person services to our esteemed fellow
            Afghans over the past two years, establishing itself as a leader in
            the tourism industry. Praise be to God that the current security
            situation in our country has reached a level where fear is no longer
            present in the minds of both domestic and foreign tourists. This
            prevailing sense of security and tranquility has inspired travelers
            to embark on explorations and discover the unforgettable and
            beautiful regions our country has to offer. Our dedicated team,
            fully committed to customer service, diligently addresses any
            potential challenges that may arise in understanding and connecting
            with local communities. We are steadfastly moving towards enhancing
            our services and improving the overall experience for tourists. Our
            pride lies in accompanying you on a journey that goes beyond
            expectations, where every moment transforms into a new page of
            history and culture. As your dedicated companion on this
            unforgettable journey, we go the extra mile to provide unique
            experiences and transformative services. We take great pride in
            guiding you through an extraordinary and distinctive travel
            experience, offering amazing services that make your journey unlike
            any other.
          </p>
          <Button className="btn primary__btn">
            <Link to="/home">Home</Link>
          </Button>
        </Col>
      </Container>
    </section>
  );
};

export default About;
