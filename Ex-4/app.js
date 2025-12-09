let numeroSorte = Math.random() * 100 + 1
numeroSorte = Math.floor(numeroSorte)

let adivinhar = prompt('Adivinha o número da sorte entre 1 e 100')
adivinhar = Math.floor(Number(adivinhar))

console.log("nº sorte: " + numeroSorte, "nº visitante: " + adivinhar)

let ganhou = false

if (adivinhar > 100 || adivinhar <= 0) {
    alert('Número Inválido. Tenta De novo.')
} else {
    while (!ganhou) {
        if (numeroSorte === adivinhar) {
            alert('Certo!')
            ganhou = true

        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 5 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 5) {
            alert('Quase lá!')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 100')
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert('Muito Abaixo')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 100')
            adivinhar = Math.floor(Number(adivinhar))
        } else {
            alert('Muito Acima!')

            adivinhar = prompt('Adivinha o número da sorte entre 1 e 100')
            adivinhar = Math.floor(Number(adivinhar))
        }
    }
}