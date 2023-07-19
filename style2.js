function animationbypixels() {
  document.getElementById("bu").disabled=true;
  document.getElementById("bu").classList.add('d');
  document.getElementById("bu").classList.remove('b');

  let animation = anime({
    targets: 'div',
    //translateX: "92vw",
    rotate: [720],
    borderRadius: [8,50,8],
    duration: 2000,
    easing: 'easeInOutSine',
    //direction: 'alternate',
    loop: true,
    backgroundcolor: "#1F28"
  });

  document.getElementById('dd').onmouseover = function () {
    //document.getElementById("pp").innerHTML = document.getElementById("pp").innerHTML + "ppover\n"
  }
  
  // let anim = anime.timeline({
  // duration: 1000, 
  // easing: 'linear',
  // direction: 'alternate', 
  // loop: true
  // });           
    
  // anim.add({
  //   targets: 'div',
  //   translateX: "92vw",
  //   //backgroundColor: 'rgb(255, 0, 0)'
  // }).add({
  //   targets: 'div',
  //   translateY: "40vw",
  //   //backgroundColor: 'rgb(0, 255, 0)'
  // }).add({
  //   targets: 'div',
  //   translateX: "-0.5vw",
  //   //backgroundColor: 'rgb(0, 0, 255)'
  // }).add({
  //   targets: 'div',
  //   translateY: "-30vw",
  //   //backgroundColor: 'rgb(0, 0, 255)'
  // });
}


// btw #1F28 is a good shade of green
