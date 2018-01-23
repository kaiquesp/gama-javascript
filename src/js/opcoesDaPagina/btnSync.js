;(function(){
    const $btn = $('#btnSync')
    
    $btn.click(function(){
        $btn.addClass('botaoSync--esperando')
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")

        xhr.setRequestHeader("Content-Type", "application/json")

        const cartoesDaPagina = listaCartoes

        const objeto = {
            usuario: "Kaique"
            ,cartoes: listaCartoes
        }

        xhr.send(JSON.stringify(objeto))
        
        xhr.addEventListener('load', function(){
            $btn.addClass('botaoSync--deuBom')
            $btn.removeClass('botaoSync--deuRuim')
            $btn.removeClass('botaoSync--esperando')
        })
        
        xhr.addEventListener('error', function(){
            $btn.addClass('botaoSync--deuRuim')
            $btn.removeClass('botaoSync--deuBom')
            $btn.removeClass('botaoSync--esperando')
        })
    })
    
    
    
    $btn.removeClass('no-js');
})()