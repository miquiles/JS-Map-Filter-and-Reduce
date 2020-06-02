const array = [

    {nome : 'Iphone XR', preco: 5000.99, desconto: 0.2},
    {nome : 'Iphone 6', preco: 1000.99, desconto: 0.3},
    {nome : 'Iphone 8', preco: 3000.99, desconto: 0.5},
    {nome : 'Iphone 7', preco: 2500.90, desconto: 0.1},
    {nome : 'Iphone 5', preco: 500.00, desconto: 0.15},
]

function getCusto(getPrecoComDesconto){
    return parseInt(getPrecoComDesconto * 0.3) 
}

function getPrecoComDesconto(produto) {
    return produto.preco * (1-produto.desconto)
}

const resultado = array
.map(getPrecoComDesconto)
.map(getCusto)
console.log(resultado)