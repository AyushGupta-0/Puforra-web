import { motion } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground';
import GlassIcon from '../components/GlassIcon';
import Icon from '../components/Icon';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <AuroraBackground className="about-hero">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Puffora Naturals
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Purity, Authenticity, and Premium Quality
          </motion.p>
        </div>
      </AuroraBackground>

      <div className="about-content">
        <div className="container">
          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Our Story</h2>
            <p className="about-text">
              Puffora Naturals is a Delhi-based brand built with an innovative mindset. We observed 
              the growing problem of fake and low-quality makhana flooding the market, compromising 
              on purity and authenticity. This inspired us to create Puffora Naturals - a brand 
              dedicated to delivering the finest quality makhana directly from farmers to your doorstep.
            </p>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-heading">Our Mission</h2>
            <p className="about-text">
              Our mission is simple yet powerful: to fight against fake and low-quality products by 
              focusing on purity and authenticity. We believe that every customer deserves premium 
              quality makhana that is organic, fresh, and packed with care.
            </p>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-heading">What Makes Us Different</h2>
            <div className="features-list">
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassIcon icon={<Icon name="farm" size={32} />} />
                <div>
                  <h3>Direct Farmer Sourcing</h3>
                  <p>We work directly with trusted farmers, ensuring the freshest makhana while supporting local agriculture.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GlassIcon icon={<Icon name="packaging" size={32} />} />
                <div>
                  <h3>Premium Packaging</h3>
                  <p>Our premium packaging ensures longer freshness and maintains the quality of makhana during transit.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassIcon icon={<Icon name="shipping" size={32} />} />
                <div>
                  <h3>Fast Shipping</h3>
                  <p>We ensure quick and reliable delivery across regions, so you can enjoy fresh makhana without delay.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <GlassIcon icon={<Icon name="satisfaction" size={32} />} />
                <div>
                  <h3>Customer-First Approach</h3>
                  <p>Your satisfaction is our priority. We're committed to providing exceptional service and premium quality products.</p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="section-heading">Our Commitment</h2>
            <p className="about-text">
              At Puffora Naturals, we are committed to maintaining the highest standards of quality, 
              purity, and authenticity. Every pack of makhana that reaches you is a testament to our 
              dedication to bringing you the best nature has to offer.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default About;
