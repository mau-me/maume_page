let gol01,
  gol02,
  larguraGol,
  alturaGol,
  bateuGol01,
  bateuGol02,
  ptsJogador01,
  ptsJogador02;

bateuGol01 = false;
bateuGol02 = false;
ptsJogador01 = ptsJogador02 = 0;

alturaGol = 80;
larguraGol = 5;

gol01 = {
  x: 30,
  y: 160,
};

gol02 = {
  x: 565,
  y: 160,
};

function mostraGols() {
  rect(gol01.x, gol01.y, larguraGol, alturaGol);
  rect(gol02.x, gol02.y, larguraGol, alturaGol);
}

function marcaGols() {
  
  bateuGol01 = collideRectRect(
    gol01.x,
    gol01.y,
    larguraGol,
    alturaGol,
    bola.x,
    bola.y,
    bola.diametro,
    bola.diametro
  );
  bateuGol02 = collideRectRect(
    gol02.x - larguraGol,
    gol02.y,
    larguraGol,
    alturaGol,
    bola.x,
    bola.y,
    bola.diametro,
    bola.diametro
  );

  if (bateuGol02) {
    somGol.play();
    ptsJogador01++;
    aumentaDificuldade();
    image(imgEhGol02, 420, 70, 150, 100);
    voltarBolaPosicaoInicial();
  }
  if (bateuGol01) {
    somGol.play();
    ptsJogador02++;
    aumentaDificuldade();
    bola.velocidadeX *= -1;
    image(imgEhGol01, 30, 70, 150, 100);
    voltarBolaPosicaoInicial();
  }
}
