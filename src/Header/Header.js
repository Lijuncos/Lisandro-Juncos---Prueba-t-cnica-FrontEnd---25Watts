import './Header.css';
import logo from '../assets/img/logo_25w.svg';
function Header() {
  
  return (
    <header className="header">
      <div className='contenedor'>
        <a href="/">
            <img src={logo} className="app-logo" alt="logo"></img>
        </a>

        <nav className="app-nav">
            <a href="#home">Home</a>
            <a href="#AboutUs">About us</a>
            <a href="#Services">Services</a>
            <a href="#Products">Products</a>
            <a href="#Details">Details</a>
            <a href="#Contact">Contact</a>
        </nav>
      </div>
        
    </header>
  );
}

export default Header;