var canva;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  textSize(30.5);
  fill("black");
  text("MathQuiz Game for class 7 CBSE ch-12 Algbraic Expressions",1,40);
  textSize(18);
  text("What should be the value of 'a' if the value of 2x^2 + x - a equals to 5 ,when x = 0 ? ",20,110);
  textSize(18);
  text("1: -5.5 ",70,150);
  text("2: -15 ",70,180);
  text("3: -5 ",70,210);
  text("4: 5 ",70,240);
  
 drawSprites();  
}
