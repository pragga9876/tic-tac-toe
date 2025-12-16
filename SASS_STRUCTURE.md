# SCSS Project Structure Guide - Complete Implementation

## 📁 Folder Structure

Your new SCSS structure should look like this:

```
src/
├── styles/
│   ├── index.scss              # Main SCSS file (imports all partials)
│   ├── _variables.scss         # Colors, spacing, fonts, breakpoints
│   ├── _mixins.scss            # Reusable style functions
│   ├── _animations.scss        # Keyframe animations
│   ├── _global.scss            # Base styles, html, body
│   ├── _layout.scss            # App container, main card, cards
│   ├── _typography.scss        # Title, headings, text styles
│   ├── _scoreboard.scss        # Score tracking styles
│   ├── _board.scss             # Game board and squares
│   ├── _buttons.scss           # Button styles
│   ├── _player-indicator.scss  # Player turn indicator
│   └── _announcements.scss     # Winner and draw announcement styles
├── App.jsx
├── Game.jsx
└── index.jsx
```

**Why split into multiple files?**
- ✅ Better organization
- ✅ Easy to find specific styles
- ✅ Easier to maintain & update
- ✅ Reusable partials
- ✅ Scalable for larger projects

---

## 📄 File 1: `src/styles/index.scss`

**This is the MAIN file that imports all other files**

```scss
// Main SCSS file - imports all partials in order
// Do NOT add any styles here, only @import statements

// 1. Configuration (Variables & Mixins must come first)
@import 'variables';
@import 'mixins';

// 2. Global Styles
@import 'animations';
@import 'global';

// 3. Layout Components
@import 'layout';

// 4. Typography
@import 'typography';

// 5. Game Components
@import 'scoreboard';
@import 'board';
@import 'player-indicator';
@import 'buttons';
@import 'announcements';
```

**What it does:**
- Acts as the entry point for all SCSS files
- Imports are processed in order (important!)
- Vite automatically converts to CSS

---

## 📄 File 2: `src/styles/_variables.scss`

**All colors, spacing, and configuration values**

```scss
// ========================================
// COLOR VARIABLES
// ========================================

// Gradients
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

// Neon Colors
$neon-cyan: #00d4ff;
$neon-pink: #ff006e;
$neon-green: #00ff41;

// Dark Theme Colors
$dark-bg: #0f0f23;
$card-bg: #1a1a2e;
$text-primary: #ffffff;
$text-secondary: #a0a0a0;
$border-color: #2d2d44;

// ========================================
// SPACING VARIABLES (Scales by 4px)
// ========================================

$space-xs: 4px;      // Extra small
$space-sm: 8px;      // Small
$space-md: 12px;     // Medium
$space-lg: 16px;     // Large
$space-xl: 20px;     // Extra large
$space-2xl: 24px;    // 2x Large
$space-3xl: 30px;    // 3x Large
$space-4xl: 40px;    // 4x Large

// ========================================
// BORDER RADIUS VARIABLES
// ========================================

$radius-sm: 6px;
$radius-md: 10px;
$radius-lg: 15px;
$radius-xl: 20px;
$radius-full: 9999px;

// ========================================
// TYPOGRAPHY VARIABLES
// ========================================

$font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

$font-weight-normal: 400;
$font-weight-medium: 600;
$font-weight-bold: 700;
$font-weight-extra-bold: 800;

// Font sizes
$font-size-sm: 0.85rem;
$font-size-base: 1rem;
$font-size-lg: 1.1rem;
$font-size-xl: 1.5rem;
$font-size-2xl: 2rem;
$font-size-3xl: 2.5rem;

// ========================================
// TIMING & TRANSITIONS
// ========================================

$transition-fast: 0.15s ease;
$transition: 0.3s ease;
$transition-slow: 0.5s ease-out;

$easing-in: cubic-bezier(0.4, 0, 0.2, 1);
$easing-out: cubic-bezier(0.2, 0, 0.4, 1);

// ========================================
// SHADOWS
// ========================================

$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
$shadow-md: 0 5px 15px rgba(0, 0, 0, 0.2);
$shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.25);
$shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.3);

// ========================================
// BREAKPOINTS (Mobile-first approach)
// ========================================

$breakpoint-tablet: 768px;
$breakpoint-mobile: 480px;

// ========================================
// Z-INDEX SCALE
// ========================================

$z-base: 1;
$z-dropdown: 100;
$z-modal: 1000;
```

**What it does:**
- Stores all color values (change color once, updates everywhere!)
- Defines spacing scale (consistent spacing)
- Font sizes, weights for typography
- Breakpoints for responsive design
- Shadows and transitions

**When to modify:**
- Changing colors → Update gradients, neon colors
- Changing spacing → Update `$space-*` variables
- Changing fonts → Update `$font-family` or sizes

---

## 📄 File 3: `src/styles/_mixins.scss`

**Reusable style blocks (functions for CSS)**

```scss
// ========================================
// FLEXBOX MIXINS
// ========================================

/// Flex centered (both horizontally & vertically)
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/// Flex column with centered items
@mixin flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/// Flex column centered
@mixin flex-col-center {
  @include flex-col;
  justify-content: center;
}

/// Flex between (space-between)
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// ========================================
// TEXT & GRADIENT MIXINS
// ========================================

/// Apply gradient to text (text gradient effect)
@mixin gradient-text($gradient) {
  background: $gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/// Neon border with glow effect
@mixin neon-border($color) {
  border: 2px solid $color;
  box-shadow: 0 0 20px rgba($color, 0.3);
  transition: $transition;
}

/// Truncate text with ellipsis
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// ========================================
// INTERACTION MIXINS
// ========================================

/// Button base styles
@mixin button-base {
  padding: $space-sm $space-lg;
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  transition: $transition;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: $font-family;
}

/// Hover scale effect
@mixin hover-scale($scale: 1.05) {
  transition: $transition;
  &:hover {
    transform: scale($scale);
  }
}

/// Hover lift effect (translateY)
@mixin hover-lift($distance: -3px) {
  transition: $transition;
  &:hover {
    transform: translateY($distance);
  }
}

/// Active press effect
@mixin active-press {
  &:active {
    transform: translateY(-1px);
  }
}

// ========================================
// LAYOUT MIXINS
// ========================================

/// Create a card-like container
@mixin card {
  background: $card-bg;
  border: 2px solid $border-color;
  border-radius: $radius-lg;
  padding: $space-xl;
  box-shadow: $shadow-md;
}

/// Full height flex container
@mixin full-height {
  width: 100%;
  min-height: 100vh;
  @include flex-center;
}

/// Responsive container with max-width
@mixin container($max-width: 900px) {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 $space-lg;
}

// ========================================
// RESPONSIVE DESIGN MIXIN
// ========================================

/// Media query helper for responsive design
/// Usage: @include respond-to('tablet') { ... }
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'tablet' {
    @media (max-width: $breakpoint-tablet) {
      @content;
    }
  } @else if $breakpoint == 'mobile' {
    @media (max-width: $breakpoint-mobile) {
      @content;
    }
  } @else if $breakpoint == 'desktop' {
    @media (min-width: $breakpoint-tablet + 1px) {
      @content;
    }
  }
}

// ========================================
// UTILITY MIXINS
// ========================================

/// Remove default button styles
@mixin button-reset {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

/// Hide element visually but keep in DOM (accessibility)
@mixin sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/// Glassmorphism effect
@mixin glassmorphism($blur: 10px) {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur($blur);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/// Smooth transitions
@mixin smooth-transition {
  transition: all $transition $easing-out;
}
```

**What it does:**
- `@mixin` = Creates reusable style blocks
- `@include` = Uses a mixin in your code
- Example: Instead of writing `display: flex; justify-content: center; align-items: center;` every time, use `@include flex-center;`

**How to use:**
```scss
.my-element {
  @include flex-center;     // Automatically includes flex centering
  @include hover-scale(1.1); // Scale up on hover
}
```

---

## 📄 File 4: `src/styles/_animations.scss`

**All keyframe animations in one place**

```scss
// ========================================
// ANIMATIONS
// ========================================

/// Pop-in animation for game squares
@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/// Pulse/breathing animation
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/// Bounce animation
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/// Slide in from top
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/// Fade in animation
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/// Shake animation (for errors)
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

/// Rotate animation
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

**What it does:**
- Defines all animations used in your project
- You can reference these animations by name in CSS
- Easy to update animation timing in one place

**How to use:**
```scss
.winner-text {
  animation: bounce 1s infinite;
}
```

---

## 📄 File 5: `src/styles/_global.scss`

**Base styles and global defaults**

```scss
// ========================================
// GLOBAL STYLES
// ========================================

/// Reset default styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/// HTML base styles
html {
  font-size: 16px;
  scroll-behavior: smooth;
}

/// Body styles
body {
  background: $primary-gradient;
  font-family: $font-family;
  color: $text-primary;
  min-height: 100vh;
  @include flex-center;
  overflow-x: hidden;
  line-height: 1.5;
}

/// Root container (React root)
#root {
  width: 100%;
  min-height: 100vh;
  @include flex-center;
  padding: $space-lg;
}

/// Link default styles
a {
  color: $neon-cyan;
  text-decoration: none;
  transition: $transition;

  &:hover {
    color: lighten($neon-cyan, 10%);
    text-decoration: underline;
  }
}

/// Code block styles
code {
  font-family: 'Courier New', monospace;
  background: $card-bg;
  padding: 2px 6px;
  border-radius: $radius-sm;
  font-size: 0.9rem;
}

/// Scrollbar styling (optional)
::-webkit-scrollbar {
  width: 8px;

  &-track {
    background: $dark-bg;
  }

  &-thumb {
    background: $neon-cyan;
    border-radius: $radius-md;

    &:hover {
      background: lighten($neon-cyan, 10%);
    }
  }
}
```

**What it does:**
- Resets browser defaults
- Sets global font, colors
- Styles common elements
- Consistent across all pages

---

## 📄 File 6: `src/styles/_layout.scss`

**Main layout components (containers, cards)**

```scss
// ========================================
// APP LAYOUT
// ========================================

/// Main app container
.app-container {
  width: 100%;
  min-height: 100vh;
  @include flex-center;
  padding: $space-lg;

  @include respond-to('mobile') {
    padding: $space-md;
  }
}

/// Main card wrapper
.main-card {
  @include card;
  padding: $space-4xl;
  max-width: 900px;
  width: 100%;
  box-shadow: $shadow-xl;
  backdrop-filter: blur(10px);

  @include respond-to('tablet') {
    padding: $space-2xl;
  }

  @include respond-to('mobile') {
    padding: $space-lg;
  }
}

/// Generic card component
.card {
  @include card;
  transition: $transition;

  &:hover {
    box-shadow: $shadow-lg;
  }
}

/// Card header
.card-header {
  padding-bottom: $space-lg;
  border-bottom: 1px solid $border-color;
  margin-bottom: $space-lg;
}

/// Card body
.card-body {
  padding: $space-lg;
}

/// Card footer
.card-footer {
  padding-top: $space-lg;
  border-top: 1px solid $border-color;
  margin-top: $space-lg;
}
```

**What it does:**
- Defines main layout containers
- Card styling (reusable pattern)
- Makes responsive adjustments easy

---

## 📄 File 7: `src/styles/_typography.scss`

**All text-related styles**

```scss
// ========================================
// TYPOGRAPHY STYLES
// ========================================

/// Main page title
.title {
  text-align: center;
  font-size: $font-size-3xl;
  font-weight: $font-weight-extra-bold;
  @include gradient-text($secondary-gradient);
  margin-bottom: $space-2xl;
  letter-spacing: 2px;

  @include respond-to('tablet') {
    font-size: $font-size-2xl;
  }

  @include respond-to('mobile') {
    font-size: $font-size-xl;
  }
}

/// Heading styles
h1, h2, h3, h4, h5, h6 {
  font-weight: $font-weight-bold;
  color: $text-primary;
  margin-bottom: $space-lg;
}

h1 {
  font-size: $font-size-3xl;
}

h2 {
  font-size: $font-size-2xl;
}

h3 {
  font-size: $font-size-xl;
}

h4, h5, h6 {
  font-size: $font-size-lg;
}

/// Paragraph styles
p {
  color: $text-secondary;
  line-height: 1.6;
  margin-bottom: $space-lg;

  &:last-child {
    margin-bottom: 0;
  }
}

/// Label styles
label {
  display: block;
  font-weight: $font-weight-medium;
  margin-bottom: $space-sm;
  font-size: $font-size-sm;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/// Small text
.text-small {
  font-size: $font-size-sm;
  color: $text-secondary;
}

/// Gradient text utility
.gradient-text {
  @include gradient-text($secondary-gradient);
}
```

**What it does:**
- Styles all heading levels
- Paragraph and text styles
- Typography utilities
- Responsive font sizes

---

## 📄 File 8: `src/styles/_scoreboard.scss`

**Score tracking component styles**

```scss
// ========================================
// SCOREBOARD STYLES
// ========================================

/// Main scoreboard container
.scoreboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-md;
  margin-bottom: $space-2xl;
  padding: $space-xl;
  background: linear-gradient(
    135deg,
    rgba(16, 16, 35, 0.6),
    rgba(30, 30, 50, 0.6)
  );
  border-radius: $radius-lg;
  border: 1px solid $border-color;

  @include respond-to('mobile') {
    gap: $space-sm;
    padding: $space-lg;
  }
}

/// Individual score item
.score-item {
  @include flex-col;
  padding: $space-md;
  border-radius: $radius-md;
  border: 2px solid $border-color;
  transition: $transition;

  /// X player score
  &.x-score {
    background: rgba(0, 212, 255, 0.05);
    border-color: $neon-cyan;
  }

  /// O player score
  &.o-score {
    background: rgba(255, 0, 110, 0.05);
    border-color: $neon-pink;
  }

  /// Draw score
  &.draw-score {
    background: rgba(0, 255, 65, 0.05);
    border-color: $neon-green;
  }
}

/// Score label text
.score-label {
  font-size: $font-size-sm;
  color: $text-secondary;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: $space-sm;
  font-weight: $font-weight-medium;
}

/// Score number value
.score-value {
  font-size: $font-size-2xl;
  font-weight: $font-weight-extra-bold;
  @include gradient-text($secondary-gradient);
  animation: pulse 2s infinite;
}
```

**What it does:**
- Styles the score tracking board
- Different colors for X, O, draws
- Responsive grid layout

---

## 📄 File 9: `src/styles/_board.scss`

**Game board and square styles**

```scss
// ========================================
// GAME BOARD STYLES
// ========================================

/// Board container
.board-container {
  background: linear-gradient(
    135deg,
    rgba(16, 16, 35, 0.8),
    rgba(30, 30, 50, 0.8)
  );
  border: 2px solid $border-color;
  border-radius: $radius-lg;
  padding: $space-xl;
  margin-bottom: $space-2xl;

  @include respond-to('mobile') {
    padding: $space-lg;
  }
}

/// 3x3 game grid
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-sm;
  background: $dark-bg;
  padding: $space-sm;
  border-radius: $radius-md;
  width: fit-content;
  margin: 0 auto;
}

/// Individual game square/cell
.square {
  width: 100px;
  height: 100px;
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  border: 2px solid $neon-cyan;
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.1),
    rgba(255, 0, 110, 0.1)
  );
  color: $text-primary;
  cursor: pointer;
  border-radius: $radius-md;
  transition: $transition;
  @include flex-center;
  position: relative;
  overflow: hidden;

  /// Hover state for empty squares
  &:hover:not(.filled) {
    transform: scale(1.05);
    background: linear-gradient(
      135deg,
      rgba(0, 212, 255, 0.2),
      rgba(255, 0, 110, 0.2)
    );
    box-shadow: 0 0 20px rgba($neon-cyan, 0.5);
  }

  /// Filled square state
  &.filled {
    cursor: not-allowed;
    background: linear-gradient(
      135deg,
      rgba(0, 212, 255, 0.15),
      rgba(255, 0, 110, 0.15)
    );
  }

  /// Winning square animation
  &.winning {
    animation: pulse 0.6s ease-in-out;
    box-shadow: 0 0 30px $neon-green;
    background: linear-gradient(
      135deg,
      rgba(0, 255, 65, 0.2),
      rgba(0, 255, 65, 0.1)
    );
  }

  @include respond-to('tablet') {
    width: 80px;
    height: 80px;
    font-size: $font-size-2xl;
  }

  @include respond-to('mobile') {
    width: 70px;
    height: 70px;
    font-size: $font-size-xl;
  }
}

/// Square content animation
.square-content {
  animation: popIn $transition;
}
```

**What it does:**
- Styles the 3x3 game board
- Square hover/filled/winning states
- Responsive sizing

---

## 📄 File 10: `src/styles/_buttons.scss`

**All button styles**

```scss
// ========================================
// BUTTON STYLES
// ========================================

/// Button container/wrapper
.controls {
  @include flex-center;
  gap: $space-md;
  margin-top: $space-2xl;
  flex-wrap: wrap;
}

/// Primary reset button
.btn-reset {
  @include button-base;
  background: $secondary-gradient;
  color: white;
  box-shadow: $shadow-md;
  @include hover-lift;

  &:hover {
    box-shadow: $shadow-lg;
  }

  &:active {
    @include active-press;
  }

  @include respond-to('mobile') {
    padding: $space-sm $space-md;
    font-size: 0.9rem;
  }
}

/// Secondary reset scores button
.btn-reset-scores {
  @include button-base;
  background: transparent;
  color: $neon-cyan;
  border: 2px solid $neon-cyan;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    box-shadow: 0 0 20px rgba($neon-cyan, 0.3);
  }

  &:active {
    @include active-press;
  }

  @include respond-to('mobile') {
    padding: $space-sm $space-md;
    font-size: 0.9rem;
  }
}

/// Tertiary button (optional)
.btn-secondary {
  @include button-base;
  background: rgba($text-primary, 0.1);
  color: $text-primary;
  border: 1px solid $border-color;

  &:hover {
    background: rgba($text-primary, 0.15);
    border-color: $text-primary;
  }
}
```

**What it does:**
- Styles all buttons
- Hover and active states
- Responsive button sizing

---

## 📄 File 11: `src/styles/_player-indicator.scss`

**Current player indicator styles**

```scss
// ========================================
// PLAYER INDICATOR STYLES
// ========================================

/// Container for player status
.status-container {
  @include flex-center;
  margin-bottom: $space-2xl;
  gap: $space-lg;
}

/// Player turn indicator
.player-indicator {
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.1),
    rgba(255, 0, 110, 0.1)
  );
  @include neon-border($neon-cyan);
  border-radius: $radius-lg;
  padding: $space-md $space-xl;
  @include flex-col;
  gap: $space-sm;
  transition: $transition;

  /// X player turn
  &.x {
    @include neon-border($neon-cyan);
  }

  /// O player turn
  &.o {
    border-color: $neon-pink;
    box-shadow: 0 0 20px rgba($neon-pink, 0.3);
  }
}

/// Player label text
.player-label {
  font-size: $font-size-sm;
  color: $text-secondary;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: $font-weight-medium;
}

/// Player symbol (X or O)
.player-symbol {
  font-size: $font-size-3xl;
  font-weight: $font-weight-extra-bold;
  @include gradient-text($secondary-gradient);
  animation: pulse 2s infinite;
}
```

**What it does:**
- Shows whose turn it is
- Different colors for X and O
- Animated pulse effect

---

## 📄 File 12: `src/styles/_announcements.scss`

**Winner and draw announcement styles**

```scss
// ========================================
// ANNOUNCEMENTS
// ========================================

/// Winner announcement container
.winner-announcement {
  position: relative;
  margin-bottom: $space-2xl;
  padding: $space-2xl;
  background: linear-gradient(135deg, $neon-green 20%, $neon-cyan 100%);
  border-radius: $radius-lg;
  text-align: center;
  animation: slideIn $transition-slow;
  box-shadow: 0 10px 40px rgba($neon-green, 0.3);
}

/// Winner text with bounce animation
.winner-text {
  font-size: $font-size-2xl;
  color: #000;
  font-weight: $font-weight-extra-bold;
  margin: 0;
  animation: bounce 1s infinite;
  letter-spacing: 1px;
}

/// Draw announcement container
.draw-announcement {
  margin-bottom: $space-2xl;
  padding: $space-2xl;
  background: $primary-gradient;
  border-radius: $radius-lg;
  text-align: center;
  animation: slideIn $transition-slow;
  box-shadow: $shadow-lg;
}

/// Draw text
.draw-text {
  font-size: $font-size-2xl;
  color: white;
  font-weight: $font-weight-extra-bold;
  margin: 0;
  letter-spacing: 1px;
}

/// Status message (generic)
.status {
  text-align: center;
  font-size: $font-size-lg;
  font-weight: $font-weight-medium;
  margin-bottom: $space-lg;
  color: $neon-green;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: fadeIn $transition;
}
```

**What it does:**
- Winner announcement with green gradient
- Draw announcement with purple gradient
- Both with animations

---

## 🔄 Update `src/index.jsx`

Change the import from `.css` to `.scss`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';  // ← Change from ./styles.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📁 Final Folder Structure

```
tic-tac-toe/
├── public/
│   └── index.html
├── src/
│   ├── styles/
│   │   ├── index.scss              ← Main file (imports all)
│   │   ├── _variables.scss         ← Colors, spacing
│   │   ├── _mixins.scss            ← Reusable functions
│   │   ├── _animations.scss        ← Keyframe animations
│   │   ├── _global.scss            ← Base styles
│   │   ├── _layout.scss            ← Containers
│   │   ├── _typography.scss        ← Text styles
│   │   ├── _scoreboard.scss        ← Score styles
│   │   ├── _board.scss             ← Game board
│   │   ├── _buttons.scss           ← Button styles
│   │   ├── _player-indicator.scss  ← Player turn
│   │   └── _announcements.scss     ← Winner/draw
│   ├── App.jsx
│   ├── Game.jsx
│   └── index.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## ✅ Setup Steps
**Install Sass:**
  ```bash
  npm install -D sass
  ```
---

## 🎯 When to Modify Each File

| File | When to Modify |
|------|---|
| `_variables.scss` | Change colors, spacing, fonts |
| `_mixins.scss` | Add new reusable patterns |
| `_animations.scss` | Add new animations or change timing |
| `_board.scss` | Change board size or square styling |
| `_buttons.scss` | Change button appearance |
| `_player-indicator.scss` | Change player indicator appearance |
| `_announcements.scss` | Change winner/draw styles |

---

## 💡 Benefits Summary

✅ **Organization** - Each component has its own file
✅ **Maintainability** - Easy to find and update styles
✅ **Reusability** - Mixins prevent code duplication
✅ **Scalability** - Easy to add new components
✅ **Performance** - Same file size as single CSS file
✅ **Readability** - Variables make code self-documenting
✅ **Professional** - Industry-standard approach

---
