import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import AuroraBackground from '../components/AuroraBackground';
import products from '../data/products';
import './Products.css';

function Products() {
  return (
    <div className="products-page">
      <AuroraBackground className="products-hero">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium Makhana in Delicious Flavours
          </motion.p>
        </div>
      </AuroraBackground>

      <div className="products-content">
        <div className="container">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;
