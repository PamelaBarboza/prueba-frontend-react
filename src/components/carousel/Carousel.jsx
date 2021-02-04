import React from 'react'
import Slider from "react-slick";
import Banner from "../../img/statics/Banner.jpg"
import "./carousel.css"

const Carousel = () => {
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <img src={Banner} alt="Banner" />
          </div>
        </Slider>
      </div>
    );
}

export default Carousel
