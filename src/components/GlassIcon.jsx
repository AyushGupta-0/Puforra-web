import { motion } from 'framer-motion';
import './GlassIcon.css';

function GlassIcon({ icon, label, className = '' }) {
  return (
    <motion.div
      className={`glass-icon ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-icon-container">
        <div className="glass-icon-inner">
          {icon}
        </div>
      </div>
      {label && <span className="glass-icon-label">{label}</span>}
    </motion.div>
  );
}

export default GlassIcon;



