alert("Olá Mundo")

let nome = prompt("Qual é o teu nome?")
console.log(nome)

alert("Olá " + nome)

let artista = prompt("Qual é o teu artista multimédia de eleição?")
console.log(artista)

alert("Não conheço a/o " + artista + "! Eu gosto muito da Mileece: https://www.mileece.is/bio")

let resposta = prompt("Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não")
console.log(resposta)

let pagina = false
while (!pagina) {
    if (resposta === "1") {
        alert('YAY! Aproveita a Página!')
        pagina = true

    } else if (resposta === "0") {
        alert('oh ok :(')
        pagina = true

    } else {
        alert('Escolhe um por favor')
        resposta = prompt("Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não")
    }
}
