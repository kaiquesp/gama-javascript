# Gama Academy + Caelum

Curso de JS oferecido pela Caelum em parceria com a Gama Academy. Parte do treinamento da Avanade.



### Funcionalidades do projeto

Nesta lista, irei explicar passo a passo o que fizemos no curso.

1 - Apagar o cartão:
```
<button onclick="this.parentNode.parentNode.remove()" class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
```
- this foi utilizado para referenciar o elemento;
- Utilizando nodeParent para percorrer o DOM e remover o elemento acimda do botão, que nesse caso seria o nosso cartão.

2 - Implementar botão que define variação entre Linha e Blocos.

- Códio que altera o texto do botão no clique, utilizando uma validação simples;
```
function mudaTexto() {
    if(this.textContent == "Blocos"){
        this.textContent = "Linhas";
    }else{
        this.textContent = "Blocos";
        
    }
}
```

- Código que muda o layout dos cartões ao clicar no btn, verificando se a classe 'mural--linha' já está setada no elemento;

```
function mudaLayout(){
    if(mural.classList.contains('mural--linha')){
        mural.classList.remove('mural--linha');
    }else{
        mural.classList.add('mural--linha');
    }
}
```

- Implementa o Event Listiner para execuar as duas funções ao clicar no botão;

```
btn.addEventListener('click', mudaLayout)
btn.addEventListener('click', mudaTexto)
```

3 - Update na funcionalidade de apagar o cartão: 

- Retiramos 'onclick="this.parentNode.parentNode.remove()"' dos elementos. Criamos um arquivo chamado remove.js e colocamos ele na subpasta da pasta JS 'opcoesDoCartao'.

- Com o objetivo de tornar dinamico a funcionalidade de remover e tornar animada o efeito de remoção, implementamos o código: 

```
const cartao = this.parentNode.parentNode;

cartao.classList.add('cartao--some');

cartao.addEventListener('transitionend', function(){
    cartao.remove()
})


```

- Para implementar a alteração em todos os elementos, alterei de 'querySelect' para 'querySelectAll':

```
const btnRemove = document.querySelectorAll('.opcoesDoCartao-remove');
btnRemove.forEach(element => {
    element.addEventListener('click', removeCartao);
});
```

- Implementamos no código o IIFE no código de remoção de cartões.

```
(function () {
    .....
})()
```



### Anotações gerais

