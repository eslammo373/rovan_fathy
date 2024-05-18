
// preloader
let loader = document.getElementById("preloader");

function   autoplay(){
      window.addEventListener("load", function(){
        loader.style.display = 'none';
      });

}
autoplay();

// writter effect

var typed = new Typed('.animate', {
  strings: [
      'البشمهندسه روفان فتحي ',
      'البشمهندسه روفان فتحي ',
      'الدكتورة المنتظرة'
    

     
  ],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});  
window.onload = function() {
    
};

//  music play

document

  window.addEventListener("click", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });

document.getElementsByClassName("confetti-button")[0].addEventListener("click", ()=>{
   let canvas = document.createElement("canvas");
   canvas.width = 600;
   canvas.height = 600;
   let container = document.getElementsByClassName("button-wrapper")[0];
   container.appendChild(canvas);
    let confetti_button  = confetti.create(canvas);
   confetti_button({
    particleCount: 200,
    spread: 200,
    startVelocity:15,
    scalar:0.9,
    ticks:90
   }).then(() => container.removeChild(canvas) );
});


