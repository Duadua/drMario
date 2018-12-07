let halfPillWidth = 20;
let speed = 55;

function Pill(right, left){
  this.rightPill = right;
  this.leftPill = left;
  this.horizontal = true;
  this.x = 10;
  this.y = 10;
  this.i = 0;

  this.stop = false;

  this.draw = () => {
    // console.log(this.leftPill);

    if(this.horizontal){
      ctx.fillStyle=this.leftPill;

      ctx.fillRect(this.x,this.y,halfPillWidth,halfPillWidth);
      ctx.fillStyle=this.rightPill;
      ctx.fillRect(this.x+halfPillWidth, this.y, halfPillWidth, halfPillWidth);  
    } else {
      ctx.fillStyle = this.leftPill;
      
      ctx.fillRect(this.x, this.y, halfPillWidth, halfPillWidth);
      ctx.fillStyle = this.rightPill;
      ctx.fillRect(this.x, this.y + halfPillWidth, halfPillWidth, halfPillWidth);
    }
  }
    
}

Pill.prototype.move = function(direction) {
  switch(direction){
    case "right": this.x += halfPillWidth; break;
    case "left": this.x -= halfPillWidth; break;
    case "down": while(this.i % speed !== 0) {
      this.i++; 
      // console.log(this.i);
    } this.y += halfPillWidth;
      break;
  }
}

Pill.prototype.fall = function(){
  ctx.clearRect(0,0,5000,5000);
 
  this.i++;

  if(this.i % speed === 0){
    this.y += halfPillWidth;
  }
  
  this.draw();
  
  if(this.y > 400){
    game.pillStop();
  }    
}

Pill.prototype.rotate = function() {
  let temp;

  if(this.horizontal){
    this.y-= halfPillWidth;
    
  } else {
    this.y += halfPillWidth;
    
    temp = this.rightPill;
    this.rightPill = this.leftPill;
    this.leftPill = temp;
  }


  this.horizontal = !this.horizontal;
}