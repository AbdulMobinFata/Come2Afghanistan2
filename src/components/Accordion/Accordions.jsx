import React from "react";
import Accordion from "./Accordion";
import { Container } from "reactstrap";

const Accordions = () => {
  const dataCollections = [
    {
      question: "Is Afghanistan safe ?",
      answer:
        "Yes difinitly, After the withdrawal of the United States and NATO, and the Taliban assuming control, Afghanistan transformed into one of the safest countries and became a popular tourist destination. Please refrain from relying on politically biased media, as they tend to prioritize their political interests over the truth",
    },
    {
      question: "Why to visit Afghanistan ?",
      answer:
        "Consider visiting Afghanistan, where an extraordinary experience awaits you! Discover the warm hospitality of its people, savor delicious local foods and drinks, dine in fantastic restaurants, marvel at breathtaking natural landscapes, explore beautiful mosques, delve into rich history, admire ancient architecture, indulge in shopping for traditional Afghan clothing, exquisite jewelry, artifacts, carpets, and much more. Afghanistan has a wealth of cultural and natural treasures to offer",
    },
    {
      question: "What to pay attention in Afghanistan ?",
      answer:
        "We have authored a dedicated article highlighting essential Afghan laws that demand adherence. This informative piece is readily available in the header section of our website. We encourage you to explore this article for a deeper and more comprehensive insight into the prevailing conditions in the Afghanistan",
    },

    {
      question: "Are tourists safe in Afghanistan ?",
      answer:
        "Certainly, Tourists in Afghanistan, including Americans, Indians, Europeans, Australians, Russians, and everyone else, can feel assured of their safety, to the extent that in the past two years, thousands of travelers have visited the country. Their perspectives and experiences in Afghanistan are shared on their YouTube channels, some of which I have highlighted above. Furthermore, you can continue to explore tourist opinions about Afghanistan on our social media networks",
    },
    {
      question: "How i you contact us and ask my question ?",
      answer:
        "Feel free to reach out to us through the contact links provided in the footer section of our website. We look forward to hearing from you",
    },
  ];

  return (
    <Container>
      <Accordion dataCollections={dataCollections} />
    </Container>
  );
};

export default Accordions;
