import './App.css';
import 'normalize.css';
import Header from './Header/Header.js';
import Sliders from './Sliders/Sliders.js';
import AboutUs from './AboutUs/AboutUs.js';
import Services from './Services/Services.js';
import Products from './Products/Products.js';
import Details from './Details/Details.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import './assets/fonts/Fonts.css';
import React,{ useState, useEffect } from 'react';

function App() {
  const [header, setHeader] = React.useState(null);

  //Hasta esto llegue a la hora de cargar el contenido de manera asincrona
  React.useEffect(() => {
    async function getData() {
      try {
        const data = await fetch('../data.json');
        const db = await data.json();
        let { header } = db;
        setHeader(header);
        
      } catch (error) {
        console.log(error) 
      }
    } 
    getData();

  }, []);

  function headerBg() {
    const barra = document.querySelector('.header'); 
    const carousel = document.querySelector('.carousel-root');

    window.addEventListener('scroll', function() {
      if( carousel.getBoundingClientRect().top < -150) { 
            barra.classList.add('bg-header');
        } else {
            barra.classList.remove('bg-header');
        }
    });
}
headerBg();

function scrollNav() {
  const enlaces = document.querySelectorAll('.app-nav a');
  enlaces.forEach( enlace => { 
      enlace.addEventListener('click', function(e){
          e.preventDefault(); 

          const seccionScroll = e.target.attributes.href.value;  
          const seccion = document.querySelector(seccionScroll);
          seccion.scrollIntoView({behavior: "smooth"});
      });
  });
}
scrollNav();

  return (
    <div className="app">
      <Header></Header>
      
      <Sliders></Sliders>

      <AboutUs></AboutUs>

      <Services></Services>

      <Products></Products>

      <Details></Details>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
