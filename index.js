numberOfDrums = document.querySelectorAll('.drum').length

for(var i=0;i<numberOfDrums;i++){
  document.querySelectorAll('button')[i].addEventListener('click',function (){
    var buttonContent = this.innerHTML;
    makeSound(buttonContent);

    buttonAnimation(buttonContent);
  });
}

document.addEventListener("keydown",function (e){
  makeSound(e.key);

  buttonAnimation(e.key);
})

function buttonAnimation(key){
  var currentButton = document.querySelector("."+key);
  currentButton.classList.add("pressed");
  setTimeout(function (){
    currentButton.classList.remove("pressed");
  },50)
}

function makeSound(key){
  switch(key){
    case 'w':
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case 'a':
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case 's':
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case 'd':
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case 'j':
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case 'k':
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case 'l':
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    default:
    console.log("wrong key");
    break;
  }
}
