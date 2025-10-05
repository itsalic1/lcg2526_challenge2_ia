let nuvolasinx = 80
let balloonx = 200

function setup() {
  createCanvas(400, 400);
  frameRate (25)
}

function draw() {
  //cielo
  background(135, 206, 235);
  
  //nuvoletta centro
  strokeWeight(0)
  fill("whitesmoke")
  ellipse (nuvolasinx + 170, 55, 60);
  ellipse (nuvolasinx + 205, 65, 60);
  ellipse (nuvolasinx + 240, 55, 60);
  ellipse (nuvolasinx + 205, 35, 60);
  
  // montagna destra
  strokeWeight(0);
  fill("gray");
  triangle(40, 400, 260, 60, 480, 400); 
  fill("lightgrey");
  triangle(70, 400, 260, 65, 480, 400); 
  fill("white");
  triangle(212, 150, 260, 65, 317, 150); 

   // neve
  fill("white");
  ellipse(228, 153, 30);
  ellipse(247, 150, 20);
  ellipse(265, 150, 40);
  ellipse(292, 150, 20);
  ellipse(295, 150, 30);
  
  //montagna sinistra
  strokeWeight(0)
  fill("grey");
  triangle(-30, 400, 155, 150, 330, 400);
  fill("lightgrey");
  triangle (0, 400, 155, 155, 330, 400);
  fill("white")
  triangle(120, 210, 155, 155, 195, 210);
  
  //neve
  fill("white");
  ellipse(128, 213, 15);
   fill("white");
  ellipse(158, 210, 20)
   fill("white");
  ellipse(141, 207, 17);
   fill("white");
  ellipse(175, 207, 17);
  fill("white");
  ellipse(187, 212, 15);

  //nuvoletta destra
  strokeWeight(0)
  fill("whitesmoke");
  ellipse (nuvolasinx + 250, 145, 60);
  ellipse (nuvolasinx + 285, 155, 60);
  ellipse (nuvolasinx + 320, 145, 60);
  ellipse (nuvolasinx + 285, 125, 60);
  
  
  //mongolfiera
  //pallone
  fill(255, 100, 100);
  ellipse(balloonx, 67, 40)
  //corde
  stroke(100);
  strokeWeight(1);
  line(balloonx - 8, 80, balloonx - 6, 95);
  line(balloonx + 8, 80, balloonx + 6, 95);
  // cesto
  fill("brown");
  noStroke();
  rect(balloonx - 6, 95, 12, 12); 
  
  //nuvoletta sinistra
  strokeWeight(0)
  fill("whitesmoke")
  ellipse (nuvolasinx + 70, 105, 60);
  ellipse (nuvolasinx + 35, 85, 60);
  ellipse (nuvolasinx, 105, 60);
  ellipse (nuvolasinx + 35, 115, 60);
 
  //prato
  fill(123, 179, 105)
  rect(0, 330, 400, 70)
  
  //animazione nuvole
  nuvolasinx = frameCount % width
  
  //animazione mongolfiera
   balloonx = (width + 50) - (frameCount % (width + 100));

}
