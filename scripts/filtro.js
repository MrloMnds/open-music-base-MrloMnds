let generos = document.getElementById('lista-generos')
categories.forEach(element => {
    let li = document.createElement('li')
    li.innerText = element
    li.setAttribute('class', 'item-filtro')
    if (element === 'Todos') {
        li.setAttribute('id', 'selecionado')
    }
    generos.append(li)
});

const precosCrescente = products.map(({price}) => price).sort((a, b) => a - b)
let maiorPreco = precosCrescente[precosCrescente.length-1]

let inputRange = document.getElementsByClassName('filtro-preco')[0]
inputRange.setAttribute('max', maiorPreco)
inputRange.setAttribute('value', maiorPreco)
let precoMax = document.getElementsByClassName('precoMax')[0]
let precoFormatado = (Number(inputRange.value)).toFixed(2)
precoMax.innerText = `Até R$ ${(precoFormatado)}`
inputRange.addEventListener('mousemove', () => {
    let precoMax = document.getElementsByClassName('precoMax')[0]
    let precoFormatado = (Number(inputRange.value)).toFixed(2)
    precoMax.innerText = `Até R$ ${(precoFormatado)}`
})