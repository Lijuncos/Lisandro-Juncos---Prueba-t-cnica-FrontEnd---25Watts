import './Products.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Products() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <section className='Products-contenedor' id="Products">

      <h2>Products</h2>
      <h3>In eget tortor tempor mollis purus</h3>

      <Slider {...settings}>
        <div className='products-content'>
          <h4 className='products-title'>Aliquam at dui lorem ipsum</h4>
          <ul className='products-text'>
            <li>
              - Ut mattis gravida efficitur.
            </li>
            <li>
              - Ut feugiat vehicula nibh, efficitur laoreet justo.
            </li>
            <li>
              - Molestie id. Integer varius enim sit amet egestas.
            </li>
            <li>
              - Ut mattis gravida efficitur.
            </li>
          </ul>
        </div>

        <div className='products-content'>
          <h4 className='products-title'>Aliquam at dui lorem ipsum</h4>
          <ul className='products-text'>
            <li>
              - Ut mattis gravida efficitur.
            </li>
            <li>
              - Ut feugiat vehicula nibh, efficitur laoreet justo.
            </li>
            <li>
              - Molestie id. Integer varius enim sit amet egestas.
            </li>
            <li>
              - Ut mattis gravida efficitur.
            </li>
          </ul>
        </div>

        <div className='products-content'>
          <h4 className='products-title'>Aliquam at dui lorem ipsum</h4>
          <ul className='products-text'>
            <li>
              - Ut mattis gravida efficitur.
            </li>
            <li>
              - Ut feugiat vehicula nibh, efficitur laoreet justo.
            </li>
            <li>
              - Molestie id. Integer varius enim sit amet egestas.
            </li>
            <li>
              - Ut mattis gravida efficitur.
            </li>
          </ul>
        </div>

        <div className='products-content'>
          <h4 className='products-title'>Sed ut perspiciatis unde omnis</h4>
          <ul className='products-text'>
            <li>
              - Ut mattis gravida efficitur.
            </li>
            <li>
              - Ut feugiat vehicula nibh, efficitur laoreet justo.
            </li>
            <li>
              - Molestie id. Integer varius enim sit amet egestas.
            </li>
            <li>
              - Ut mattis gravida efficitur.
            </li>
          </ul>
        </div>

        <div className='products-content'>
          <h4 className='products-title'>Sed ut perspiciatis unde omnis</h4>
          <ul className='products-text'>
            <li>
              - Ut mattis gravida efficitur.
            </li>
            <li>
              - Ut feugiat vehicula nibh, efficitur laoreet justo.
            </li>
            <li>
              - Molestie id. Integer varius enim sit amet egestas.
            </li>
            <li>
              - Ut mattis gravida efficitur.
            </li>
          </ul>
        </div>
        

      </Slider>

    </section>

    
  );
}

export default Products;