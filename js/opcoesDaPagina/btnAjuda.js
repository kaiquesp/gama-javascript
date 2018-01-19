;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda')

    $btnAjuda.addEventListener('click', () => {
        const ajudas = ['teste 1',
                        'teste 2',
                        'teste 3']
    ajudas.forEach(ajuda => alert(ajuda))
    console.log(ajudas)
    })

    $btnAjuda.classList.remove('no-js')
})()