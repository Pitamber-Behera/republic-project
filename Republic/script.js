// Animate the text on load
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.style.transition = 'transform 1s ease, color 1s ease';
    title.style.transform = 'scale(1.2)';
    title.style.color = '#128807';
  
    setTimeout(() => {
      title.style.transform = 'scale(1)';
      title.style.color = '#ff9933';
    }, 1000);
  });
  