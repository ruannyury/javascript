let celular = function(){

    this.cor = 'prata'

    this.ligar = function(){
        console.log('Uma ligação...')
        return 'Ligando...'
    }

}

let objeto = new celular()
console.log(objeto.cor)
console.log(objeto.ligar())

// Nova forma:
class Retangulo{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
}
