const menuToggle = document.querySelector(".menu-toggle");

let menuStatus = false;

const menuTl = gsap.timeline({
  defaults: {
    duration: 0.3,
    ease: "power4.inOut",
  },
});

menuTl.to(["main", "aside"], {
  x: 0,
  stagger: 0.2,
});

menuTl.paused(true);

menuToggle.addEventListener("click", () => {
  if (!menuStatus) {
    menuTl.play();
    menuStatus = true;
  } else {
    menuTl.reverse();
    menuStatus = false;
  }
});
