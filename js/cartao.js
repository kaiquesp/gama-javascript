; (function () {
    const cartoes = document.querySelectorAll('.cartao')
    // Adicionar o cartao--focado
    //CSS Defeituoso
    // é correção com Bubbling

    for (let cartao of cartoes) {
        //bubbling
        cartao.addEventListener('focusin', function () {
            //console.log('Fazendo os bagulhos funcionarem')
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('click', function (event) {
            const $elementoAtual = event.target
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

            if (isRadioTipo) {
                const novaCor = $elementoAtual.value
                cartao.style.background = novaCor
            }
        })

        cartao.addEventListener('change', function (event) {
            const $elementoAtual = event.target
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')
            console.log(event)
            Delegate
            if (isRadioTipo){
            const novaCor = $elementoAtual.value
            cartao.style.background = novaCor
        }
    })


    cartao.addEventListener('keydown', function (event) {
        const $elementoAtual = event.target
        const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao')
        console.log(event)
        //Quando
        if (isLabel && (event.key === 'Enter' || event.key === '.')) {
            $elementoAtual.click()
        }
    })

    //Implementar o Remove com Delegate

    cartao.addEventListener('click', function (event) {
        const $elementoAtual = event.target
        const isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')

        if(isRemove) {
            cartao.classList.add('cartao--somePeixinho')
            cartao.addEventListener('transitionend', function() {
                cartao.remove()
            })
        }
    })

}
})()