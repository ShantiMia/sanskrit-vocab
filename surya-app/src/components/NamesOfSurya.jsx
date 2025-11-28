import React, { useState } from 'react';
import './NamesOfSurya.css';
import { suryaNames } from '../data/suryaNames';

const NamesOfSurya = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentName = suryaNames[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % suryaNames.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + suryaNames.length) % suryaNames.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="names-of-surya">
      {/* Header */}
      <header className="names-header">
        <button className="back-button-names" onClick={onBack}>
          ← Back
        </button>
        <h1 className="names-title">NAMES OF SURYA</h1>
        <div className="progress-indicator">
          {currentIndex + 1} of {suryaNames.length}
        </div>
      </header>

      {/* Main Card */}
      <div className="card-container">
        <div className={`name-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          {!isFlipped ? (
            // Front of card - Name and basic info
            <div className="card-front">
              <div className="card-number">Name {currentName.id}</div>

              <div className="name-display">
                <h2 className="devanagari-name">{currentName.devanagari}</h2>
                <h3 className="iast-name">{currentName.iast}</h3>
                <p className="pronunciation">{currentName.pronunciation}</p>
              </div>

              <div className="mantra-display">
                <p className="mantra-devanagari">{currentName.mantra}</p>
                <p className="mantra-translation">{currentName.mantraTranslation}</p>
              </div>

              <div className="tap-hint">Tap to explore deeper meaning →</div>
            </div>
          ) : (
            // Back of card - Detailed information
            <div className="card-back">
              <div className="scroll-content">
                <h4 className="section-title">Etymology</h4>
                <div className="etymology-box">
                  <p><strong>Root:</strong> {currentName.etymology.root}</p>
                  <p><strong>Meaning:</strong> {currentName.etymology.meaning}</p>
                  <p className="construction">{currentName.etymology.construction}</p>
                </div>

                <h4 className="section-title">Full Meaning</h4>
                <p className="full-meaning">{currentName.fullMeaning}</p>

                <h4 className="section-title">Contemplation</h4>
                <p className="contemplation">{currentName.contemplation}</p>

                {currentName.scripturalReferences && currentName.scripturalReferences.length > 0 && (
                  <>
                    <h4 className="section-title">Scriptural References</h4>
                    <ul className="references-list">
                      {currentName.scripturalReferences.map((ref, idx) => (
                        <li key={idx}>
                          <strong>{ref.text}</strong>
                          {ref.verses && <span> ({ref.verses})</span>}
                          {ref.description && <p>{ref.description}</p>}
                          {ref.quote && <p className="quote">"{ref.quote}"</p>}
                          {ref.translation && <p className="translation">— {ref.translation}</p>}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="tap-hint">Tap to return →</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button
          className="nav-button nav-previous"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <button
          className="nav-button nav-next"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>

      {/* Progress Dots */}
      <div className="progress-dots">
        {suryaNames.map((_, index) => (
          <button
            key={index}
            className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsFlipped(false);
            }}
            aria-label={`Go to name ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NamesOfSurya;
