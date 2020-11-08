//Create variables here
var dog,hungry,full
var score = 10
function preload()
{
  hungry = loadImage("dogImg.png")
  full = loadImage("dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(800, 800);
  dog = createSprite(400,400,30,30)
  dog.addImage("woof,hungry")
}


function draw() {  

  Text("score",700,100)
if (keyDown("space")){
  dog.addImage("no",full)
  score = score-1
}
   
  drawSprites();
  //add styles here

}



