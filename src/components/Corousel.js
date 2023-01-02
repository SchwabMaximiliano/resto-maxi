import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const UncontrolledCarousel = () => {
  return (
    <Carousel>
      <div>
          <img src={slide1}  alt="First slide"/>
          <p className="legend">Estacionamiento para clientes</p>
      </div>
      <div>
          <img src={slide2}  alt="Second slide"/>
          <p className="legend">Cafeteria</p>
      </div>
      <div>
          <img src={slide3}  alt="Third slide"/>
          <p className="legend">Te esperamos</p>
      </div>
  </Carousel>
  );
}

export default UncontrolledCarousel;