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
            Authentic Saudi Dates — Purity, Tradition & Uncompromised Quality
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
              At Puffora Naturals, we bring you authentic Saudi Arabian dates sourced directly from 
              trusted Arabian farms. Every bite reflects purity, tradition, and uncompromised quality — 
              delivering the true royal taste of Arabia to riyal people. We carefully select rich, soft, 
              and naturally sweet dates that are 100% Saudi origin, premium hand-selected, chemical-free, 
              and hygienically packed.
            </p>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-heading">Our Belief</h2>
            <p className="about-text">
              We believe premium should not mean expensive. We ensure freshness, nutrition, and authentic 
              taste in every bite. Healthy bhi. Tasty bhi. That’s the promise behind every pack of Puffora 
              Naturals dates.
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
                <GlassIcon icon={<Icon name="organic" size={32} />} />
                <div>
                  <h3>100% Saudi Origin</h3>
                  <p>Sourced directly from trusted Arabian farms. Authentic origin you can trust.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GlassIcon icon={<Icon name="premium" size={32} />} />
                <div>
                  <h3>Premium Hand-Selected Quality</h3>
                  <p>Every date is hand-selected for richness, softness, and natural sweetness.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassIcon icon={<Icon name="packaging" size={32} />} />
                <div>
                  <h3>Naturally Sweet & Chemical-Free</h3>
                  <p>No additives. Pure, naturally sweet dates — healthy and delicious.</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <GlassIcon icon={<Icon name="shipping" size={32} />} />
                <div>
                  <h3>Hygienically Packed</h3>
                  <p>Hygienically packed to lock in freshness and authentic taste until it reaches you.</p>
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
              At Puffora Naturals, we are committed to bringing you the finest Saudi dates — authentic, 
              fresh, and packed with care. Every pack that reaches you is a testament to our dedication 
              to purity, tradition, and the true royal taste of Arabia.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default About;
