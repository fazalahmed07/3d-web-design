
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
