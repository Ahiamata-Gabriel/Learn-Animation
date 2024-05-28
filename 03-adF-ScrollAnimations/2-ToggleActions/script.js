const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".middle",
    start: "top 20%",
    end: "bottom+=20% center",

    /* 
          The 4 states of Toggle Actions:

          onEnter - This action happens when you scroll into a specific section or element for the first time. Scrolling DOWN
          onLeave - This action happens when you scroll out of a specific section or element for the first time. Scrolling DOWN
          onEnterBack - This action happens when you scroll back into a specific section or element for the first time. Scrolling UP
          onLeaveBack - This action happens when you scroll back out of a specific section or element for the first time. Scrolling UP 

          Values: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none" 
          
      */
  },
});

tl.from(["h2", "h3", "p"], {
  yPercent: 150,
  stagger: 0.1,
}).from(
  ".box",
  {
    scaleY: 0,
    ease: "elastic.out(1, 0.5)",
    duration: 2,
    stagger: 0.3,
  },
  "-=.3"
);
