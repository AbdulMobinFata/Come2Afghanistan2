import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I'm Steph I'm from the Netherlands and it's my second time in
          Afghanistan I was here last year as well and now I'm back for the
          second time. the people of Afghanistan are amazing they are very kind
          hospitable and very welcoming and the situation has ever been safer in
          Afghanistan. you can walk around you don't have to be afraid it's just
          overall a very safe place to be right now the I wouldn't say there's a
          lot different the secur the situation was very safe last year and it's
          still very safe now I feel like everything has been like more
          established it's maybe even smoother in a lot of Senses so in overall
          it's only it's only become better even though it was already very good
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
        </div>
        <div>
          <h6 className="mb-0 mt-3">John Doe</h6>
          <p>Customer</p>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          necessitatibus exercitationem tempore ad officiis repellendus itaque
          odio vero provident facilis rerum iure sint tempora commodi voluptatum
          dolore, dolor voluptates optio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
        </div>
        <div>
          <h6 className="mb-0 mt-3">Ali</h6>
          <p>Customer</p>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          necessitatibus exercitationem tempore ad officiis repellendus itaque
          odio vero provident facilis rerum iure sint tempora commodi voluptatum
          dolore, dolor voluptates optio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
        </div>
        <div>
          <h6 className="mb-0 mt-3">Asad</h6>
          <p>Customer</p>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
