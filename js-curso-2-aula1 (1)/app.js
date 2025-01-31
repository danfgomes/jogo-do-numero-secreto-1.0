let ListadeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector(`h1`);

//titulo.innerHTML = `jogo do numero secreto`;

//let paragrafo = document.querySelector(`p`);

//paragrafo.innerHTML = `Escolha um numero entre 1 e 10`;
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  

}

function exibirMensagemInicial() {
exibirTextoNaTela('h1','Jogo do numero secreto')
exibirTextoNaTela('p','escolher um numero entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela(`h1`,`Acertou!`);
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela(`p`,mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `o numero secreto e menor`);
        } else {
            exibirTextoNaTela(`p`, `O numero e maior`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 +1);
   let quantidadedeElementosNaLista = ListadeNumerosSorteados.length;

   if (quantidadedeElementosNaLista == 3){
    ListadeNumerosSorteados = []
   }
   if (ListadeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    ListadeNumerosSorteados.push(numeroEscolhido);
    console.log(ListadeNumerosSorteados);
    return numeroEscolhido;
   }
};


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}

exibirMensagemInicial();

console.log(`obrigado por jogar o nosso jogo do numero secreto.`);