;(function(){
    const cartoes = document.querySelectorAll('.cartao')
    // Adicionar o cartao--focado
    //CSS Defeituoso
    // é correção com Bubbling

    for(let cartao of cartoes){
        //bubbling
        cartao.addEventListener('focusin',function(){
            //console.log('Fazendo os bagulhos funcionarem')
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado')
        })
    }
})()