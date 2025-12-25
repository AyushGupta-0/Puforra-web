import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import GlassIcon from './GlassIcon';
import './FeatureCard.css';

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SpotlightCard className="feature-card-wrapper">
        <div className="feature-card">
          <GlassIcon icon={icon} />
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default FeatureCard;
