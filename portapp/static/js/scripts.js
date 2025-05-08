window.addEventListener('load', () => {
  document.body.classList.add('animated');
});
// Get the Start button element
const startButton = document.getElementById('startButton');

// Add event listener to the Start button
startButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Add the animation class to the Start button
    startButton.classList.add('slide-in-bck-center');

    // Log to check if class is added
    console.log('Animation class added:', startButton.classList);

    // Set a timeout to delay navigation after the animation
    setTimeout(function() {
        // Check if the animation class is added before navigating
        if (startButton.classList.contains('slide-in-bck-center')) {
            console.log('Redirecting after animation...');
            window.location.href = startButton.getAttribute('href'); // Redirect to the "about" page after the animation
        }
    }, 700); // Delay to match the animation duration
});

/* ---------------- type effect ---------------- */

document.addEventListener("DOMContentLoaded", function () {
  const wordElements = document.querySelectorAll("#words span");
  const words = Array.from(wordElements).map(el => el.textContent.trim());

  const target = document.getElementById("typewriter-text");
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

