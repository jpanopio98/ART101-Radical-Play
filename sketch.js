'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
function setup(){
  cnv = createCanvas(w,h);
  textFont('monospace');
}

function draw(){


  switch(state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
      case 'YOU WIN':
        youWin();
        cnv.mouseClicked(youWinMouseClicked);
        break;
      default:
      break;
  }



}




function title(){
  background(0);
  textSize(10);
  fill(255);
  textAlign(CENTER);
  text('ZA WARUDO',w/2,h/5);
  text('click anywhere to start',width/2,h/2);
  textSize(10);

}

function titleMouseClicked(){

    console.log('canvas is clicked on title page');
    state = 'level 1';

}

function level1(){
  background(50,150,200);
  text('DIO!',0,height - 50);
  textSize(30);
  text('ORA ORA ORAs:' + points,0,height - 10);
  textSize(30);
}

function level1MouseClicked(){
  points++;
  if(points >= 10){
    state = 'YOU WIN';
  }
}



function youWin(){
  background(255,50,80);
  textSize(80);
  stroke(255);
  text('ROADA ROLLA DA',100,100);
  text('click anywhere to re-start',70,300);
  textSize(10);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
