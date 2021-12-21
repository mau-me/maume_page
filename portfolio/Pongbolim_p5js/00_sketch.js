function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
  somInicio.play();
}

function draw() {  
  desenhaCampo();
  mostraBola();
  setTimeout(movimentaBola, 1000);
  verificaColisaoBordas();
  mostraBarraJogadores();
  movimentaJogadores();
  verificaColisaoJogadores();
  mostraGols();
  marcaGols();
  mostraPlacar();
}