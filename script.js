document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');
  const scrollProgress = document.getElementById('scroll-progress');
  const logo = document.querySelector('.logo');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Fade-in animation on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Scroll progress bar
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // Logo subtle bounce on hover handled via CSS but fallback JS for keyboard focus
  logo.addEventListener('focus', () => {
    logo.style.transform = 'scale(1.05) translateY(-3px)';
  });

  logo.addEventListener('blur', () => {
    logo.style.transform = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".month-toggle");

  toggles.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
      this.textContent = this.textContent.includes("▼")
        ? this.textContent.replace("▼", "▲")
        : this.textContent.replace("▲", "▼");
    });
  });
});

