const TECLA_W = 87;
const TECLA_S = 83;

//variáveis da barras dos jogadores
let barra01Jogador01,
  barra02Jogador01,
  barra01Jogador02,
  barra02Jogador02,
  larguraBarra,
  alturaBarra,
  jogadores,
  velocidadeJogador;

alturaBarra = 50;
larguraBarra = 50;
velocidadeJogador = 5;

barra01Jogador01 = {
  x: 60,
  y: 170,
};

barra02Jogador01 = {
  x: 180,
  y: 170,
};

barra01Jogador02 = {
  x: 350,
  y: 170,
};

barra02Jogador02 = {
  x: 480,
  y: 170,
};

jogadores = [
  barra01Jogador01,
  barra01Jogador02,
  barra02Jogador01,
  barra02Jogador02,
];

let quant = jogadores.length;

function mostraBarraJogadores() {
  for (var i = 0; i < jogadores.length; i++) {
    image(
      imgJogadores[i],
      jogadores[i].x,
      jogadores[i].y,
      larguraBarra,
      alturaBarra
    );
  }
}

function movimentaJogadores() {
  if (keyIsDown(UP_ARROW)) {
    if (jogadores[2].y > 20) {
      jogadores[2].y -= velocidadeJogador;
      jogadores[3].y -= velocidadeJogador;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (jogadores[2].y < height - 70) {
      jogadores[2].y += velocidadeJogador;
      jogadores[3].y += velocidadeJogador;
    }
  }
  if (keyIsDown(TECLA_W)) {
    if (jogadores[0].y > 20) {
      jogadores[0].y -= velocidadeJogador;
      jogadores[1].y -= velocidadeJogador;
    }
  }
  if (keyIsDown(TECLA_S)) {
    if (jogadores[0].y < height - 70) {
      jogadores[0].y += velocidadeJogador;
      jogadores[1].y += velocidadeJogador;
    }
  }
}