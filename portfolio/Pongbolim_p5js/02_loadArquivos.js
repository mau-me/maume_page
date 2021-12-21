// Imagens
let imgJogador01,
  imgJogador02,
  imgJogador03,
  imgJogador04,
  imgJogadores,
  imgBola;

// Sons
let somInicio, somGol, somTrilha;

function preload() {
  // Carregamento das Imagens
  imgJogador01 = loadImage("/07_img/imgDante-removebg.png");
  imgJogador02 = loadImage("/07_img/imgRonaldo-removebg.png");
  imgJogador03 = loadImage("/07_img/imgMessi-removebg.png");
  imgJogador04 = loadImage("/07_img/imgKun-removebg.png");
  imgJogadores = [imgJogador01, imgJogador02, imgJogador03, imgJogador04];
  imgBola = loadImage("/07_img/imgBola.png");
  imgEhGol01 = loadImage("/07_img/imgEhGol01.png");
  imgEhGol02 = loadImage("/07_img/imgEhGol02.png");

  //Carregamento dos Sons
  somInicio = loadSound("/08_sound/somInicio.mp3");
  somGol = loadSound("/08_sound/somGol.mp3");
  somTrilha = loadSound("/08_sound/somTrilha.mp3");
}
