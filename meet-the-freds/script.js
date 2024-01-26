// gsap.from('.title', {
//   duration: 4,
//   delay: 1,
//   opacity: 0,
//   scale: 0,
// });

// gsap.from('#freds img', {
//   duration: 0.5,
//   delay: 5,
//   scale: 0,
//   stagger: 0.5,
// });

// gsap.set('#demo', { scale: 1 });
gsap
  .timeline()
  .from('#demo', {
    opacity: 0,
    duration: 2,
  })
  .from('.title', {
    // opacity: 0,
    // scale: 0,
    xPercent: -100,
    ease: 'back',
    duration: 2,
  })
  .from('#freds img', {
    duration: 0.8,
    y: 160,
    stagger: 0.2,
    ease: 'back',
    opacity: 0,
  })
  .from('#time', {
    duration: 1,
    // opacity: 0,
    xPercent: -100,
  });
