import React from "react";
import { Container } from "reactstrap";

const EmbeddedArticle = () => {
  return (
    <Container>
      <iframe
        title="EmbeddedArticle1"
        src="https://www.independent.co.uk/travel/news-and-advice/afghanistan-travel-holidays-taliban-safety-2024-b2455396.html"
        width="450"
        height="300"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>

      <iframe
        title="EmbeddedArticle2"
        src="https://www.ariananews.af/afghanistan-a-surprise-best-seller-destination-for-british-travel-agency/" // Replace with the URL of the second article
        width="450"
        height="300"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </Container>
  );
};

export default EmbeddedArticle;
