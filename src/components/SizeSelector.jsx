import { motion } from 'framer-motion';
import './SizeSelector.css';

function SizeSelector({ sizes, selectedSize, onSizeChange }) {
  return (
    <div className="size-selector">
      <label className="size-label">Select Size:</label>
      <div className="size-options">
        {sizes.map((size) => (
          <motion.button
            key={size.value}
            className={`size-option ${selectedSize === size.value ? 'selected' : ''}`}
            onClick={() => onSizeChange(size.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="size-value">{size.value}</span>
            <span className="size-price">{size.price}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
