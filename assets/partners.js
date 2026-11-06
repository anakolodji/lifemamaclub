(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) { item.classList.add('reveal', 'is-visible'); });
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach(function (item) {
      item.classList.add('reveal');
      observer.observe(item);
    });
  }

  document.querySelectorAll('.faq-list details').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      document.querySelectorAll('.faq-list details[open]').forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
})();
