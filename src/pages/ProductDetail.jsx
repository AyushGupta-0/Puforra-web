import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import products from '../data/products';
import SizeSelector from '../components/SizeSelector';
import WhatsAppButton from '../components/WhatsAppButton';
import AuroraBackground from '../components/AuroraBackground';
import GlassIcon from '../components/GlassIcon';
import Icon from '../components/Icon';
import './ProductDetail.css';

function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0].value || '50g');

  const highlights = [
    { icon: 'organic', label: 'Organic' },
    { icon: 'farm', label: 'Farm Direct' },
    { icon: 'premium', label: 'Premium Quality' },
    { icon: 'shelfLife', label: 'Long Shelf Life' },
    { icon: 'shipping', label: 'Fast Shipping' },
  ];

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <p>Product not found</p>
          <button onClick={() => navigate('/products')}>Back to Products</button>
        </div>
      </div>
    );
  }

  return (
    <AuroraBackground className="product-detail-wrapper">
      <div className="product-detail">
        <div className="container">
          <motion.button
            className="back-button"
            onClick={() => navigate('/products')}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Products
          </motion.button>

          <div className="product-detail-content">
            <motion.div
              className="product-image-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-image-container">
                <motion.img
                  src="/puffora-product-image.png"
                  alt={`${product.flavour} Makhana`}
                  className="product-image-large"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x600/1a5a1a/FFFFFF?text=Puffora+Naturals';
                  }}
                />
                <div className="product-image-shadow"></div>
              </div>
            </motion.div>

            <motion.div
              className="product-info-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="product-detail-name">{product.flavour}</h1>
              <p className="product-detail-description">{product.description}</p>

              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />

              <div className="product-highlights">
                <h3 className="highlights-title">Product Highlights</h3>
                <div className="highlights-grid">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <GlassIcon
                        icon={<Icon name={highlight.icon} size={24} />}
                        label={highlight.label}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <WhatsAppButton flavour={product.flavour} size={selectedSize} />
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

export default ProductDetail;
