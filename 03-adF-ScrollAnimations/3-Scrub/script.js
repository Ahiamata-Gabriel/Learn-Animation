const tl = gsap.timeline({
  scrollTRigger: {
    trigger: ".primary",
    start: "top 20%",
    end: "bottom center",
    toggleActions: "play reverse restart reverse",
  },
  deaults: {
    ease: "power3.out",
    duration: 1,
  },
});

tl.from("h1", {
  yPercent: 100,
})
  .from(
    "aside p",
    {
      yPercent: 140,
    },
    "-=.8"
  )
  .from(
    "main p",
    {
      yPercent: 2010,
      opacity: 0,
    },
    "-=1"
  );
