let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

alert("Olá Mundo! Adivinha o número em que estou a pensar. Tens 6 tentativas!")

let adivinhar = prompt('Adivinha o número da sorte entre 1 e 10')
adivinhar = Math.floor(Number(adivinhar))

console.log("nº sorte: " + numeroSorte, "nº visitante: " + adivinhar)

let ganhou = false
let tentativas = 6

if (adivinhar > 10 || adivinhar <= 0) {
    alert('Esse número não é válido, recomeça.')
} else {
    while (!ganhou) {
        if (numeroSorte === adivinhar) {
            alert('Certo!')
            ganhou = true

        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 2 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 2) {
            alert('Quase lá!')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 10')
            adivinhar = Math.floor(Number(adivinhar))
            tentativas - 1
        } else if (numeroSorte > adivinhar) {
            alert('Muito Abaixo')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 10')
            adivinhar = Math.floor(Number(adivinhar))
            tentativas - 1
        } else {
            alert('Muito Acima!')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 10')
            adivinhar = Math.floor(Number(adivinhar))
            tentativas - 1
        }
    }
}


// else if (tentativas === 0){
//                ganhou = true
//         }