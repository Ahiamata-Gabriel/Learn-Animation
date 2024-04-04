const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".middle",
    start: "20% 70%",
    end: "bottom+=20% center",
    // scrub: true,
    // markers: true,
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
  },
  "-=.3"
);

// ***MY ANIMATION ***
// tl.from(".card1", {
//   y: 200,
//   duration: 2,
// })
//   .from(
//     ".card2",
//     {
//       y: -200,
//       duration: 2,
//     },
//     "<"
//   )
//   .to(
//     ".mask h2",
//     {
//       x: 130,
//       duration: 2,
//     },
//     "<"
//   );
