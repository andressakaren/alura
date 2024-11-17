alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número de 1 a 10: ');

// condição
if (chute == numeroSecreto) {
    alert(`Isso ai, você descobriu o número secreto: ${numeroSecreto}!!!`);
} else {
    alert('Você errou!! :(');
}


