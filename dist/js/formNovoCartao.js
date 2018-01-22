'use strict';

;(function () {
    // IIFE   
    var form = $('.formNovoCartao');

    // Add EventListener
    form.on('submit', function (event) {
        event.preventDefault();
        var $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo');
        var conteudo = $campoDeConteudo.value.trim();

        //console.log('Hey ho lets go', conteudo)
        if (!conteudo) {
            console.log('Não tem conteúdo seu vacilaum');
            // <div class="formNovoCartao-msg">
            //     Formulário inválido. Não digite vários nada!!!!
            // </div>

            // Imperativa
            var $msgErro = document.createElement('div');

            $msgErro.addClass('formNovoCartao-msg');
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!';

            document.$('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);

            $msgErro.addEventListener('animationend', function () {
                $msgErro.remove();
            });
        } else {
            criarCartao(conteudo);
        }
        $campoDeConteudo.value = '';
    });
    // Conteudo importa, sem conteudo, tem varios nada
    form.removeClass('no-js');
})();