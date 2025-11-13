# SustainSync Website - Setup Complete! 🎉

Your modern website for the SustainSync senior computing project has been successfully created!

## ✅ What's Been Built

### Pages Created:
1. **Home Page** (`/src/pages/Home.tsx`)
   - Hero section with project title
   - Video sections for presentation and demo (ready for your YouTube links)
   - Project overview/abstract section
   - Technology stack showcase with categorized chips

2. **About Page** (`/src/pages/About.tsx`)
   - Team member profiles section (4 team members ready to customize)
   - LinkedIn and GitHub links for each member
   - Team mission statement

### Components:
1. **Navbar** (`/src/components/Navbar.tsx`)
   - SustainSync logo
   - Home and About navigation links
   - GitHub repository link
   - Active page indicator

2. **Footer** (`/src/components/Footer.tsx`)
   - SustainSync branding
   - GitHub link
   - Copyright information

### Features:
- ✅ Material-UI components throughout
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom green sustainability theme
- ✅ React Router for navigation
- ✅ TypeScript for type safety
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Configured for GitHub Pages hosting

## 🚀 Current Status

**Dev Server Running**: http://localhost:5174/SustainSync-Website/

## 📝 Next Steps - Customization Checklist

### 1. Update Team Information
File: `/src/pages/About.tsx` (lines 11-35)

Replace the placeholder team member data:
```typescript
const teamMembers: TeamMember[] = [
  {
    name: 'Your Name',              // ← Update
    role: 'Your Role',              // ← Update
    bio: 'Your bio...',            // ← Update
    linkedin: 'your-linkedin-url',  // ← Update
    github: 'your-github-url',      // ← Update
  },
  // Add/remove team members as needed
];
```

### 2. Add Your Videos
File: `/src/pages/Home.tsx`

Find and replace YouTube video IDs:
- Line ~47: `YOUR_PRESENTATION_VIDEO_ID`
- Line ~85: `YOUR_DEMO_VIDEO_ID`

To get the video ID from a YouTube URL:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

### 3. Update Project Content
File: `/src/pages/Home.tsx`

**Project Overview** (lines 105-125):
- Customize the project description to match your actual project details

**Technology Stack** (lines 133-195):
- Add/remove technologies based on what you're actually using
- Update the chip labels to match your tech stack

### 4. Update GitHub Repository URLs
Files to update:
- `/src/components/Navbar.tsx` (line 80)
- `/src/components/Footer.tsx` (line 53)

Change: `https://github.com/SustainSync`
To: Your actual GitHub organization/user URL

### 5. Customize Theme Colors (Optional)
File: `/src/App.tsx` (lines 9-20)

The current theme uses green for sustainability:
```typescript
primary: {
  main: '#2e7d32',  // Green
}
```
Modify if you want different colors.

## 🌐 Deploying to GitHub Pages

### Prerequisites:
1. Push all code to your GitHub repository
2. Go to repository **Settings** → **Pages**
3. Under **Source**, select "GitHub Actions"

### Deployment:
- Every push to the `main` branch will automatically deploy
- The workflow file is at `.github/workflows/deploy.yml`
- Site URL will be: `https://your-username.github.io/SustainSync-Website/`

**Important**: Make sure the `base` in `vite.config.ts` matches your repository name:
```typescript
base: '/SustainSync-Website/',  // Must match your repo name
```

## 🎨 Styling Notes

- The site uses a green color scheme (#2e7d32) for sustainability branding
- Material-UI Grid system for responsive layouts
- Custom theme with rounded corners (borderRadius: 8-12px)
- Hover effects on cards and buttons
- Drop shadows for depth

## 📱 Responsive Breakpoints

- **xs**: 0-600px (mobile)
- **sm**: 600-900px (tablet)
- **md**: 900-1200px (small desktop)
- **lg**: 1200-1536px (desktop)
- **xl**: 1536px+ (large desktop)

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Key Files to Know

- `src/App.tsx` - Main app component, routing, and theme
- `src/pages/Home.tsx` - Home page content
- `src/pages/About.tsx` - About/team page content
- `src/components/Navbar.tsx` - Navigation bar
- `src/components/Footer.tsx` - Footer
- `vite.config.ts` - Build configuration (includes GitHub Pages base path)
- `.github/workflows/deploy.yml` - Deployment automation

## 💡 Tips

1. **Logo**: Your SustainSync logo is already configured (`/public/brand-logo.svg`)
2. **Favicon**: The logo is also set as the favicon in `index.html`
3. **SEO**: Meta description has been added to `index.html`
4. **Accessibility**: Proper ARIA labels are used throughout
5. **Mobile-First**: All layouts are responsive and mobile-friendly

## 🐛 Troubleshooting

**Build fails?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run build`

**Videos not showing?**
- Ensure YouTube video IDs are correct
- Videos must be publicly available
- Embedding must be enabled for the videos

**Page not found on GitHub Pages?**
- Verify the `base` path in `vite.config.ts` matches your repo name
- Check that GitHub Pages is set to use GitHub Actions as the source

## 🎓 Project Info

**Tech Stack Displayed:**
- Frontend: React, TypeScript, Material-UI, Vite
- Backend: Node.js, Express, MongoDB, REST API (customize as needed)
- DevOps: Git/GitHub, GitHub Pages, ESLint, CI/CD
- Additional: Docker, AWS, JWT Auth, WebSockets (customize as needed)

## 📞 Need Help?

Check the detailed README at `/WEBSITE-README.md` for more information.

---

**Current Dev Server**: http://localhost:5174/SustainSync-Website/

Your website is ready to customize! Open the dev server link in your browser to see it live. 🚀
