gsap.registerPlugin(ScrollTrigger);

gsap.from('.herman', {
  duration: 3,
  x: '-50vw',
  rotation: -360,
  ease: 'linear',
  scrollTrigger: {
    trigger: '.herman',
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
  },
});
