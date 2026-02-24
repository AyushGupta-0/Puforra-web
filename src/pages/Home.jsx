import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductSlider from '../components/ProductSlider';
import AuroraBackground from '../components/AuroraBackground';
import Icon from '../components/Icon';
import products from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <Hero />
      
      <section className="features-section">
        <AuroraBackground className="features-aurora">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Our Saudi Dates?
            </motion.h2>
            <div className="features-grid">
              <FeatureCard
                icon={<Icon name="organic" size={32} />}
                title="100% Saudi Origin"
                description="Sourced directly from trusted Arabian farms. Authentic origin, traceable quality."
              />
              <FeatureCard
                icon={<Icon name="premium" size={32} />}
                title="Premium Hand-Selected"
                description="Every date is hand-selected for richness, softness, and natural sweetness."
              />
              <FeatureCard
                icon={<Icon name="freshness" size={32} />}
                title="Naturally Sweet & Chemical-Free"
                description="No additives. Just pure, naturally sweet dates — healthy bhi, tasty bhi."
              />
              <FeatureCard
                icon={<Icon name="packaging" size={32} />}
                title="Hygienically Packed"
                description="Hygienically packed to lock in freshness, nutrition, and authentic taste."
              />
            </div>
          </div>
        </AuroraBackground>
      </section>

      <section className="products-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium Date Varieties
          </motion.h2>
          <ProductSlider products={featuredProducts} />
          <motion.div
            className="view-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/products" className="btn btn-secondary">
              View All Varieties
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="about-snippet">
        <AuroraBackground className="about-aurora">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Puffora Naturals
            </motion.h2>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We bring you authentic Saudi Arabian dates sourced directly from trusted Arabian farms. 
              Every bite reflects purity, tradition, and uncompromised quality. We believe premium should 
              not mean expensive — freshness, nutrition, and authentic taste in every bite.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>
    </div>
  );
}

export default Home;
