import React, { useEffect } from 'react';
import './SplashScreen.css';

// Import images from assets folder
// Note: These will use fallbacks if images don't exist or fail to load
import yssLogoImg from '../assets/images/yss_logo_256.png';

// Sun logo import - will show image if it exists, otherwise fallback to styled circle
let sunLogoImg = null;
let suryaTitleImg = null;
try {
  sunLogoImg = require('../assets/images/sun_logo.png');
} catch (e) {
  console.log('Sun logo not found, using fallback');
}
try {
  suryaTitleImg = require('../assets/images/surya_title.png');
} catch (e) {
  console.log('Surya title image not found, using text fallback');
}

const yssLogo = yssLogoImg;
const suryaTitle = suryaTitleImg;
const sunLogo = sunLogoImg;

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
            onError={(e) => {
              // Fallback to styled div if image doesn't exist
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'sun-logo-fallback';
              e.target.parentElement.appendChild(fallback);
            }}
          />
        </div>
      </div>

      {/* Phase 3: Revelation - Logo, Title, Credit (10-13s) */}
      <div className="reveal-container">
        <img
          src={suryaTitle}
          alt="SURYA"
          className="splash-title-img"
          onError={(e) => {
            // Fallback to text if image doesn't exist
            e.target.style.display = 'none';
            const fallback = document.createElement('h1');
            fallback.className = 'splash-title';
            fallback.textContent = 'SURYA';
            e.target.parentElement.insertBefore(fallback, e.target);
          }}
        />

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
