import React, { useState } from "react";
import { Collapse, Card, CardBody, CardHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css"; // Import your custom CSS file

const Accordion = ({ dataCollections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {dataCollections.map((data, index) => (
        <Card
          key={index}
          className={`accordion-card ${activeIndex === index ? "active" : ""}`}
        >
          <CardHeader
            onClick={() => toggleAccordion(index)}
            className="accordion-header"
          >
            {data.question}
            <span className="accordion-icon">
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
              />
            </span>
          </CardHeader>
          <Collapse isOpen={activeIndex === index}>
            <CardBody className="accordion-body">{data.answer}</CardBody>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default Accordion;
