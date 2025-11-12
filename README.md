# SustainSync Project Website

A professional single-page React portfolio website with Material UI, ready for GitHub Pages.

## Features

- **React + Material UI**: Modern component-based UI with Google's Material Design
- **Static Site**: No build process needed - runs entirely in the browser using CDN libraries
- **GitHub Pages Ready**: Can be deployed directly to GitHub Pages
- **Project Information**: Project ID (SS-2025-001), course details (CS 499 - Fall 2025)
- **Team Bios**: Two team members with bio pictures and names
- **Documentation Links**: All project documents in PDF format
- **GitHub Repository Link**: Direct link to the project's GitHub repository
- **Video Presentation Link**: Link to the final presentation video
- **No Scrolling Required**: All content visible on landing page

## Technologies

- React 18 (via CDN)
- Material UI 5 (via CDN)
- Babel Standalone (for JSX compilation in browser)

## How to Use

1. **View Locally**: Open `index.html` in your web browser
2. **Deploy to GitHub Pages**:
   - Push to your repository
   - Go to Settings > Pages
   - Select your branch and `/` (root) folder
   - Save and your site will be live!

## Customization Guide

### Update Project Info
Edit `app.js` and modify:
- Project title, ID, course info in the header section
- Team members array with names and roles
- Technologies array with your tech stack

### Replace Team Photos
Replace the images in the `images/` folder:
- `member1.jpg`
- `member2.jpg`

### Add Your Documents
Replace the PDF files in the `docs/` folder:
- `project-proposal.pdf`
- `requirements-specification.pdf`
- `design-document.pdf`
- `final-report.pdf`

### Update Links
In `app.js`, find and update:
- GitHub URL in the ResourceLink component
- Video URL in the ResourceLink component

### Change Theme Colors
In `app.js`, modify the `createTheme` section:
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea', // Your primary color
    },
    secondary: {
      main: '#764ba2', // Your secondary color
    },
  },
});
```

## File Structure

```
SustainSync/
├── index.html              # Main HTML file (loads React & Material UI)
├── app.js                  # React application code
├── images/                 # Team bio pictures
│   ├── member1.jpg
│   └── member2.jpg
└── docs/                   # PDF documentation
    ├── project-proposal.pdf
    ├── requirements-specification.pdf
    ├── design-document.pdf
    └── final-report.pdf
```

## GitHub Pages Deployment

This site is optimized for GitHub Pages with no build step required:

1. Commit all files to your repository
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://[username].github.io/[repo-name]`

All dependencies are loaded from CDN, so the site works immediately without any npm install or build process!

