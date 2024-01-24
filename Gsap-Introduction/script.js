// gsap.to('.box', {
//   duration: 2,
//   backgroundColor: '#8d3dae',
// });

// gsap.to('.box', {
//   rotation: 360,
//   x: '100vw',
//   xPercent: 100,
//   // special properties
//   duration: 2, // how long the animation lasts
//   repeat: 2, // the number of repeats - this will play 3 times
//   yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
// });

// gsap.from('.box', { x: 400, y: 200, scale: 3, duration: 3 });

document.querySelectorAll('.box').forEach(function (box) {
  box.addEventListener('click', function () {
    gsap.to('.box', {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: 'back.in',
    });
  });
});
d;
