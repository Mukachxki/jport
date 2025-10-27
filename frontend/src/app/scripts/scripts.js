// utils/initScripts.js

export function initScripts() {
  if (typeof window === 'undefined') return;

  // Background scroll gradient
  let lastScrollY = window.scrollY;
  let angle = 135;
  let isScrolling = false;

  const updateGradientDirection = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    angle += direction === 'down' ? 1 : -1;
    angle = Math.max(90, Math.min(180, angle));
    document.body.style.setProperty('--bg-angle', `${angle}deg`);
    lastScrollY = currentScrollY;
    isScrolling = false;
  };

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(updateGradientDirection);
      isScrolling = true;
    }
  });

  // Hamburger toggle
    const toggleBtn = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
    } 



  // Back to top
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Project animation
  const animateOnScroll = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.remove("animate");
          void el.offsetWidth;
          el.classList.add("animate");
        } else {
          el.classList.remove("animate");
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('.tracking-in-expand').forEach(el => {
      observer.observe(el);
    });
  };

  document.addEventListener('DOMContentLoaded', animateOnScroll);

  // Load event animation
  window.addEventListener('load', () => {
    document.body.classList.add('animated');
  });

  // Start button animation
  const startButton = document.getElementById('startButton');
  if (startButton) {
    startButton.addEventListener('click', function (event) {
      event.preventDefault();
      startButton.classList.add('slide-in-bck-center');
      setTimeout(function () {
        if (startButton.classList.contains('slide-in-bck-center')) {
          window.location.href = startButton.getAttribute('href');
        }
      }, 700);
    });
  }

  // Typewriter effect
  document.addEventListener("DOMContentLoaded", function () {
    const wordElements = document.querySelectorAll("#words span");
    const words = Array.from(wordElements).map(el => el.textContent.trim());
    const target = document.getElementById("typewriter-text");

    if (!target || words.length === 0) return;

    let currentWord = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 800;

    function type() {
      const word = words[currentWord];
      const displayText = isDeleting
        ? word.substring(0, charIndex--)
        : word.substring(0, charIndex++);

      target.textContent = displayText;

      if (!isDeleting && charIndex === word.length + 1) {
        setTimeout(() => isDeleting = true, pauseTime);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length;
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
  });

  // Smooth scroll for anchors
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetEl = document.querySelector(this.getAttribute("href"));
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
}
// pentagon skill chart
const skillLevels = [80, 75, 60, 85, 90, 5]; // Percentage for each skill

const centerX = 100; 
const centerY = 100;

const basePoints = [
  [100, 20], [180, 75], [150, 175], [50, 175], [20, 75]
];

// Calculate new points based on skill levels
const pentagonPoints = basePoints.map(([x, y], i) => {
  let factor = skillLevels[i] / 100; // Scale based on percentage
  let newX = centerX + (x - centerX) * factor;
  let newY = centerY + (y - centerY) * factor;
  return `${newX},${newY}`;
}).join(" ");

