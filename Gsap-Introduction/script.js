gsap.to('.logo', { duration: 2, x: 300, ease: 'bounce.inOut' });
gsap.to('#demo', {
  duration: 5,
  backgroundColor: '#560563',
  ease: 'slow(0.7,0.7,false)',
});

gsap.from('.hero__image', {
  duration: 1.5,
  scale: 0.3,
  ease: 'in',
  x: 50,
});
