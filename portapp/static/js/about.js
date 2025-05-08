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

const toggleBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // reverse on scroll out
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the element is visible
    }
  );

  document.querySelectorAll('.tracking-in-expand').forEach(el => {
    observer.observe(el);
  });
});