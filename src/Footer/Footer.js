import './Footer.css';
import logo from '../assets/img/logo_25w.svg';
import iconinstagram from '../assets/img/Icon-instagram.svg';
import iconfacebook from '../assets/img/Icon-facebook.svg';
import icontwitter from '../assets/img/Icon-twitter.svg';
import inconyoutube from '../assets/img/Icon-youtube.svg';
import iconlinkedin from '../assets/img/Icon-linkedin-in.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div>
            <a href="/">
                <img src={logo} alt="logo"></img>
            </a>
            <p className='copyright'>
                2022 &copy; All rights reserved.
            </p>
            </div>
            
            <nav className="app-nav-footer">
                <a href="#AboutUs">About us</a>
                <a href="#Details">Details</a>
                <a href="#Services">Services</a>
                <a href="#Contact">Contact</a>
                <a href="#Products">Products</a>
            </nav>

            <div>
                <p className='follow'>Follow us</p>
                <div className='icon'>
                <img src={iconinstagram} alt="logo"></img>
                <img src={iconfacebook} alt="logo"></img>
                <img src={icontwitter} alt="logo"></img>
                <img src={inconyoutube} alt="logo"></img>
                <img src={iconlinkedin} alt="logo"></img>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

        