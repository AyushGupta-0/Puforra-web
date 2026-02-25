import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from './HeroSlider';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            Healthy Bhi. Tasty Bhi.
          </h1>
          <p className="hero-tagline">
            Authentic Saudi Arabian dates from trusted farms. Every bite reflects purity, tradition, and uncompromised quality — the true royal taste of Arabia.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary">
              Shop Dates
            </Link>
            <Link to="/products" className="btn btn-secondary">
              View Varieties
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-slider-wrap"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
