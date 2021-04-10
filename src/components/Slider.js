import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


const Slider = () =>{

return(

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/etq1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Get the most out of your product</h3>
      <p>Explore our shoe care solutions.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/etq1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Get the most out of your product</h3>
      <p>Explore our shoe care solutions.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>

);

}





export default Slider;