import './AboutUs.css';
import ImageAboutUs from '../assets/img/image.png';
function AboutUs() {
  
  return (
    <section id="AboutUs" className='aboutUs'>
        
        <img src={ImageAboutUs} className="image-aboutUs" alt="Image About Us"></img>
        <div className='aboutUs-info'>
          <h2 className='aboutUs-title'>About us <br></br> <span className='span'>We Help Businesses</span></h2>
          <p className='aboutUs-text'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <a href='/' className='button alinear-izquierda'>More info</a>
        </div>
        
        
    </section>
  );
}

export default AboutUs;