import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground';
import GlassIcon from '../components/GlassIcon';
import Icon from '../components/Icon';
import SpotlightCard from '../components/SpotlightCard';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('xwpnqkqy');

  return (
    <div className="contact-page">
      <AuroraBackground className="contact-hero">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </AuroraBackground>

      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="info-title">Get in Touch</h2>
              <p className="info-text">
                Have a question or feedback? We're here to help! Reach out to us through the form 
                or contact us directly.
              </p>
              
              <div className="contact-details">
                <a href="tel:9217017363" className="contact-item">
                  <GlassIcon icon={<Icon name="phone" size={32} />} />
                  <div>
                    <h3>Phone</h3>
                    <p>9217017363</p>
                  </div>
                </a>
                <a href="mailto:pufforanaturals@gmail.com" className="contact-item">
                  <GlassIcon icon={<Icon name="email" size={32} />} />
                  <div>
                    <h3>Email</h3>
                    <p>pufforanaturals@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SpotlightCard className="contact-form-card">
                {state.succeeded ? (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="success-icon">
                      <Icon name="satisfaction" size={64} />
                    </div>
                    <h2>Thank you!</h2>
                    <p>We've received your message and will get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        placeholder="Your message..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="submit-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
