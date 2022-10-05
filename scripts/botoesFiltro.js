function eventFiltro() {
    const botoesFiltro = document.querySelectorAll('.item-filtro')
    let albunsMostrados = document.getElementsByClassName('lista-albuns')[0]

    botoesFiltro.forEach(element => {
        element.addEventListener('click', () => {
            albunsMostrados.innerHTML = ''
            let filtro = element.innerText

            if (filtro === 'Todos') {
                renderizarAlbuns(products)
            }

            filtroSelecionado()

            element.setAttribute('id', 'selecionado')

            let albunsFiltrados = filtrado(filtro)

            albunsFiltrados.forEach((element) => criarCard(element))
        })
    })
}

eventFiltro()

function filtrado(text) {
    let meuFilter = products.filter(album => album.category === text)
    return meuFilter
}

function filtroSelecionado() {
    const botoesFiltro = document.querySelectorAll('.item-filtro')
    botoesFiltro.forEach((element) => {
        if (element.hasAttribute('id')) {
            element.removeAttribute('id')
        }
    })
}