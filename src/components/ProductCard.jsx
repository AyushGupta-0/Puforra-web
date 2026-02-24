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
              src={product.image}
              alt={`${product.name} - Saudi Dates`}
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
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description.substring(0, 100)}...</p>
            <div className="product-sizes">
              {product.sizes.map((s) => (
                <span key={s.value} className="size-badge">{s.value}</span>
              ))}
            </div>
            <div className="product-price">
              {product.sizes[0].price}
              {product.sizes[0].deliveryNote && (
                <span className="product-delivery-note"> {product.sizes[0].deliveryNote}</span>
              )}
            </div>
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
