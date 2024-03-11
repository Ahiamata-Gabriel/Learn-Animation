const item = document.querySelector('.item');

const tl = gsap
  .timeline({ paused: true, defaults: { duration: 0.3 } })
  .to('.text', { color: 'white', x: 10 })
  .to('.text2', { color: 'white', x: 10 })
  .to('.dot', { backgroundColor: '#f93', scale: 1.5 }, 0);

item.addEventListener('mouseenter', () => {
  tl.play();
});

item.addEventListener('mouseleave', () => {
  tl.reverse();
});
