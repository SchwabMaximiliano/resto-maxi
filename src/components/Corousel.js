import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import './styles.css';

export const UncontrolledCarousel = () => {
  return (/*
    <Carousel>
      <Carousel.Item>
        <img classNameName="" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Descripcion 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  classNameName="" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Descripcion 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img classNameName="" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Descripcion 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>*/
    <div  >
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-70 h-70" 
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70 h-70"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70 h-70"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledCarousel;