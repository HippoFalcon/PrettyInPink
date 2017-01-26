N = 50;

function setup(){
 createCanvas( windowWidth , windowHeight );

//noStroke();
 
}

function draw(){
 
 for( n = 0 ; n < N ; n++ ){
 //BLACK L
 fill( mouseX,0,125 );
  stroke(mouseY,0,255);
   ellipse( random( -windowWidth , windowHeight ) , random( windowHeight , 0) ,
   random( 1 , 200));
  //WHITE R
  fill( 255,255,255);
  stroke(255,0,125);
   ellipse( random( windowWidth , windowHeight ) , random( windowHeight , 0)
   ,random( 1 , 200));
  //WHITE L
  fill( 255,255,255);
  stroke(255,0,125);
  ellipse( random( -windowWidth , windowHeight ) , random( windowHeight , 0) ,
  random( 1 , 20));
  //BLACK R
  fill( mouseX,0,125 );
  stroke(mouseY,0,255);
  ellipse( random( windowWidth , windowHeight ) , random( windowHeight , 0) ,
  random( 1 , 20));
 }
 
 
}
