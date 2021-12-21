let bola;

bola = {
  x: 290,
  y: 190,
  diametro: 20,
  raio: 20 / 2,
  velocidadeX: 4,
  velocidadeY: 4,
};

function mostraBola() {
  image(imgBola, bola.x, bola.y, bola.diametro, bola.diametro);
}

function movimentaBola() {
  bola.x += bola.velocidadeX;
  bola.y += bola.velocidadeY;
}

function voltarBolaPosicaoInicial() {
  bola.x = 290;
  bola.y = 190;
}

function aumentaDificuldade(){
  if(bola.velocidadeX > 0){
    bola.velocidadeX +=1;
  }
}