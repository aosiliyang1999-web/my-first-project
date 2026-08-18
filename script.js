const year = document.querySelector('#year');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');
const revealElements = document.querySelectorAll('.reveal');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navList.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((element) => revealObserver.observe(element));
