# Jaladhi Patel - Flutter Developer Portfolio

A modern, dark-themed portfolio website showcasing my experience as a Flutter Developer with 4+ years of professional experience in mobile application development.

## ✨ Features

- **Modern Dark Theme** - Sleek, professional dark color scheme with accent gradients
- **Smooth Animations** - Scroll-triggered fade-in animations and smooth transitions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Clean Code** - Well-organized HTML, CSS, and JavaScript
- **Performance Optimized** - Fast loading times and smooth 60fps animations
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessible** - ARIA labels and keyboard navigation support

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Server (Recommended)
For the best experience, use a local development server:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (http-server):
```bash
npx http-server -p 8000
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # Interactions and animations
├── README.md           # This file
└── assets/             # (Optional) For images and icons
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section
Edit `index.html` around line 70-90:
```html
<h1 class="hero-name">Your Name</h1>
<h2 class="hero-title">Your Title</h2>
<p class="hero-location">📍 Your Location</p>
```

#### 2. About Me
Update the about section around line 115-130 in `index.html`

#### 3. Skills
Modify the skills categories around line 140-200:
```html
<span class="skill-tag">Your Skill</span>
```

#### 4. Experience
Edit the timeline items around line 225-290

#### 5. Projects
Update project cards starting around line 305

#### 6. Education
Modify education cards around line 550

#### 7. Contact Information
Update contact details around line 580:
```html
<a href="mailto:your.email@example.com">
<a href="tel:+1234567890">
<a href="https://linkedin.com/in/yourprofile">
```

### Customize Colors

Edit CSS variables in `css/styles.css` (around line 8-30):

```css
:root {
  --bg-primary: #0a0a0a;          /* Main background */
  --accent-primary: #00d4ff;       /* Primary accent color */
  --accent-secondary: #5865f2;     /* Secondary accent color */
  /* ... more variables */
}
```

### Customize Fonts

Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update the CSS variable:
```css
:root {
  --font-family: 'YourFont', sans-serif;
}
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)** - Vanilla JS for interactions
- **Google Fonts** - Inter font family
- **SVG Icons** - Inline SVG for social media icons

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Scores:**
  - Performance: 95+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

## 🎯 Key Features Explained

### Smooth Scroll Navigation
Click any navigation link to smoothly scroll to that section. The navigation automatically highlights the current section as you scroll.

### Scroll Animations
Elements fade in and slide up as they enter the viewport using the Intersection Observer API.

### Responsive Design
The layout adapts seamlessly across all screen sizes:
- **Desktop (1024px+)**: Full multi-column layout
- **Tablet (768px-1024px)**: Optimized two-column layout
- **Mobile (<768px)**: Single column with hamburger menu

### Mobile Menu
On mobile devices, the navigation collapses into a hamburger menu. Tap the icon to open/close the menu.

### Project Card Hover Effects
Project cards feature a subtle 3D tilt effect on hover (desktop only) using mouse position tracking.

### Scroll to Top Button
A floating button appears when you scroll down. Click it to smoothly return to the top of the page.

## 🔧 Advanced Customization

### Adding New Sections
1. Add the section HTML to `index.html`
2. Add a corresponding nav link
3. Style the section in `css/styles.css`
4. Add to smooth scroll in `js/script.js` if needed

### Disabling Optional Features

To disable the typing effect or project card tilt, comment out these lines in `js/script.js`:
```javascript
// initTypingEffect();
// initProjectCardTilt();
```

### Adding Analytics

Add Google Analytics or other tracking code before the closing `</head>` tag in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📦 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your main branch
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Vercel
```bash
npm install -g vercel
vercel
```

## 🐛 Troubleshooting

### Styles not loading?
- Check that `css/styles.css` path is correct
- Ensure you're using a local server (not just opening the file)
- Clear your browser cache

### Animations not working?
- Check browser console for JavaScript errors
- Ensure `js/script.js` is loaded correctly
- Try a different browser

### Mobile menu not working?
- Check JavaScript console for errors
- Ensure the hamburger button has the correct ID
- Verify `initMobileMenu()` is being called

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Contact

- **Email**: jaladhi.dev@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/jd-patel](https://www.linkedin.com/in/jd-patel)
- **Location**: Surat, Gujarat, India

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from inline SVGs
- Font: Inter by Rasmus Andersson

---

**Built with ❤️ using HTML, CSS & JavaScript**

*Last Updated: November 2025*
