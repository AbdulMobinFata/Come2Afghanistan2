import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import welcomeImg from "../assets/images/HomeImages/welcome.png";
import guideImg from "../assets/images/HomeImages/guide.png";
import customizationImg from "../assets/images/HomeImages/customization.png";

const servicesData = [
  {
    imgUrl: welcomeImg,
    title: "Warmest welcome",
    desc: " The people of Afghanistan are renowned for their warm hospitality, and we extend that tradition to all. We look forward to welcoming you with open arms ",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: " Turning your journey into a personalized and unforgettable experience. With expertise and enthusiasm, we're committed to making your travel exceptional ",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: " Discover personalized travel with us, where every journey is uniquely crafted to suit your preferences and desires. Tailored experiences for your unforgettable adventure await ",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item}></ServiceCard>
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
