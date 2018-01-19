;(function(){
    const form = document.querySelector('.formNovoCartao')
    let contador = document.querySelectorAll('.cartao')
    
    //Add EventListener
    form.addEventListener("submit", function(event){
        event.preventDefault()
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = $campoDeConteudo.value.trim()
        
        //console.log('Hey ho lets go', conteudo)
        if(!conteudo) {
            console.log('Não tem conteúdo seu vacilaum')
            // <div class="formNovoCartao-msg">
            //     Formulário inválido. Não digite vários nada!!!!
            // </div>
            const $msgErro = document.createElement('div')
            
            $msgErro.classList.add('formNovoCartao-msg')
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!'
            
            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro)
            
            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove()
            })
            
        } else {
            contador++

            const $tpl = document.createElement('tpl')
            $tpl.innerHTML = `
            <article id="${contador}" class="cartao" tabindex="0">
                <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>

                <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" class="opcoesDoCartao-radioTipo" checked>
                <label for="corPadrão-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                    Padrão
                </label>

                <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                </label>

                <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                </label>

                <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
            </article>`

            let $cartao = $tpl.querySelector('.cartao')

            document.querySelector('.mural').insertAdjacentElement('afterbegin', $cartao)
            
        }
        $campoDeConteudo.value = ''
    })
    // Conteudo importa, sem conteudo, tem varios nada
    form.classList.remove('no-js')
})()