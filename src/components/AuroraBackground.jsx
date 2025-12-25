import './AuroraBackground.css';

function AuroraBackground({ children, className = '' }) {
  return (
    <div className={`aurora-background ${className}`}>
      <div className="aurora-orb aurora-orb-1"></div>
      <div className="aurora-orb aurora-orb-2"></div>
      <div className="aurora-orb aurora-orb-3"></div>
      <div className="aurora-orb aurora-orb-4"></div>
      <div className="aurora-gradient"></div>
      <div className="aurora-content">{children}</div>
    </div>
  );
}

export default AuroraBackground;


