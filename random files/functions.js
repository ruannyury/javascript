function calc(a, b, operator){
    // resultado = a+b
    // return(resultado)

    return eval(`${a} ${operator} ${b}`) // eval: Interpreta o que tem 
    // dentro da string
}

let resultado = calc(2, 3, '+')
console.log(resultado)

(function(a, b, operator){

    return eval(`${a} ${operator} ${b}`)

})(1, 2, '*')

// Arrow functions também conseguem receber
// influências externas

let calculadora = (a, b, operator) => {return eval(`${a} ${operator} ${b}`)}
