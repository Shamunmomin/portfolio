# Java Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing 1 year of experience as a Java Full Stack Developer.

## Features

### 🎨 Design & Themes
- **Dark/Light Theme Toggle** - Switch between cyberpunk dark theme and clean light theme
- **Cyberpunk/Modern Dark Theme** - With neon accents and glow effects
- **Animated Gradient Mesh** - Aurora/mesh background with floating orbs
- **Glassmorphism** - Frosted glass effects with neon borders
- **Moving Particles** - Subtle floating particle animations

### ✨ Animations & Interactions
- **Typing Animation** - Typewriter effect for job title
- **Scroll Reveal** - Fade-in animations on scroll
- **Parallax Effects** - Layered depth throughout the page
- **Timeline Animation** - Animated experience timeline
- **Hover Effects** - Smooth transitions on cards, buttons, and links
- **Floating Particles/Glow** - Ambient background effects
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 Fully Responsive
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)
- Optimized layouts for all screen sizes

## Sections

1. **Hero Section** - Profile image, name, title, tagline, CTA buttons
2. **About Me** - Personal introduction, experience highlights, tech focus
3. **Skills** - Categorized by Backend, Frontend, Database, Tools & DevOps
4. **Projects** - 3 featured projects with images, tech stack, features
5. **Experience** - Animated timeline with responsibilities
6. **Education** - Academic background
7. **Achievements** - Certifications and accomplishments
8. **Resume** - Download section
9. **Contact** - Contact form and social links

## Tech Stack

- **React.js** - UI framework
- **Framer Motion** - Animations and transitions
- **React Icons** - Icon library
- **CSS3** - Custom styling with CSS variables
- **Vite** - Build tool and dev server

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

Visit `http://localhost:5173` to view the portfolio.

## Customization

### Personal Information

Update the following in `src/App.jsx`:

1. **Name & Title** (line ~200):
```javascript
<h1 className="hero-name">John Doe</h1>
// Change to your name

const fullText = "Java Full Stack Developer"
// Change to your title
```

2. **Profile Image** (line ~198):
```javascript
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
// Replace with your photo URL
```

3. **About Section** (lines ~230-260) - Update your bio

4. **Skills** (lines ~35-60) - Update skill levels

5. **Projects** (lines ~70-120) - Add your projects

6. **Experience** (lines ~130-160) - Add work history

7. **Education** (lines ~165-175) - Add education details

8. **Achievements** (lines ~180-190) - Add certifications

9. **Contact Info** (lines ~460-480) - Update contact details

10. **Social Links** - Update GitHub, LinkedIn URLs

### Styling

Edit `src/index.css` to customize:
- Color scheme (CSS variables at the top)
- Animations and timing
- Layout and spacing
- Typography

## Deployment

Build the project and deploy the `dist` folder:

```bash
npm run build
```

Upload the `dist` folder contents to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## License

MIT License - Feel free to use and customize!
