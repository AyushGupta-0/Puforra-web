import { motion } from 'framer-motion';
import Icon from './Icon';
import './WhatsAppButton.css';

function WhatsAppButton({ flavour, size }) {
  const message = encodeURIComponent(
    `Hi, I would like to buy Puffora Naturals - ${flavour} (${size}).`
  );
  const whatsappUrl = `https://wa.me/9217017363?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(37, 211, 102, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon name="whatsapp" size={20} />
      Get Now on WhatsApp
    </motion.a>
  );
}

export default WhatsAppButton;
