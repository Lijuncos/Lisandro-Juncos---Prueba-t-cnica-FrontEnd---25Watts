import './Details.css';
import iconAnchor from '../assets/img/Icon-anchor.png';
import iconBandcamp from '../assets/img/Icon-bandcamp.png';
import iconBell from '../assets/img/Icon-bell.png';
import iconBookmark from '../assets/img/Icon-bookmark.png';
import iconBoxOpen from '../assets/img/Icon-box-open.png';
import iconBrush from '../assets/img/Icon-brush.png';
function Details() {
  
  return (
    <section id="Details" className='details-contenedor'>
      <h2>More details</h2>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, 
      id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. 
      Sed scelerisque sodales lorem,
      </p>

      <div className='details'>
        
        <div className='details-icon'>
            <img src={iconAnchor} alt="icon globe"></img>
            <h3>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h3>
        </div>
        <div className='details-icon'>
            <img src={iconBell}alt="icon cloud upload"></img>
            <h3>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h3>
        </div>
        <div className='details-icon'>
            <img src={iconBookmark}alt="icon headset"></img>
            <h3>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h3>
        </div>
        <div className='details-icon'>
            <img src={iconBandcamp}alt="icon user"></img>
            <h3>Donec egestas tortor quis turpis finibus.</h3>
        </div>
        <div className='details-icon'>
            <img src={iconBrush}alt="icon user"></img>
            <h3>Donec egestas tortor quis turpis finibus.</h3>
        </div>
        <div className='details-icon'>
            <img src={iconBoxOpen}alt="icon user"></img>
            <h3>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h3>
        </div>
      </div>
    
    </section>
  );
}

export default Details;