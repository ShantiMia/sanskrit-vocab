# Required Images

This directory requires the following image files for the splash screen and welcome screen:

## Splash Screen Images

### 1. sun_logo.png
- **Description**: Decorative sun logo with rays (golden embossed style)
- **Recommended size**: 512x512px or larger
- **Format**: PNG with transparency
- **Usage**: Rises during splash screen animation with orange glow

### 2. yss_logo_256.png
- **Description**: YSS (Yoga Satya Svarupe) logo with Om symbol
- **Recommended size**: 256x256px or larger
- **Format**: PNG with transparency
- **Usage**: Appears after golden burst in splash screen and at top of welcome screen

### 3. surya_title.png (optional)
- **Description**: "SURYA" text in golden embossed style
- **Recommended size**: 800x200px or similar
- **Format**: PNG with transparency
- **Usage**: Title that appears after splash animation
- **Note**: If not provided, will use text fallback

## Notes

- All images should have transparent backgrounds
- Images will automatically fall back to styled elements if files are missing or fail to load
- The code is already set up to reference these images with proper fallbacks
