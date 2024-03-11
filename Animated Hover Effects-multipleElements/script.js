const items = document.querySelectorAll('.item');

items.forEach((item) => {
  const tl = gsap
    .timeline({ paused: true, defaults: { duration: 0.3 } })
    .to(item.querySelector('.text'), {
      color: 'white',
      x: 10,
      scale: 1,
      transformOrigin: 'left center',
    })
    .to(item.querySelector('.dot'), { backgroundColor: '#f93', scale: 1.5 }, 0);

  item.addEventListener('mouseenter', () => {
    tl.play();
  });

  item.addEventListener('mouseleave', () => {
    tl.reverse();
  });
});
