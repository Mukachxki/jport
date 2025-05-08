// ***bg***
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

// ***Hamburger button***
const toggleBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


// ***Back to Top***
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ***project animation***
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          // Force reflow to restart the animation
          el.classList.remove("animate");
          void el.offsetWidth; // 💡 Triggers reflow
          el.classList.add("animate");
        } else {
          el.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  document.querySelectorAll('.tracking-in-expand').forEach(el => {
    observer.observe(el);
  });
});
