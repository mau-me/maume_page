let bateuBarra, bateuBola;

bateuBarra = bateuBola = false;

function verificaColisaoBordas() {
  if (bola.x + bola.diametro > width - 40 || bola.x - bola.raio < 20) {
    bola.velocidadeX *= -1;
  }
  if (bola.y + bola.diametro > height - 30 || bola.y - bola.raio < 20) {
    bola.velocidadeY *= -1;
  }
}

function verificaColisaoJogadores() {
  // verifica se a bola colidiu com a barra do jogadores
  

  for (var i = 0; i < jogadores.length; i++) {
    bateuBarra = collideRectRect(
      jogadores[i].x,
      jogadores[i].y,
      larguraBarra,
      alturaBarra,
      bola.x,
      bola.y,
      bola.diametro,
      bola.diametro
    );
    
    if(bateuBarra){
      bola.velocidadeX *= -1;
    }
  }
}