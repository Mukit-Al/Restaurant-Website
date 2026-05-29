# Dine&Sync - Luxury Restaurant Website

A modern, visually stunning restaurant website for a fictional luxury restaurant brand called **Dine&Sync**. Built with React, Vite, TailwindCSS, and Framer Motion, this website features a dark luxury aesthetic with gold accents, smooth animations, and an immersive user experience.

![Dine&Sync](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.0-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-38B2AC) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-ff69b4)

## 🌟 Live Demo

**View the live website:** https://restaurant-website-ywaxv4h6e-mukit-s-projects.vercel.app/

To view the live website, deploy it using one of the options below or run it locally.

## ✨ Features

### Design & Aesthetics
- **Dark luxury theme** with gold, matte black, and glassmorphism effects
- **Cinematic typography** using Playfair Display and Montserrat fonts
- **Smooth animations** and micro-interactions throughout
- **Responsive design** optimized for desktop, tablet, and mobile
- **Floating particles** and ambient motion effects
- **Premium hero section** with animated background

### Website Sections
1. **Hero Section** - Full-screen cinematic hero with animated particles, CTA buttons, and scroll indicator
2. **About Section** - Storytelling layout with chef showcase and animated statistics (15+ years, 48 signature dishes, 50K+ guests, 4.9 rating)
3. **Signature Menu** - 4 category tabs (Starters, Main Course, Desserts, Beverages) with elegant dish cards - **NO PRICES**
4. **Dining Experience** - Interactive cards for Live Music, Private Dining, Chef's Table, and Rooftop experiences
5. **Gallery** - Masonry-style grid with lightbox preview and hover zoom animations
6. **Testimonials** - Luxury slider with customer reviews, profile images, and ratings
7. **Reservation** - Modern form with glowing effects, date/time pickers, and stylish submit button
8. **Contact** - Info cards with embedded dark-themed Google Map
9. **Footer** - Social links, newsletter subscription, quick links, and elegant design

### Interactive Features
- **Sticky transparent navbar** with blur effect on scroll
- **Smooth scrolling navigation** between sections
- **Scroll-triggered animations** using Framer Motion
- **Animated menu category switching** with smooth transitions
- **Lightbox image preview** in gallery
- **Hover effects** on buttons, cards, and images
- **Glowing form effects** in reservation section

## 🚀 Tech Stack

- **React 18.2.0** - UI library
- **Vite 5.0.0** - Build tool and dev server
- **TailwindCSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library
- **Lucide React 0.292.0** - Icon library
- **Google Fonts** - Playfair Display & Montserrat

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mukit-Al/Restaurant-Website.git
   cd Restaurant-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: http://localhost:5173
   - Network: Use the network URL shown in terminal to view on other devices on same Wi-Fi

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Vercel will auto-detect Vite and configure everything
4. Click "Deploy" - your site will be live in seconds

### Option 2: Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `dist` folder after running `npm run build`
3. Or connect your GitHub repository for automatic deployments

### Option 3: GitHub Pages (Free)

1. Run `npm run build`
2. Install gh-pages: `npm install -D gh-pages`
3. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist",
   "predeploy": "npm run build"
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings

### Option 4: Any Web Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web host

## 📱 Viewing on Mobile

To test on your phone:
1. Ensure phone and computer are on same Wi-Fi
2. Run `npm run dev -- --host`
3. Use the network URL shown (e.g., http://192.168.x.x:5173)
4. Open this URL on your phone

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  gold: {
    // Adjust gold shades
  },
  matte: {
    black: '#1A1A1A',
    dark: '#0D0D0D',
  },
}
```

### Modifying Content
- Edit component files in `src/components/` to change text, images, and content
- Update menu items in `src/components/Menu.jsx`
- Modify testimonials in `src/components/Testimonials.jsx`

### Adding Images
Replace image URLs in component files with your own images. Recommended size: 1000px+ width for optimal quality.

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**Mukit Al** - [GitHub](https://github.com/Mukit-Al)

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Fonts from Google Fonts
- Animation library: Framer Motion

---

**Note:** This is a portfolio project demonstrating modern web development skills with React, TailwindCSS, and advanced animations.
