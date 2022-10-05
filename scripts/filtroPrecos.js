let lista = document.getElementsByClassName('lista-albuns')[0]
inputRange.addEventListener('mousemove', () => {
    const filtraPreco = products.filter(element => element.price <= Number(inputRange.value))
    lista.innerHTML = ''    
    renderizarAlbuns(filtraPreco)
})