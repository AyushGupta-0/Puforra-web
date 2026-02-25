import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">Puffora Naturals</span>
          </Link>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link" onClick={closeMenu}>Products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      )}
    </>
  );
}

export default Navbar;

