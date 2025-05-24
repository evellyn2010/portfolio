let numeroSecreto= Math.floor(Math.random()* 10)+1;
let tentativas= 0;
console.log(numeroSecreto);

function jogo() {
     let numeroSecreto = Math.floor(Math.random() * 10) + 1;
     let palpite = document.getElementById("uva");

     if (numeroSecreto == palpite) {
        alert("parabens, acertou!!");
     } else {
        alert("errou, burro!!");
     }
}