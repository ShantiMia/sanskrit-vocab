import React, { useEffect } from 'react';
import './AboutModal.css';
import yssLogo from '../assets/images/yss_logo_256.png';

const AboutModal = ({ isOpen, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-logo">
          <img
            src={yssLogo}
            alt="Yoga Satya Svarupe"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="logo-placeholder-modal">YSS</div>';
            }}
          />
        </div>

        <div className="dedication-text">
          <div className="dedication-divider">═══════════════════════════════════════</div>

          <p className="dedication-title">
            This app is dedicated to the vision of<br />
            <strong>Yoga Satya Svarupe</strong>
          </p>

          <p className="dedication-body">
            Inspired by DrG's deep love for the twelve names
            of Surya and the timeless wisdom of Vedanta,
            this offering honours the traditional teachings
            whilst making them accessible to sincere seekers.
          </p>

          <p className="dedication-closing">
            May this serve all who journey towards the light.
          </p>

          <p className="dedication-om">Om Tat Sat</p>

          <div className="dedication-divider">═══════════════════════════════════════</div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
