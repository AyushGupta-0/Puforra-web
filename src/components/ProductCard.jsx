import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SpotlightCard className="product-card-wrapper">
        <Link to={`/product/${product.slug}`} className="product-card">
          <div className="product-image-wrapper">
            <motion.img
              src="/puffora-product-image.png"
              alt={`${product.flavour} Makhana`}
              className="product-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400/1a5a1a/FFFFFF?text=Puffora+Naturals';
              }}
            />
            <div className="product-image-overlay"></div>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.flavour}</h3>
            <p className="product-description">{product.description.substring(0, 100)}...</p>
            <div className="product-sizes">
              <span className="size-badge">{product.sizes[0].value}</span>
              <span className="size-badge">{product.sizes[1].value}</span>
              <span className="size-badge">{product.sizes[2].value}</span>
            </div>
            <div className="product-price">From {product.sizes[0].price}</div>
            <div className="product-cta">
              <span className="view-product-btn">View Product →</span>
            </div>
          </div>
        </Link>
      </SpotlightCard>
    </motion.div>
  );
}

export default ProductCard;
