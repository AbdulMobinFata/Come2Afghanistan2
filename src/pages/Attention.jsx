import React from "react";
import { Container, Col, Button } from "reactstrap";
import { IoIosRadioButtonOn } from "react-icons/io";
import { Link } from "react-router-dom";

import "../styles/attention.css";

const Attention = () => {
  const items = [
    "People of Afghanistan, who are deeply devoted to Islam, kindly request respect for their religious beliefs.",
    "Please refrain from engaging in activities that violate Islamic laws.",
    "Observing hijab is a necessary condition for both men and women.",
    "Wearing traditional attire is one of the options that should be considered and respected.",
    "Greeting with 'As-salamu alaykum wa rahmatullah' (Peace and blessings be upon you) upon meeting individuals is an ideal option that carries the essence of a smile and respect in various cultures. In response, you can use the islamic reply of 'Wa alaykum as-salam'.",
    "Raising one's hand or placing it over the chest is a sign of respect and a gesture of greeting, specifically for gentlemen. This act can convey a response of warmth and affection, allowing you to express the sentiment of goodwill.",
    "Avoid taking photos or filming government facilities and military vehicles.",
    "Refrain from taking pictures or filming women.",
    "Make sure to obtain the necessary permission from the Ministry of Culture and Information.",
    "The hospitable people of Afghanistan will graciously invite you to their promises of food and tea. Kindly accept their invitation if faced with it, or respectfully decline if you choose not to partake.",
  ];

  return (
    <section>
      <Container>
        <Col>
          <p>
            Afghanistan is a traditional country that adheres to Islamic laws.
            It is essential to be aware of and, upon arrival, observe certain
            mandatory regulations. Prior to your visit, we recommend acquainting
            yourself with these laws to ensure a smooth and respectful
            experience in Afghanistan.
          </p>
          <ul style={{ fontSize: "1.2rem", margin: "3rem" }}>
            {items.map((item, index) => (
              <li key={index}>
                <IoIosRadioButtonOn className="bullet-icon" />
                {item}
              </li>
            ))}
          </ul>
          <Button className="btn primary__btn">
            <Link to="/home">Home</Link>
          </Button>
        </Col>
      </Container>
    </section>
  );
};

export default Attention;
