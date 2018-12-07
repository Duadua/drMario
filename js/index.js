let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "black";
canvas.height = "500";
canvas.width = "300";



window.addEventListener("keydown", function(event){
  console.log(event.keyCode);
  
  switch(event.keyCode){
    case 39:
    case 68: game.currentPill.move("right"); break;
    case 37:
    case 65: game.currentPill.move("left"); break;
    case 32: game.currentPill.rotate(); break;
    case 40: game.currentPill.move("down"); break;
  }
  
})

let game = new DrMario()

console.log(randomColorGenerator());

game.currentPill = new Pill(randomColorGenerator(), randomColorGenerator());

game.start();