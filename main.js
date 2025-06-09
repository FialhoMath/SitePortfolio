document.addEventListener('DOMContentLoaded', () => {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      const destino = document.querySelector(href);

      if (destino) {
        event.preventDefault();
        destino.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
        });
      }
    });
  });
});
