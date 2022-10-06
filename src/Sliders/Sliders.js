import './Sliders.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Sliders() {
  return (
    <Carousel
      emulateTouch = {true}
      showArrows = {false}
      showThumbs = {false}
    >
        <div id="home" >
            <div className='slider-content'>
              <h3 className='slider-title'>Sed ut perspiciatis unde omnis iste natus</h3>
              <p className='slider-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <a href='/' className='button'>Read more</a>
            </div>
        </div>

        <div id="home2">
            <div className='slider-content'>
              <h3 className='slider-title'>Proin elementum massa etfelis</h3>
              <p className='slider-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <a href='/' className='button'>Read more</a>
            </div>
        </div>
        <div id="home3">
            <div className='slider-content'>
              <h3 className='slider-title'>Nulla rhoncus vulputate congue</h3>
              <p className='slider-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <a href='/' className='button'>Read more</a>
            </div>
        </div>
    </Carousel>
  );
}

export default Sliders;