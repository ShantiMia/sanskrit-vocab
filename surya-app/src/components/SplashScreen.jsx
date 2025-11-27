import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import yssLogo from '../assets/images/yss_logo_256.png';

const SplashScreen = ({ onComplete }) => {
  const [skipPressed, setSkipPressed] = useState(false);

  // Auto-complete after 7.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!skipPressed) {
        handleComplete();
      }
    }, 7500);

    return () => clearTimeout(timer);
  }, [skipPressed]);

  const handleComplete = () => {
    setSkipPressed(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 500); // Small delay for fade-out animation
  };

  const handleSkip = () => {
    handleComplete();
  };

  return (
    <div className={`splash-screen ${skipPressed ? 'fade-out' : ''}`}>
      {/* Phase 1-2: Sun rising and transforming */}
      <div className="sun-container">
        <div className="sun"></div>
      </div>

      {/* Phase 3: Lotus petals unfold */}
      <div className="lotus-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="lotus-petal"
            style={{
              '--rotation': `${i * 30}deg`,
              '--delay': `${i * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* Phase 4: Revelation - Logo, Title, Credit */}
      <div className="reveal-container">
        <h1 className="splash-title">SURYA</h1>

        <div className="logo-container">
          <img
            src={yssLogo}
            alt="Yoga Satya Svarupe"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="logo-placeholder">YSS</div>';
            }}
          />
        </div>

        <p className="splash-credit">
          by <span className="company-name">Yoga Satya Svarupe</span>
        </p>
      </div>

      {/* Skip button */}
      <button className="skip-button" onClick={handleSkip}>
        Tap to skip
      </button>
    </div>
  );
};

export default SplashScreen;
