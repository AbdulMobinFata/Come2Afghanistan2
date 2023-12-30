import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./../shared/Subtitle";
import "../styles/home.css";

import heroImg1 from "../assets/images/HomeImages/hero-img-1.jpg";
import heroVideo from "../assets/images/HomeImages/hero-video.mp4";
import heroImg2 from "../assets/images/HomeImages/hero-img-2.jpg";
import worldImg from "../assets/images/HomeImages/world.png";
import experienceImg from "../assets/images/HomeImages/experience.png";

import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTourList/FeaturedTourList";
import MasonryYouTubeGallery from "../components/youtube-gallery/MasonryYouTubeGallery";
import WhatsAppButton from "../shared/WhatsAppButton";
import Accordions from "../components/Accordion/Accordions";

const Home = () => {
  return (
    <>
      {/* Hero section start */}
      <section className="home__section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know before you go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Welcome To Grave of Empires
                  <span className="highlight">"Afghanistan"</span>
                </h1>
                <p>
                  Afghanistan stands out as a nation whose people have
                  demonstrated remarkable resilience against invasions,
                  resulting in prolonged conflicts. Nevertheless, present-day
                  Afghanistan has transformed into one of the safest countries
                  globally, fostering an environment conducive for foreign
                  tourists to explore comfortably.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-1">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video
                  src={heroVideo}
                  alt=""
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ speed: 0.5 }}
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>
      {/* Hero section section end */}
      {/* Services section start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer out best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Services section end */}
      {/* Feature section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">
                Afghanistan most visited places
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* Feature section end */}
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>Ready for Companionship</h2>
                <p>
                  After two years of assisting our Afghan community,
                  <br /> we're now expanding our services
                  <br /> online to help our international guests
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>80K+</span>
                  <h6>Tourists in AFG</h6>
                </div>
                <div className="counter__box">
                  <span>10K+</span>
                  <h6>Loyal clients</h6>
                </div>
                <div className="counter__box">
                  <span>3+</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}
      {/* tourist news section start*/}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Tourist News"} />
              <h2 className="tourist__new-title">
                Brands says about tourism in Afghanistan
              </h2>
            </Col>
            <Col lg="12">
              <TouristNews />
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* tourist news section end */}
      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}></Subtitle>
              <h2 className="gallery__title">
                Tourists who have visited Afghanistan
              </h2>
            </Col>
            <Col lg="12">
              <MasonryYouTubeGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}

      {/* testimonial section start*/}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                Here's what our fans are saying about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* testimonial section end*/}
      {/* newsletter section start*/}
      {/* <Newsletter /> */}
      {/* newletter section end*/}
      {/* Accordion section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Questions"} />
              <h2 className="questions__title">
                Lets answer some of your questions
              </h2>
            </Col>
            <Col lg="12">
              <Accordions />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Accordion section end */}

      {/* Whatsapp icon Start */}
      <WhatsAppButton />
      {/* Whatsapp icon end */}
    </>
  );
};

export default Home;
