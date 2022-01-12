import Coutdown from "./countdown.js";

const tempoParaVerCaju = new Coutdown("14 January 2022 10:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function atualizarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaVerCaju.total[index];
  });
}

atualizarTempo();
setInterval(atualizarTempo, 1000);
