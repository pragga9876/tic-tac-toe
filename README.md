# ⚡ Tic Tac Toe - Modern React Game with SCSS
A beautiful, fully-featured Tic Tac Toe game built with **React**, **Vite**, and **SCSS**, featuring modern animations, gradient UI, score tracking, and responsive design.

![Tic Tac Toe](https://img.shields.io/badge/React-18.0-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite-4.0-purple?logo=vite) ![SCSS](https://img.shields.io/badge/SCSS-Sass-cc6699?logo=sass) 

---

## Website : https://tic-tac-toe-pragga9876.vercel.app/

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

## 💅 Why SCSS Structure??

- [Complete SASS Structure Guide](SCSS_STRUCTURE.md) - Detailed explanation of all SCSS files

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

## 📖 Additional Resources

- [Complete SCSS Structure Guide](SCSS_STRUCTURE.md) - Detailed explanation of all SCSS files
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Sass Documentation](https://sass-lang.com)

---

# Note [Don't Forget!!] : SASS and SCSS are both syntaxes of the SASS (Syntactically Awesome Stylesheets) preprocessor, each offering enhanced features that extend the capabilities of traditional CSS. While both share the same functionality, their syntaxes differ, catering to different preferences among developers. (I have used SCSS & SASS interchangably here.)

# Key difference: syntax, not features
Sass has two syntaxes:

- SCSS (.scss) – CSS-like syntax with {} and ;
- Indented Sass (.sass) – no {} and no ;, uses indentation and newlines instead.​

Both compile to CSS and support the same features (variables, mixins, nesting, etc.).​

What I have written is SCSS syntax:
.app-container {
  @include flex-center;
  padding: $space-lg;
}
This is valid in .scss, but invalid in .sass
