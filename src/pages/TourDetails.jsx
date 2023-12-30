import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./../App.css";

const TourDetails = () => {
  return (
    <section className="tour__details-page">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "67vh" }}
      >
        <div className="text-center">
          <p style={{ fontSize: "3rem" }}>We are updating our website...</p>
          <Button className="btn secondary__btn">
            <Link to="/home">Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TourDetails;
