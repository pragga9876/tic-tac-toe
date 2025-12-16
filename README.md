# ⚡ Tic Tac Toe - Modern React Game with SCSS

A beautiful, fully-featured Tic Tac Toe game built with **React**, **Vite**, and **SCSS**, featuring modern animations, gradient UI, score tracking, and responsive design.

![Tic Tac Toe](https://img.shields.io/badge/React-18.0-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite-4.0-purple?logo=vite) ![SCSS](https://img.shields.io/badge/SCSS-Sass-cc6699?logo=sass) 

---

## 🎮 Features

✨ **Modern UI Design**
- Beautiful gradient backgrounds with neon accents
- Glassmorphism card design with backdrop blur
- Smooth animations and transitions
- Dark mode optimized

🎯 **Game Features**
- Classic Tic Tac Toe gameplay
- Real-time current player indicator
- Instant winner detection
- Draw detection
- Move history with time-travel functionality
- Score tracking (X wins, O wins, Draws)
- One-click game reset
- Score reset button

📱 **Responsive Design**
- Mobile-friendly layout
- Adapts to tablets and desktops
- Touch-friendly buttons and squares
- Optimized for all screen sizes

⚡ **Performance**
- Lightning-fast with Vite
- No external dependencies (only React)
- Optimized animations
- Minimal bundle size

🎨 **Advanced Styling**
- Full SCSS with variables, mixins, and nesting
- Professional component-based structure
- Easy to customize and maintain
- Reusable style patterns

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Start playing! 🎉

---

## 📁 Project Structure

```
tic-tac-toe/
├── public/
│   └── index.html                     # Main HTML file
├── src/
│   ├── styles/                        # SCSS files (organized by component)
│   │   ├── index.scss                 # Main SCSS entry point
│   │   ├── _variables.scss            # Colors, spacing, fonts
│   │   ├── _mixins.scss               # Reusable style functions
│   │   ├── _animations.scss           # Keyframe animations
│   │   ├── _global.scss               # Base & global styles
│   │   ├── _layout.scss               # Containers & cards
│   │   ├── _typography.scss           # Text & heading styles
│   │   ├── _scoreboard.scss           # Score tracking
│   │   ├── _board.scss                # Game board & squares
│   │   ├── _buttons.scss              # Button components
│   │   ├── _player-indicator.scss     # Player turn indicator
│   │   └── _announcements.scss        # Winner/draw announcements
│   ├── App.jsx                        # Main App component
│   ├── Game.jsx                       # Game logic & components
│   ├── index.jsx                      # React entry point
├── package.json                       # Dependencies
├── vite.config.js                     # Vite configuration
└── README.md                          # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple to Blue (`#667eea` → `#764ba2`)
- **Secondary Gradient**: Pink to Red (`#f093fb` → `#f5576c`)
- **Neon Cyan**: `#00d4ff` (Primary accent)
- **Neon Pink**: `#ff006e` (Secondary accent)
- **Neon Green**: `#00ff41` (Success/Winner)
- **Dark Background**: `#0f0f23` (Card background)

### Spacing Scale
```
$space-xs: 4px      (Extra small)
$space-sm: 8px      (Small)
$space-md: 12px     (Medium)
$space-lg: 16px     (Large)
$space-xl: 20px     (Extra large)
$space-2xl: 24px    (2x Large)
$space-3xl: 30px    (3x Large)
$space-4xl: 40px    (4x Large)
```

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Font Weights**: 400, 600, 700, 800
- **Responsive Sizes**: Scales down on tablet and mobile

### Breakpoints
- **Tablet**: 768px and below
- **Mobile**: 480px and below

---

## 💅 SCSS Structure Explained

### What is SCSS?
SCSS (Sass) is a CSS preprocessor that lets you use variables, mixins, nesting, and more. It compiles to regular CSS that browsers understand.

### Key Files

#### `_variables.scss` - Store Everything Reusable
All colors, spacing, fonts in one place. Change once, updates everywhere!

```scss
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$neon-cyan: #00d4ff;
$space-lg: 16px;
```

#### `_mixins.scss` - Reusable Style Blocks
Define mixins once, use them anywhere with `@include`:

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Usage:
.my-element {
  @include flex-center;  // Includes all flexbox styles!
}
```

#### `_animations.scss` - All Animations
Centralized keyframe animations for consistency:

```scss
@keyframes popIn {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
```

#### Component Files
Each component (board, buttons, etc.) has its own partial:
- `_board.scss` - Game board styling
- `_buttons.scss` - Button styles
- `_scoreboard.scss` - Score tracking
- etc.

### Why This Structure?

| Benefit | How it Helps |
|---------|-------------|
| **Easy to Find** | Looking for button styles? Check `_buttons.scss` |
| **Easy to Update** | Change a color in `_variables.scss`, affects entire app |
| **No Repetition** | Use mixins instead of writing same CSS multiple times |
| **Scalable** | Easy to add new components - just create new file |
| **Professional** | Industry-standard approach used by top companies |

---

## 📦 Dependencies

### Core
- **React** (v18+) - UI library
- **React DOM** (v18+) - React rendering

### Build & Development
- **Vite** - Lightning-fast build tool
- **@vitejs/plugin-react** - React plugin for Vite
- **Sass** - CSS preprocessor

---

## 🎨 Customization

### Change Colors
Edit `src/styles/_variables.scss`:

```scss
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
$neon-cyan: #00d4ff;
$neon-pink: #ff006e;
$neon-green: #00ff41;
```

### Change Spacing
Edit `src/styles/_variables.scss`:

```scss
$space-lg: 16px;   // Large spacing
$space-xl: 20px;   // Extra large
$space-2xl: 24px;  // 2x Large
// Change these values and entire app responds!
```

### Change Board Size
Edit `src/styles/_board.scss`:

```scss
.square {
  width: 100px;    // Change width
  height: 100px;   // Change height
  font-size: 2.5rem; // Change X/O size
}
```

### Change Button Style
Edit `src/styles/_buttons.scss`:

```scss
.btn-reset {
  background: $secondary-gradient;  // Change gradient
  padding: $space-sm $space-lg;     // Change spacing
  // ... more customizable properties
}
```

### Add New Animation
Edit `src/styles/_animations.scss`:

```scss
@keyframes slideLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
```

Then use it in any component:
```scss
.my-element {
  animation: slideLeft 0.3s ease;
}
```

### Add New SCSS Component

1. Create new file: `src/styles/_mycomponent.scss`
2. Write your styles using variables and mixins:
   ```scss
   .my-component {
     background: $card-bg;
     @include flex-center;
     padding: $space-lg;
     
     &:hover {
       @include hover-scale(1.1);
     }
   }
   ```
3. Import in `src/styles/index.scss`:
   ```scss
   @import 'mycomponent';
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contributing to SCSS
When adding new styles:
1. Use variables from `_variables.scss`
2. Create reusable mixins in `_mixins.scss`
3. Keep component styles in their respective files
4. Follow the established structure

---

## 🙏 Acknowledgments

- **React** - For the amazing UI library
- **Vite** - For the blazing-fast build tool
- **Sass/SCSS** - For professional styling capabilities
- **Google Fonts** - For the beautiful Poppins font
- **Inspired by** - Classic Tic Tac Toe game and React tutorials

---

## 🎯 Roadmap

- [ ] Difficulty levels (Easy, Medium, Hard AI)
- [ ] Multiplayer (Local 2-player)
- [ ] Sound effects toggle
- [ ] Game statistics dashboard
- [ ] Achievement system
- [ ] Theme customization
- [ ] Progressive Web App (PWA)
- [ ] Internationalization (i18n)
- [ ] Dark/Light mode toggle

---

## 📊 Project Stats

- **Language**: JavaScript (JSX)
- **Styling**: SCSS (12 organized partials)
- **Framework**: React 18
- **Build Tool**: Vite
- **Lines of Code**: ~500 (JSX + SCSS)
- **Components**: 4 (App, Game, Board, Square)
- **SCSS Files**: 12 (organized by component)
- **Animations**: 7 (popIn, pulse, bounce, slideIn, fadeIn, shake, rotate)

---

Made with ❤️ by [Pragga Mukherjee](https://github.com/pragga9876)

⭐ If you like this project, please give it a star!

---

## 📖 Additional Resources

- [Complete SCSS Structure Guide](SCSS_STRUCTURE.md) - Detailed explanation of all SCSS files
- [Setup Guide](setup-guide.md) - File-by-file code and implementation guide
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Sass Documentation](https://sass-lang.com)
