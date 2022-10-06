import './Services.css';
import iconGlobe from '../assets/img/Icon-globe.svg';
import iconUpload from '../assets/img/Icon-cloud-upload.svg';
import iconHeadset from '../assets/img/Icon-headset.svg';
import iconUser from '../assets/img/Icon-user.svg';
function Services() {
  
  return (
    <section id="Services" className='services-contenedor'>
      <h2>Services</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, 
        id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. 
        Sed scelerisque sodales lorem,
      </p>

      <div className='services'>
        
        <div className='service-icon'>
            <img src={iconGlobe} alt="icon globe"></img>
            <h3>Stet clita kasd gubergren</h3>
        </div>
        <div className='service-icon'>
            <img src={iconUpload}alt="icon cloud upload"></img>
            <h3>At vero eos et accusam</h3>
        </div>
        <div className='service-icon'>
            <img src={iconHeadset}alt="icon headset"></img>
            <h3>Sed ut perspiciatis unde</h3>
        </div>
        <div className='service-icon'>
            <img src={iconUser}alt="icon user"></img>
            <h3>Lorem ipsum dolor sit amet</h3>
        
        </div>
      </div>
    
    </section>
  );
}

export default Services;