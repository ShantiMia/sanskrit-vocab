import React, { useEffect } from 'react';
import './SplashScreen.css';

// Import images from assets folder
import sunLogo from '../assets/images/sun_logo.png';
import suryaTitle from '../assets/images/surya_title.png';
import yssLogo from '../assets/images/yss_logo_256.png';

const SplashScreen = ({ onComplete }) => {
  const handleComplete = () => {
    // Direct transition - no fade-out animation
    if (onComplete) {
      onComplete();
    }
  };

  // Auto-complete after 13 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 13000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSkip = () => {
    handleComplete();
  };

  return (
    <div className="splash-screen">
      {/* Phase 1-2: Sun + Glow rising together (0-5s) */}
      <div className="sun-glow-container">
        <div className="sun-glow"></div>
        <div className="sun-logo-wrapper">
          <img
            src={sunLogo}
            alt="Sun"
            className="sun-logo"
          />
        </div>
      </div>

      {/* Phase 3: Revelation - Logo, Title, Credit (10-13s) */}
      <div className="reveal-container">
        <img
          src={suryaTitle}
          alt="SURYA"
          className="splash-title-img"
        />

        <div className="logo-container">
          <img
            src={yssLogo}
            alt="Yoga Satya Svarupe"
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
