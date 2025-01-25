// JavaScript for interactivity if needed
document.querySelectorAll('.images img').forEach(img => {
    img.addEventListener('click', () => {
      alert(`You clicked on ${img.alt}`);
    });
  });
  