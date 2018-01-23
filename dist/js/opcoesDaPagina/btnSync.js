'use strict';

;(function () {
    var $btn = $('#btnSync');

    $btn.click(function () {
        $btn.addClass('botaoSync--esperando');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar");

        xhr.setRequestHeader("Content-Type", "application/json");

        var cartoesDaPagina = listaCartoes;

        var objeto = {
            usuario: "Kaique",
            cartoes: listaCartoes
        };

        xhr.send(JSON.stringify(objeto));

        xhr.addEventListener('load', function () {
            $btn.addClass('botaoSync--deuBom');
            $btn.removeClass('botaoSync--deuRuim');
            $btn.removeClass('botaoSync--esperando');
        });

        xhr.addEventListener('error', function () {
            $btn.addClass('botaoSync--deuRuim');
            $btn.removeClass('botaoSync--deuBom');
            $btn.removeClass('botaoSync--esperando');
        });
    });

    $btn.removeClass('no-js');
})();