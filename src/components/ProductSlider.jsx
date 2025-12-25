import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import './ProductSlider.css';

function ProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleCount >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - visibleCount) : prev - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="product-slider">
      <div className="slider-container">
        <motion.button 
          className="slider-btn slider-btn-prev" 
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>
        <div className="slider-wrapper">
          <motion.div
            className="slider-items"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="slider-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.button 
          className="slider-btn slider-btn-next" 
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </motion.button>
      </div>
      <div className="slider-dots">
        {Array.from({ length: Math.ceil(products.length / visibleCount) }).map((_, index) => (
          <motion.button
            key={index}
            className={`slider-dot ${Math.floor(currentIndex / visibleCount) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * visibleCount)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;

