alert("Olá Mundo! Vamos fazer contas simples.")

let operaçaoUtilizador = prompt("insere uma das operçaoes: soma, subetrçao, multiplicaçao ou divisao")
console.log(operaçaoUtilizador)

let numUm = prompt("insere o numero da esquerda")
console.log(Number(numUm))

let numDois = prompt("insere o numero da direita")
console.log(Number(numDois))

let result = numUm + operaçaoUtilizador + numDois

if (operaçaoUtilizador === 'soma') {
    // console.log("soma")
} else if (operaçaoUtilizador === 'subtraçao') {
    // console.log("subtraçao")
} else if (operaçaoUtilizador === 'multiplicaçao') {
    // console.log("multiplicaçao")
} else if (operaçaoUtilizador === 'divisao') {
    // console.log("divisao")
} else {
    alert("operaçao  invalida")
}

alert("o total é: " + result)
