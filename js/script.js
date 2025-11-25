/**
 * PORTFOLIO JAVASCRIPT - JALADHI PATEL
 * Handles smooth scrolling, animations, theme toggling, and interactions
 */

// ===============================================
// THEME TOGGLE
// ===============================================

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = html.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add a fun rotation animation
      themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
      setTimeout(() => {
        themeToggle.style.transform = '';
      }, 600);
    });
  }
}

// ===============================================
// SMOOTH SCROLL NAVIGATION
// ===============================================

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Smooth scroll to section
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Also handle scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (!anchor.classList.contains('nav-link')) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    }
  });
}

// ===============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ===============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Add stagger effect to project cards
        if (entry.target.classList.contains('project-card')) {
          const cards = document.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            if (entry.target === card) {
              card.style.animationDelay = `${index * 0.1}s`;
            }
          });
        }
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in, .project-card, .education-card, .skill-tag');
  fadeElements.forEach(el => observer.observe(el));
}

// ===============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ===============================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    // Also check for home section (hero)
    const heroSection = document.querySelector('.hero');
    if (heroSection && window.pageYOffset < heroSection.offsetTop + heroSection.clientHeight - 150) {
      current = 'home';
    }
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ===============================================
// MOBILE MENU TOGGLE
// ===============================================

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

// ===============================================
// SCROLL TO TOP BUTTON
// ===============================================

function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===============================================
// NAVBAR BACKGROUND ON SCROLL
// ===============================================

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (window.pageYOffset > 50) {
        if (theme === 'light') {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
          navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        if (theme === 'light') {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
          navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
        navbar.style.boxShadow = 'none';
      }
    });
  }
}

// ===============================================
// PROJECT CARD TILT EFFECT (Enhanced)
// ===============================================

function initProjectCardTilt() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ===============================================
// SKILL TAGS RANDOM ANIMATION
// ===============================================

function initSkillTagsAnimation() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
    
    // Add random hover animation
    tag.addEventListener('mouseenter', () => {
      const randomRotation = Math.random() * 10 - 5; // -5 to 5 degrees
      tag.style.transform = `translateY(-3px) rotate(${randomRotation}deg)`;
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = '';
    });
  });
}

// ===============================================
// PARALLAX HERO EFFECT
// ===============================================

function initParallaxEffect() {
  const heroVisual = document.querySelector('.hero-visual');
  
  if (heroVisual) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      heroVisual.style.transform = `translateY(${rate}px)`;
    });
  }
}

// ===============================================
// NUMBER COUNTER ANIMATION
// ===============================================

function initNumberCounters() {
  const counters = document.querySelectorAll('.highlight-number');
  
  const animateCounter = (element) => {
    const target = element.textContent.trim();
    const number = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/\d/g, '');
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < number) {
        element.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ===============================================
// INITIALIZE ALL FUNCTIONS
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initThemeToggle();
  initSmoothScroll();
  initScrollAnimations();
  updateActiveNavLink();
  initMobileMenu();
  initScrollToTop();
  initNavbarScroll();
  
  // Enhanced features
  initProjectCardTilt();
  initSkillTagsAnimation();
  initNumberCounters();
  // initParallaxEffect(); // Uncomment if desired
  
  // Log initialization
  console.log('Portfolio initialized successfully! 🚀');
  console.log('Theme:', document.documentElement.getAttribute('data-theme'));
});

// ===============================================
// PERFORMANCE OPTIMIZATION
// ===============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for resize events
function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===============================================
// SMOOTH PAGE LOAD
// ===============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  console.log('Page loaded! ✨');
  
  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll('.hero-content > *').forEach((el, index) => {
      el.style.animationPlayState = 'running';
    });
  }, 100);
});

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.style.opacity = '0';
window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.opacity = '1';
  document.documentElement.style.transition = 'opacity 0.3s ease';
});

// ===============================================
// KEYBOARD NAVIGATION
// ===============================================

document.addEventListener('keydown', (e) => {
  // Press 'T' to toggle theme
  if (e.key === 't' || e.key === 'T') {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.click();
    }
  }
  
  // Press ESC to close mobile menu
  if (e.key === 'Escape') {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }
});

// ===============================================
// EASTER EGG - KONAMI CODE
// ===============================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join('') === konamiPattern.join('')) {
    // Easter egg activated!
    document.body.style.animation = 'rainbow 2s ease infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
    console.log('🎉 Easter egg activated!');
  }
});
