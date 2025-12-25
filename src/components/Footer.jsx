import { Link } from 'react-router-dom';
import GlassIcon from './GlassIcon';
import Icon from './Icon';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Policies</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="footer-contact-icons">
            <a href="tel:9217017363" className="footer-contact-item">
              <GlassIcon icon={<Icon name="phone" size={24} />} />
              <span>9217017363</span>
            </a>
            <a href="mailto:pufforanaturals@gmail.com" className="footer-contact-item">
              <GlassIcon icon={<Icon name="email" size={24} />} />
              <span>pufforanaturals@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Puffora Naturals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
