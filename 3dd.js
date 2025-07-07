   window.addEventListener('scroll', function () {
    const workText = document.querySelector('.work');
    const h1Text = document.querySelector('.banner .content h1');

    const screenHeight = window.innerHeight;
    const workPosition = workText.getBoundingClientRect().top;
    const h1Position = h1Text.getBoundingClientRect().top;

    // For .work
    if (workPosition < screenHeight - 100 && workPosition > 0) {
      workText.classList.add('show');
    } else {
      workText.classList.remove('show');
    }

    // For h1
    if (h1Position < screenHeight - 100 && h1Position > 0) {
      h1Text.classList.add('show');
    } else {
      h1Text.classList.remove('show');
    }
  });

let lastScrollTop = 0;
const header = document.querySelector('header'); // Selects the header tag

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop + 5) {
    // Scrolling down
    header.classList.add('hide');
  } else if (currentScroll < lastScrollTop - 5) {
    // Scrolling up
    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menuna');

toggle.addEventListener('click', () => {
  menu.classList.add('show');
  toggle.classList.add('hide');
});

document.querySelector('.closemen').addEventListener('click', () => {
  menu.classList.remove('show');
  toggle.classList.remove('hide');
});
const slider = document.querySelector('.slider');
const quantity = parseInt(slider.style.getPropertyValue('--quantity'), 10) || 10;
let currentIndex = 0;
let autoRotateInterval;
let isPaused = false;

// Helper to update the slider's rotation
function updateSlider() {
  slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${-currentIndex * (360 / quantity)}deg)`;
}

// Auto-rotate function
function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    if (!isPaused) {
      currentIndex = (currentIndex + 1) % quantity;
      updateSlider();
    }
  }, 2000); // Change slide every 2 seconds
}

function pauseAutoRotate() {
  isPaused = true;
  clearInterval(autoRotateInterval);
  setTimeout(() => {
    isPaused = false;
    startAutoRotate();
  }, 2000); // Pause for 2 seconds
}

// Button event listeners
document.getElementById('prevSlide').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + quantity) % quantity;
  updateSlider();
  pauseAutoRotate();
});

document.getElementById('nextSlide').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quantity;
  updateSlider();
  pauseAutoRotate();
});

// Initialize
updateSlider();
startAutoRotate();
