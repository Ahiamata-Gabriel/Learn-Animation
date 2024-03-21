const container = document.querySelector(".container");

let tween = gsap.to(container, {
  borderRadius: "2%",
  width: "20vw",
  height: "28vw",
  paused: true,
});

let tween2 = gsap.to("p", {
  fontSize: "clamp(5rem, 5vw, 10rem)",
  x: 0,
  paused: true,
});

container.addEventListener("mouseenter", () => {
  tween.play();
  tween2.play();
});

container.addEventListener("mouseleave", () => {
  tween.reverse();
  tween2.reverse();
});
