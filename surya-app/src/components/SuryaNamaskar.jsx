import React, { useState, useEffect } from 'react';
import './SuryaNamaskar.css';

// Import posture images
import pose01 from '../assets/images/postures/pose_01_pranamasana.png';
import pose02 from '../assets/images/postures/pose_02_hasta_uttanasana.png';
import pose03 from '../assets/images/postures/pose_03_pada_hastasana.png';
import pose04 from '../assets/images/postures/pose_04_ashwa_sanchalanasana.png';
import pose05 from '../assets/images/postures/pose_05_dandasana.png';
import pose06 from '../assets/images/postures/pose_06_ashtanga_namaskara.png';
import pose07 from '../assets/images/postures/pose_07_bhujangasana.png';
import pose08 from '../assets/images/postures/pose_08_parvatasana.png';
import pose09 from '../assets/images/postures/pose_09_ashwa_sanchalanasana_left.png';
import pose10 from '../assets/images/postures/pose_10_pada_hastasana.png';
import pose11 from '../assets/images/postures/pose_11_hasta_uttanasana.png';
import pose12 from '../assets/images/postures/pose_12_pranamasana.png';

// Posture data for the 12 poses of Surya Namaskar
const postureData = [
  {
    id: 1,
    sanskritName: "Pranamasana",
    englishName: "Prayer Pose",
    imagePath: pose01,
    defaultDuration: 5
  },
  {
    id: 2,
    sanskritName: "Hasta Uttanasana",
    englishName: "Raised Arms Pose",
    imagePath: pose02,
    defaultDuration: 5
  },
  {
    id: 3,
    sanskritName: "Pada Hastasana",
    englishName: "Hand to Foot Pose",
    imagePath: pose03,
    defaultDuration: 5
  },
  {
    id: 4,
    sanskritName: "Ashwa Sanchalanasana",
    englishName: "Equestrian Pose",
    imagePath: pose04,
    defaultDuration: 5
  },
  {
    id: 5,
    sanskritName: "Dandasana",
    englishName: "Stick Pose",
    imagePath: pose05,
    defaultDuration: 5
  },
  {
    id: 6,
    sanskritName: "Ashtanga Namaskara",
    englishName: "Eight-Limbed Salutation",
    imagePath: pose06,
    defaultDuration: 5
  },
  {
    id: 7,
    sanskritName: "Bhujangasana",
    englishName: "Cobra Pose",
    imagePath: pose07,
    defaultDuration: 5
  },
  {
    id: 8,
    sanskritName: "Parvatasana",
    englishName: "Mountain Pose",
    imagePath: pose08,
    defaultDuration: 5
  },
  {
    id: 9,
    sanskritName: "Ashwa Sanchalanasana",
    englishName: "Equestrian Pose (Left)",
    imagePath: pose09,
    defaultDuration: 5
  },
  {
    id: 10,
    sanskritName: "Pada Hastasana",
    englishName: "Hand to Foot Pose",
    imagePath: pose10,
    defaultDuration: 5
  },
  {
    id: 11,
    sanskritName: "Hasta Uttanasana",
    englishName: "Raised Arms Pose",
    imagePath: pose11,
    defaultDuration: 5
  },
  {
    id: 12,
    sanskritName: "Pranamasana",
    englishName: "Prayer Pose",
    imagePath: pose12,
    defaultDuration: 5
  }
];

// Component for displaying posture image with error handling
const PostureImage = ({ imagePath, name }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="posture-placeholder">
        <p>Posture image coming soon</p>
        <p className="placeholder-name">{name}</p>
      </div>
    );
  }

  return (
    <img
      src={imagePath}
      alt={name}
      onError={() => setImageError(true)}
      className="posture-image"
    />
  );
};

const SuryaNamaskar = ({ onBack }) => {
  // State management
  const [screen, setScreen] = useState('config'); // 'config' | 'practice' | 'complete'
  const [currentPosture, setCurrentPosture] = useState(0); // 0-11
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(3);
  const [secondsPerPose, setSecondsPerPose] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

  // Timer logic
  useEffect(() => {
    if (screen === 'practice' && !isPaused && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Auto-advance to next posture
            handleNext();
            return secondsPerPose;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [screen, isPaused, timeRemaining, secondsPerPose]);

  // Navigation handlers
  const handleNext = () => {
    if (currentPosture < 11) {
      // Move to next posture in current round
      setCurrentPosture(prev => prev + 1);
      setTimeRemaining(secondsPerPose);
    } else {
      // Completed all 12 postures
      if (currentRound < totalRounds) {
        // Start next round
        setCurrentRound(prev => prev + 1);
        setCurrentPosture(0);
        setTimeRemaining(secondsPerPose);
      } else {
        // Completed all rounds - show completion screen
        setScreen('complete');
      }
    }
  };

  const handlePrevious = () => {
    if (currentPosture > 0) {
      // Move to previous posture in current round
      setCurrentPosture(prev => prev - 1);
      setTimeRemaining(secondsPerPose);
    } else {
      // At first posture
      if (currentRound > 1) {
        // Go to last posture of previous round
        setCurrentRound(prev => prev - 1);
        setCurrentPosture(11);
        setTimeRemaining(secondsPerPose);
      }
    }
  };

  const handlePauseResume = () => {
    setIsPaused(prev => !prev);
  };

  const handleBeginPractice = () => {
    setScreen('practice');
    setCurrentPosture(0);
    setCurrentRound(1);
    setTimeRemaining(secondsPerPose);
    setIsPaused(false);
  };

  const handlePracticeAgain = () => {
    setScreen('config');
    setCurrentPosture(0);
    setCurrentRound(1);
    setTimeRemaining(secondsPerPose);
    setIsPaused(false);
  };

  const handleReturnHome = () => {
    if (onBack) {
      onBack();
    }
  };

  // Configuration Screen
  if (screen === 'config') {
    return (
      <div className="surya-namaskar-container">
        <header className="sn-header">
          <button className="back-button embossed-button" onClick={handleReturnHome}>
            ← Back
          </button>
        </header>

        <div className="config-screen">
          <h1 className="config-title embossed-text">Configure Your Practice</h1>

          <div className="config-section">
            <h2 className="config-label">Seconds per Posture:</h2>
            <div className="config-options">
              {[3, 5, 7, 10].map(seconds => (
                <button
                  key={seconds}
                  className={`config-option embossed-button ${secondsPerPose === seconds ? 'selected' : ''}`}
                  onClick={() => setSecondsPerPose(seconds)}
                >
                  {seconds}
                </button>
              ))}
            </div>
          </div>

          <div className="config-section">
            <h2 className="config-label">Number of Rounds:</h2>
            <div className="config-options">
              {[1, 3, 5, 7, 12].map(rounds => (
                <button
                  key={rounds}
                  className={`config-option embossed-button ${totalRounds === rounds ? 'selected' : ''}`}
                  onClick={() => setTotalRounds(rounds)}
                >
                  {rounds}
                </button>
              ))}
            </div>
          </div>

          <button className="begin-button embossed-button" onClick={handleBeginPractice}>
            Begin Practice
          </button>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (screen === 'complete') {
    return (
      <div className="surya-namaskar-container">
        <div className="completion-screen">
          <div className="completion-stars">✨ 🌅 ✨</div>
          <h1 className="completion-title embossed-text">Practice Complete!</h1>
          <p className="completion-message">
            You completed {totalRounds} round{totalRounds > 1 ? 's' : ''} of<br />
            Surya Namaskar
          </p>
          <div className="completion-buttons">
            <button className="embossed-button" onClick={handleReturnHome}>
              Return Home
            </button>
            <button className="embossed-button" onClick={handlePracticeAgain}>
              Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Practice Screen
  const currentPostureData = postureData[currentPosture];

  return (
    <div className="surya-namaskar-container">
      <header className="sn-header">
        <button className="back-button embossed-button" onClick={handleReturnHome}>
          ← Back
        </button>
        <div className="progress-indicator embossed-text">
          Round {currentRound} of {totalRounds} • Pose {currentPosture + 1}/12
        </div>
      </header>

      <div className="practice-screen">
        <div className="posture-display">
          <PostureImage
            imagePath={currentPostureData.imagePath}
            name={currentPostureData.sanskritName}
          />
        </div>

        <div className="posture-info">
          <h2 className="sanskrit-name embossed-text">{currentPostureData.sanskritName}</h2>
          <p className="english-name">{currentPostureData.englishName}</p>
        </div>

        <div className={`timer-display embossed-text ${timeRemaining <= 3 ? 'timer-warning' : ''}`}>
          {String(Math.floor(timeRemaining / 60)).padStart(2, '0')}:{String(timeRemaining % 60).padStart(2, '0')}
        </div>

        <div className="control-buttons">
          <button
            className="control-button embossed-button"
            onClick={handlePrevious}
            disabled={currentPosture === 0 && currentRound === 1}
          >
            Previous
          </button>
          <button
            className="control-button pause-button embossed-button"
            onClick={handlePauseResume}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button
            className="control-button embossed-button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuryaNamaskar;
