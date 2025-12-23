# DentalCare - Dental Clinic Website

Modern, responsive Single Page Application (SPA) for a dental clinic built with React and Bootstrap 5.

## Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark/Light Mode** - Automatically detects system preference
- **Internationalization** - Slovak (default) and English language support
- **Modern UI** - Clean, professional medical aesthetic with teal color palette

## Tech Stack

- React 18 (Functional Components with Hooks)
- Bootstrap 5 + React-Bootstrap
- Lucide React Icons
- CSS Custom Properties for theming

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Creates optimized build in the `build` folder.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Import project to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `build`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/dental",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with language/theme toggle
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Services.jsx    # Services grid
│   ├── About.jsx       # About section with team
│   ├── Contact.jsx     # Contact info and map
│   └── Footer.jsx      # Footer
├── context/
│   ├── LanguageContext.jsx  # i18n context
│   └── ThemeContext.jsx     # Theme context
├── i18n/
│   └── translations.js      # SK/EN translations
├── App.jsx
├── App.css
└── index.js
```

## License

MIT
