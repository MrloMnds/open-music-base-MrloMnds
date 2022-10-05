let listaAlbuns = document.getElementsByClassName('lista-albuns')[0]

function criarCard(obj) {
    let li = document.createElement('li')
    let divImg = document.createElement('div')
    let image = document.createElement('img')
    let divInfo = document.createElement('div')
    let p = document.createElement('p')
    let h2 = document.createElement('h2')
    let divPrecoComprar = document.createElement('div')
    let h3 = document.createElement('h3')
    let button = document.createElement('button')

    li.classList = 'card'
    divImg.classList = 'div-img'
    image.src = obj.img
    image.alt = `${obj.title}, ${obj.band}`
    divInfo.classList = 'div-info'
    p.innerText = `${obj.band} - ${obj.year}`
    h2.innerText = obj.title
    divPrecoComprar.classList = 'preco-comprar'
    h3.innerText = `R$ ${obj.price.toFixed(2)}`
    h3.classList = 'preco'
    button.innerText = 'Comprar'

    divImg.append(image)
    divPrecoComprar.append(h3, button)
    divInfo.append(p, h2, divPrecoComprar)
    li.append(divImg, divInfo)
    listaAlbuns.append(li)
}

function renderizarAlbuns(array) {
    array.forEach(element => criarCard(element))
}

renderizarAlbuns(products)