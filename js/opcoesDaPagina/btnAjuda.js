;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda')
    
    $btnAjuda.addEventListener('click', () => {
        const ajudas = [
            {msg: 'Ajuda 1', cor: 'lime'},
            {msg: 'Ajuda 2', cor: 'orange'},
            {msg: 'Ajuda 3', cor: 'silver'},
            {msg: 'Ajuda 4', cor: 'pink'},
            {msg: 'Ajuda 5', cor: 'brown'}
        ]
        ajudas.forEach(ajuda => alert(ajuda))
        console.log(ajudas)
    })
    
    $btnAjuda.classList.remove('no-js')
})()