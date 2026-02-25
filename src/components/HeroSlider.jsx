import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSlider.css';

const SLIDES = [
  { src: '/WhatsApp Image 2026-02-25 at 14.28.37.jpeg', alt: 'Puffora Naturals Premium Dates' },
  { src: '/WhatsApp Image 2026-02-25 at 14.28.49.jpeg', alt: 'Puffora Naturals Premium Dates' },
  { src: '/WhatsApp Image 2026-02-25 at 14.29.07.jpeg', alt: 'Puffora Naturals Premium Dates' },
];

const AUTO_PLAY_MS = 5000;
const SWIPE_THRESHOLD = 50;

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goTo = useCallback((nextIndex) => {
    setIndex((prev) => {
      if (nextIndex < 0) return SLIDES.length - 1;
      if (nextIndex >= SLIDES.length) return 0;
      return nextIndex;
    });
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, []);

  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="hero-slider"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero-slider-track">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="hero-slider-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              className="hero-slider-image"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-slider-arrow hero-slider-next"
        onClick={goNext}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-slider-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-slider-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
