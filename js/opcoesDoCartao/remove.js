(function () {

    
    const btnRemove = document.querySelectorAll('.opcoesDoCartao-remove');
    btnRemove.forEach(element => {
        element.addEventListener('click', removeCartao);
    });

    function removeCartao(){
        
        const cartao = this.parentNode.parentNode;
        
        cartao.classList.add('cartao--some');
        
        cartao.addEventListener('transitionend', function(){
            cartao.remove()
        })
        
    }
})()