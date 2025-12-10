import React, { useState } from 'react';
import './WelcomeScreen.css';
import AboutModal from './AboutModal';
import yssLogoImg from '../assets/images/yss_logo_256.png';

const WelcomeScreen = ({ onSelectSection }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        {/* Main Title */}
        <header className="welcome-header">
          {/* YSS Logo */}
          <div className="welcome-logo-container">
            <img
              src={yssLogoImg}
              alt="Yoga Satya Svarupe"
              className="welcome-logo"
              onError={(e) => {
                // Hide if image doesn't load
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h1 className="app-title embossed-text">SURYA</h1>
          <p className="app-subtitle">The Twelve Names of the Sun</p>
        </header>

        {/* Main Menu */}
        <nav className="main-menu">
          <button
            className="menu-button embossed-button"
            onClick={() => onSelectSection('names')}
          >
            <span className="menu-icon">📖</span>
            <span className="menu-text">
              <strong>Study the Names</strong>
              <small>Explore the 12 sacred names of Surya</small>
            </span>
          </button>

          <button
            className="menu-button embossed-button"
            onClick={() => onSelectSection('practice')}
          >
            <span className="menu-icon">🧘</span>
            <span className="menu-text">
              <strong>Surya Namaskar</strong>
              <small>Practice the sun salutation sequence</small>
            </span>
          </button>
        </nav>

        {/* Sanskrit Quote */}
        <div className="welcome-quote">
          <p className="quote-sanskrit">सूर्यो भगवान्</p>
          <p className="quote-translation">Sūryo Bhagavān - The Sun is the Divine</p>
        </div>
      </div>

      {/* Info/About Button - Bottom Left */}
      <button
        className="info-button"
        onClick={() => setShowAbout(true)}
        aria-label="About this app"
      >
        <span className="info-icon">ℹ️</span>
        <span className="info-text">About</span>
      </button>

      {/* About Modal */}
      <AboutModal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </div>
  );
};

export default WelcomeScreen;
