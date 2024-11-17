alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não igual ao numerosSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 10: ');
    // condição
    if (chute == numeroSecreto) {
        alert(`Isso ai, você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} tentativas.!!!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++
    }

}


