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
              Why Choose Puffora Naturals?
            </motion.h2>
            <div className="features-grid">
              <FeatureCard
                icon={<Icon name="organic" size={32} />}
                title="Organic & Farm Direct"
                description="Directly sourced from trusted farmers, ensuring the freshest and purest makhana."
              />
              <FeatureCard
                icon={<Icon name="packaging" size={32} />}
                title="Premium Packaging"
                description="Premium packaging ensures longer freshness and maintains quality during transit."
              />
              <FeatureCard
                icon={<Icon name="freshness" size={32} />}
                title="Longer Freshness"
                description="Our packaging technology keeps your makhana fresh and crispy for extended periods."
              />
              <FeatureCard
                icon={<Icon name="shipping" size={32} />}
                title="Faster Shipping"
                description="Quick and reliable delivery across regions, ensuring your makhana arrives fresh."
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
            Featured Flavours
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
              View All Products
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
              We are a Delhi-based brand with an innovative mindset, created to fight fake and low-quality 
              makhana in the market. Our mission is to deliver purity and authenticity through direct farmer 
              sourcing, premium packaging, and a customer-first approach.
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
