# SustainSync Website# React + TypeScript + Vite



![SustainSync Logo](./public/brand-logo.svg)This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



A modern, responsive website for the SustainSync senior computing project, built with React, TypeScript, and Material-UI.Currently, two official plugins are available:



## 🌟 Features- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Modern UI**: Built with Material-UI (MUI) components

- **Responsive Design**: Fully responsive across all devices## React Compiler

- **Custom Theme**: Professional green color palette aligned with sustainability focus

- **Video Integration**: Sections for presentation and demo videosThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Project Showcase**: Detailed project overview and technology stack

- **Team Profiles**: About page with team member information, avatars, and social links## Expanding the ESLint configuration

- **GitHub Pages Ready**: Configured for automated deployment via GitHub Actions

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

## 🚀 Getting Started

```js

### Prerequisitesexport default defineConfig([

  globalIgnores(['dist']),

- Node.js (v20 or higher)  {

- npm    files: ['**/*.{ts,tsx}'],

    extends: [

### Installation      // Other configs...



1. Clone the repository:      // Remove tseslint.configs.recommended and replace with this

```bash      tseslint.configs.recommendedTypeChecked,

git clone https://github.com/SustainSync/SustainSync-Website.git      // Alternatively, use this for stricter rules

cd SustainSync-Website      tseslint.configs.strictTypeChecked,

```      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

2. Install dependencies:

```bash      // Other configs...

npm install    ],

```    languageOptions: {

      parserOptions: {

3. Run the development server:        project: ['./tsconfig.node.json', './tsconfig.app.json'],

```bash        tsconfigRootDir: import.meta.dirname,

npm run dev      },

```      // other options...

    },

4. Open your browser and navigate to `http://localhost:5173`  },

])

## 📦 Building for Production```



Build the project:You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```bash

npm run build```js

```// eslint.config.js

import reactX from 'eslint-plugin-react-x'

Preview the production build:import reactDom from 'eslint-plugin-react-dom'

```bash

npm run previewexport default defineConfig([

```  globalIgnores(['dist']),

  {

## 🚀 Deployment    files: ['**/*.{ts,tsx}'],

    extends: [

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow handles the build and deployment process.      // Other configs...

      // Enable lint rules for React

**Manual deployment:**      reactX.configs['recommended-typescript'],

1. Ensure GitHub Pages is enabled in repository settings      // Enable lint rules for React DOM

2. Set source to "GitHub Actions"      reactDom.configs.recommended,

3. Push changes to `main` branch    ],

    languageOptions: {

## 📁 Project Structure      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

```        tsconfigRootDir: import.meta.dirname,

SustainSync-Website/      },

├── public/               # Static assets (logo, etc.)      // other options...

├── src/    },

│   ├── assets/          # Additional assets  },

│   ├── components/      # Reusable components (Navbar, Footer)])

│   ├── pages/           # Page components (Home, About)```

│   ├── App.tsx          # Main app component with theme
│   ├── App.css          # App-specific styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

### Theme Colors
Edit the theme in `src/App.tsx`:
- Primary: `#2A4B36` (Dark Green)
- Secondary: `#8BC53F` (Accent Green)
- Background: `#f8faf7` (Light background)

### Team Members
Update team information in `src/pages/About.tsx`:
- Add member photos to `public/assets/`
- Update `avatar` property with image path
- Update name, role, bio, and social links

### Content
- **Home page**: Edit `src/pages/Home.tsx`
- **About page**: Edit `src/pages/About.tsx`
- **Navigation**: Edit `src/components/Navbar.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v7
- **Build Tool**: Vite
- **Router**: React Router v7
- **Deployment**: GitHub Pages via GitHub Actions

## 📄 License

This project is part of a senior computing project for educational purposes.

## 👥 Team

Visit the [About page](https://sustainsync.github.io/SustainSync-Website/about) to learn more about our team.
