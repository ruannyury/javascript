console.log('Olá mundo!') // Comentário
/*

Comentário de bloco
Comentário de bloco

*/
/*
alert('Alerta.')
var mensagem = 'Olá mundo'
let mensagem2 = 'Variável de escopo' // Só é válida para o escopo em que está
const variavel1 = "Nunca mudar."
console.log(mensagem)

var numero = 2
var lista = [numero, 3, 'Olá.', 4, 5]
console.log(numero, lista)
console.log(typeof(lista[2]))
*/

let a = 10
const b = "10"

/*console.log(a == b) // Compara apenas o valor
console.log(a === b) // Levando em consideração o tipo do dado
console.log(a != b) // Diferente
console.log(a !== b) // Diferente*/

/*console.log(a == b || typeof b == string)

let cor = 'azul'

if (cor === 'verde'){
    console.log('siga')
} else if (cor === 'amarelo'){
    console.log('siga 2')
} else {
    console.log('pare')
}

switch (cor) {
    case 'verde':
        console.log('siga')
        break;

    case 'amarelo':
        console.log('atenção')
        break;

    case 'vermelho':
        console.log('pare')
        break;

    default:
        console.log('erro')
        break;
}

for (let num = 0; num < array.length; num++) {
    const element = array[num];
    verde
}

array.forEach(element => {
    index
});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

while (condition) {
    
}

do {
    
} while (condition);
*/
let n = 5
for (let i = 0; i <= 10; i++){

    console.log(
        `${i} X ${n} = ${i*n}`)
    //console.log(i + 'X' + n + ' = ' + (i*n))

}
