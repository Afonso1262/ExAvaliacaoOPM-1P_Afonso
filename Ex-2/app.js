alert("Olá Mundo")

let numero = prompt("insere um numero")
let resultado = numero % 2


if (resultado === 0) {
    alert('Par')

} else if (resultado === 1) {
    alert('impar')

} else {
    alert("insere um numero")
    numero = prompt("insere um numero")
}

