import { motion } from 'framer-motion';
import './SpotlightCard.css';

function SpotlightCard({ children, className = '', onClick }) {
  return (
    <motion.div
      className={`spotlight-card ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="spotlight-glow"></div>
      <div className="spotlight-content">{children}</div>
    </motion.div>
  );
}

export default SpotlightCard;



