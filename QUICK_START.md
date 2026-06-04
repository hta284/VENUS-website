# ?? CocoVenus Landing Page - Quick Start Guide

## ?? Prerequisites
- Node.js 18+ (? Installed)
- npm (? Installed)
- Modern browser (Chrome, Firefox, Safari, Edge)

## ?? Getting Started

### 1. Install Dependencies (Already Done ?)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Then open: http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder

### 4. Preview Production Build
```bash
npm run preview
```

## ?? Project Structure
```
src/
+-- components/         # 15 React components
¦   +-- Header.tsx     # Navigation & Logo
¦   +-- Hero.tsx       # Hero section with CTA
¦   +-- Products.tsx   # Product grid cards
¦   +-- Benefits.tsx   # Feature benefits
¦   +-- Reviews.tsx    # Customer testimonials
¦   +-- Dashboard.tsx  # Stats & comparison table (NEW)
¦   +-- Newsletter.tsx # Email signup
¦   +-- Footer.tsx     # Footer with links
¦   +-- ... (9 more)
+-- App.tsx            # Main app component
+-- index.css          # Tailwind + custom styles

dist/                  # Production build
+-- index.html
+-- assets/
¦   +-- index-*.css    # Compiled styles
¦   +-- index-*.js     # Compiled JavaScript
```

## ?? Design System

### Colors Used
- ?? Primary: #FF6B9D (Pink)
- ?? Secondary: #A8D5BA (Green)
- ?? Tertiary: #8B7B8F (Purple)
- ? Accent: #FFD700 (Gold)

### Key Features
- ? Soft UI + Glassmorphism design
- ? Smooth 300ms transitions
- ? Responsive (mobile-first)
- ? Floating animations
- ? Gradient backgrounds
- ? Interactive hover states

## ?? Customization

### Change Colors
Edit `src/index.css` @theme section:
```css
--color-brand-primary: #FF6B9D;  /* Change this */
```

### Add New Component
1. Create `src/components/MyComponent.tsx`
2. Import in `src/App.tsx`
3. Add to render

### Modify Content
Edit text, images, and data directly in component files

## ?? Build Status
- ? Compilation: SUCCESS
- ? Bundle Size: 57KB CSS + 254KB JS
- ? Gzip: 8.6KB CSS + 73.8KB JS
- ? Performance: Optimized

## ?? Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your hosting
3. Set index.html as entry point

## ?? Troubleshooting

### Port 3000 Already In Use
```bash
npm run dev -- --port 3001
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Failures
```bash
npm run clean
npm install
npm run build
```

## ?? Support
For issues, check:
1. Node version: `node --version`
2. npm version: `npm --version`
3. Dependencies: `npm list`

## ?? Notes
- All components use Tailwind CSS
- Lucide React for icons
- Responsive breakpoints: 375px, 768px, 1024px, 1440px
- Motion: Respect prefers-reduced-motion setting
- SEO: Update metadata in public/index.html

---
**Happy coding! ??**
