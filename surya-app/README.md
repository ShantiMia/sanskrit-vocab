# Surya - The Twelve Names of the Sun 🌅

A beautiful React web application exploring the twelve sacred names of Surya with an interactive Surya Namaskar practice module.

## Features

### 🌸 **Lotus Splash Screen**
- Beautiful 7.5-second lotus unfoldment animation
- 12 golden petals opening sequentially
- Shows only on first launch
- Skippable at any time

### 📖 **Study the Names**
- Complete research on all 12 names of Surya
- Sanskrit, IAST transliteration, pronunciation
- Etymology, meanings, mantras
- Scriptural references from Vedas, Upanishads, Purāṇas
- Contemplation guidance

### 🧘 **Surya Namaskar Practice**
- Interactive yoga practice module
- Configurable timer (3, 5, 7, or 10 seconds per pose)
- Multiple rounds (1, 3, 5, 7, or 12)
- Auto-advance with manual controls
- Pause/Resume functionality
- Round and posture tracking

### ℹ️ **About/Dedication**
- Dedication to Yoga Satya Svarupe
- Honours DrG's vision
- Beautiful modal with YSS logo

## Design

**Theme:** Golden embossed aesthetic with Sanskrit/Vedantic inspiration

**Colors:**
- Golden tones (#b8860b, #d4af37, #f0c869)
- Cream and off-white backgrounds
- Embossed 3D effects throughout

**Typography:**
- Philosopher (display font)
- Crimson Pro (body font)

**Responsive:** Works beautifully on desktop, tablet, and mobile

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Required Assets

Add YSS logo files to `/src/assets/images/`:
- `yss_logo_256.png`
- `yss_logo_128.png` (optional)
- `yss_logo_512.png` (optional)

Add posture images to `/public/assets/images/postures/`:
- `pose_01_pranamasana.png` through `pose_12_pranamasana.png`

**Note:** The app has beautiful fallback placeholders if images are missing!

## Project Structure

```
surya-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
│           └── postures/         (add posture images here)
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx      ✅
│   │   ├── SplashScreen.css      ✅
│   │   ├── AboutModal.jsx        ✅
│   │   ├── AboutModal.css        ✅
│   │   ├── WelcomeScreen.jsx     ✅
│   │   ├── WelcomeScreen.css     ✅
│   │   ├── SuryaNamaskar.jsx     ✅
│   │   └── SuryaNamaskar.css     ✅
│   ├── data/
│   │   └── suryaNames.js         ✅
│   ├── assets/
│   │   └── images/               (add YSS logos here)
│   ├── App.jsx                   ✅
│   ├── App.css                   ✅
│   ├── index.js                  ✅
│   └── index.css                 ✅
├── package.json                  ✅
└── README.md                     ✅
```

## Components

### 1. SplashScreen
First-launch animated splash screen with lotus unfoldment.

**Props:**
- `onComplete` - Function called when animation completes or user skips

### 2. WelcomeScreen
Main menu with two options (Study Names, Practice Surya Namaskar) and info button.

**Props:**
- `onSelectSection` - Function called with selected section ('names' or 'practice')

### 3. SuryaNamaskar
Interactive yoga practice module with timer, navigation, and round tracking.

**Props:**
- `onBack` - Function called when user clicks back button

### 4. AboutModal
Dedication modal with information about the app.

**Props:**
- `isOpen` - Boolean controlling modal visibility
- `onClose` - Function called when modal should close

## Integration Complete! ✅

Both splash screen and About modal are fully integrated:
- ✅ Splash screen shows on first launch (uses localStorage)
- ✅ Info button on welcome screen opens dedication modal
- ✅ All components connected and working

## Testing

### Clear Splash Screen
To see the splash screen again:
```javascript
localStorage.removeItem('hasSeenSplash')
```
Then refresh the page.

### Test Features
- Configuration: Try different timer/round settings
- Navigation: Test Previous/Next buttons
- Pause/Resume: Verify timer freezes/continues
- Round tracking: Complete multiple rounds
- Responsive: Test on different screen sizes

## British English

All text uses proper British English:
- "honour" (not "honor")
- "whilst" (not "while")
- "towards" (not "toward")

## Accessibility

- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Screen reader friendly
- ✅ Reduced motion support
- ✅ High contrast text

## Credits

**Dedication:** This app is dedicated to the vision of Yoga Satya Svarupe

**Inspired by:** DrG's deep love for the twelve names of Surya and the timeless wisdom of Vedanta

---

**Om Tat Sat** 🙏
