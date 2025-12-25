import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-wrapper">
      <section className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pure Desi. Pure Munch.
            </motion.h1>
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Organic, farm-direct premium makhana crafted with purity and care.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Explore Flavours
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
