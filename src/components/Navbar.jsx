import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🚗 Motors
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cars" className="nav-link">
            Carros
          </Link>
          <Link to="/about-us" className="nav-link">
            Sobre
          </Link>
          <Link to="/calculator" className="nav-link">
            Calculadora
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
