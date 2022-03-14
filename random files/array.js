let carros = ['Palio', 'Toro', 'Uno', 1, null, new Date(), undefined, function(){}]

console.log(carros)
console.log(carros.length)
console.log(carros[5].getFullYear())
console.log(carros[7]())

carros.forEach(function(value, index){

    console.log(value, index)

})
