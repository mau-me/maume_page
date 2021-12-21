function desenhaCampo() {
  background("rgb(124, 252, 0)");
  // Campo Tracejado
  fill(color(99, 202, 0));
  noStroke();
  rect(0, -1, 60, 400);
  rect(120, -1, 60, 400);
  rect(240, -1, 60, 400);
  rect(360, -1, 60, 400);
  rect(480, -1, 60, 400);

  noFill();
  strokeWeight(4);
  stroke(255);

  // Retangulo do Campo
  rect(30, 30, 540, 340);
  strokeWeight(3);

  // Retangulos das Grande Areas
  rect(30, 118, 80, 165);
  rect(490, 118, 80, 165);

  // Retangulos da Pequena Area
  rect(30, 150, 30, 100);
  rect(540, 150, 30, 100);

  // Retangulos do Gol
  rect(15, 170, 15, 60);
  rect(570, 170, 15, 60);

  // Marcas de Penaltis
  fill("red");
  circle(90, 200, 5);
  circle(510, 200, 5);
  noFill();

  // Linha do Meio de Campo
  rect(299, 30, 2, 340);

  // Circulos do Meio de Campo
  circle(300, 200, 100);
  circle(300, 200, 7.5);

  // Circulos da Antrada da Area
  arc(490, 200, 40, 60, PI / 2, (3 * PI) / 2);
  arc(110, 200, 40, 60, (3 * PI) / 2, PI / 2);

  // Escanteios
  arc(30, 30, 30, 30, 0, HALF_PI);
  arc(570, 30, 30, 30, HALF_PI, PI);
  arc(570, 370, 30, 30, PI, PI + HALF_PI);
  arc(30, 370, 30, 30, PI + HALF_PI, TWO_PI);
}

function mostraPlacar() {
  stroke(0);
  fill(255);
  textAlign(CENTER);
  textSize(25);
  text("BRA", 210, 22);
  noStroke();
  fill(color(40, 160, 220));
  rect(240, 1, 35, 25);
  fill(255);
  text(ptsJogador01, 257, 22);
  text("x", 300, 22);
  fill(color(40, 160, 220));
  rect(330, 1, 35, 25);
  fill(255);
  text(ptsJogador02, 347, 22);
  stroke(0);
  fill(255);
  text("ARG", 400, 22);
}
