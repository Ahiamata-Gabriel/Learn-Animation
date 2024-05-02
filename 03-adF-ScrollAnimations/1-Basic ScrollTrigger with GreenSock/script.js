const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".middle",
    start: "top center",
    end: "bottom 20%",
    //markers: true,
  },
});

tl.from(["h2", "h3", "p"], {
  yPercent: 140,
  stagger: 0.1,
}).from(
  ".box",
  {
    scaleY: 0,
    ease: "elastic.out(1,0.5)",
    duration: 2,
    stagger: 0.1,
  },
  "-=.3"
);
