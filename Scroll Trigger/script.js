gsap.registerPlugin(ScrollTrigger);

gsap.from('.herman', {
  duration: 10,
  x: '-50vw',
  rotation: -360,
  ease: 'linear',
  scrollTrigger: {
    trigger: '.herman',
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    //event:       onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'restart pause reverse reset',
    //options: play, pause, resume, reset, restart, complete, reverse
  },
});
