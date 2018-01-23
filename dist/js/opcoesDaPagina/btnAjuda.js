'use strict';

;(function (criarCartao) {
    var $btnAjuda = document.querySelector('#btnAjuda');

    // Usuario
    // Clica
    // Ajuda aparece

    // Dev
    // Cadastrar um evento: Event Listener
    $btnAjuda.addEventListener('click', function () {
        // const ajudas = [
        //         {msg: 'Voce pode add cartao', cor: 'pink'},
        //         {msg: 'Remover cartao', cor: 'lime'},
        //         {msg: 'Mudar a cor', cor: 'orange'},
        //         {msg: 'Você pode arrumar a coluna', cor: 'silver'},
        //         {msg: '"Acessivelzaodaporra"', cor: 'white'}
        //     ]

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "http://ceep.herokuapp.com/cartoes/instrucoes");

        xhr.send();

        xhr.responseType = "json";

        xhr.addEventListener("load", function () {
            // const textao = xhr.response

            var ajudas = xhr.response.instrucoes;

            ajudas.reverse().forEach(function (ajuda) {
                return criarCartao(ajuda);
            });
        });

        // Implementação do "forEach"
        // function forEach(array, funcaoCallback) {
        //     for(item of array) {
        //         funcaoCallback(item)
        //     }
        // }
    });

    $btnAjuda.classList.remove('no-js');
})(criarCartao);