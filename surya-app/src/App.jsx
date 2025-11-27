import React, { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import SuryaNamaskar from './components/SuryaNamaskar';

function App() {
  // Splash screen state
  const [showSplash, setShowSplash] = useState(false);

  // Navigation state
  const [currentScreen, setCurrentScreen] = useState('welcome');

  // Check if user has seen splash screen
  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (!hasSeenSplash) {
      setShowSplash(true);
    }
  }, []);

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    localStorage.setItem('hasSeenSplash', 'true');
  };

  // Show splash screen on first launch
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  // Handle navigation
  const handleSelectSection = (section) => {
    setCurrentScreen(section);
  };

  const handleBackToHome = () => {
    setCurrentScreen('welcome');
  };

  // Render appropriate screen
  return (
    <div className="app">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onSelectSection={handleSelectSection} />
      )}

      {currentScreen === 'practice' && (
        <SuryaNamaskar onBack={handleBackToHome} />
      )}

      {currentScreen === 'names' && (
        <div className="placeholder-screen">
          <button onClick={handleBackToHome}>← Back</button>
          <h1>Names of Surya</h1>
          <p>Names study component will go here</p>
        </div>
      )}
    </div>
  );
}

export default App;
