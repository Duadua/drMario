
function DrMario(){
    this.currentPill;
    this.fallenPills = [];
    this.monster = [];
   
    this.pillStop = () => {
      
      this.currentPill.stop = true;

      this.fallenPills.push(this.currentPill);
      this.currentPill = new Pill(randomColorGenerator(), randomColorGenerator());
      this.currentPill.fall();
    
      console.log(this.currentPill);     
    }

    this.drawAll = () => {
      this.fallenPills.forEach(e => {
        e.draw();
        this.checkCurrentPill(e);
      })
    }

    this.start = () => {

      this.currentPill.fall();
      this.drawAll();
    
      requestAnimationFrame(() => {
        this.start();
      })
    }

    this.checkCurrentPill = (pill) => {

      let currentPillWidthY;
      let currentPillWidth;
      let pillWidth;
      if(this.currentPill.horizontal){
        currentPillWidthY = halfPillWidth;
        currentPillWidth = halfPillWidth*2;
      } else {
        currentPillWidthY = halfPillWidth*2;
        currentPillWidth = halfPillWidth;
      }
      if(pill.horizontal){
        pillWidth = halfPillWidth;
      } else {
        pillWidth = 0;
      }

      if (this.currentPill.y + currentPillWidthY >= pill.y 
        && this.currentPill.y <= pill.y 
        && this.currentPill.x >= pill.x - currentPillWidth/2
        && this.currentPill.x <= pill.x + pillWidth 
        ){
        this.pillStop();
      }
    }
}


function randomColorGenerator(){
  let initial = Math.floor(Math.random()*300);

  let str = '#';

  for(let i=0; i<6; i++){
    str += randomLetter(Math.floor(Math.random()*6));
  }

  return str;
}

function randomLetter(num){
  switch(num){
    case 0 : return "A"; break;
    case 1 : return "B"; break;
    case 2 : return "C"; break;
    case 3 : return "D"; break;
    case 4 : return "E"; break;
    case 5 : return "F"; break;
  }
}