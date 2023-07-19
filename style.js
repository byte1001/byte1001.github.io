let animation = anime({
  targets: '.animatethis',
  duration: 1000,
  easing: 'easeInOutSine',
  loop: false,
  translateX: [-1000,0],
  hidden: false
});

let animation2 = anime({
  targets: '.animatethisaswell',
  duration: 1000,
  easing: 'easeInOutSine',
  loop: false,
  translateX: [5000,0],
  hidden: false
});
