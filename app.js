//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//  OBJETIVO: ADICIONAR NOMES DE PESSOAS EM UMA LISTA E DEPOIS SORTEAR OS NOMES
//PARA ACHAR O GANHADOR

// OBSERVAÇÃO: SERTIFICAR QUE SEJA TYPE STRING NO IMPUT, LIMPAR A LISTA ok
//ETAPA 1: CRIAR A LISTA QUE VAI ARMAZENAR OS NOMES -- ok
//ETAPA 2: CRIAR A FUNÇÃO QUE VAI ACIONAR O NOME NA LISTA ok
//ETAPA 3: CRIAR UMA FUNÇÃO PARA SORTEAR ALEATORIAMENTE UM NOME ok
//ETAPA 4: IMPRIMIR NA TELA UM O NOME ESCOLHIDO ok


//LISTA PARA GUARDAR OS NOMES
let listaAmigos = [];

//FUNÇÃO PARA ADICIONAR UM AMIGO NA LISTA
function adicionarAmigo(){
    let nome = document.querySelector("input").value;
    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else if (listaAmigos.includes(nome)) {
        alert("Esse nome já está na lista.");
    } else  {
        listaAmigos.push(nome);
        exibirListaNaTela();
    }
limparCampo();
}

//PARAMETRO PARA LIBERAR O ONCLICK COM A TECLA ENTER
let input = document.getElementById("amigo");
input.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input-button").onclick();
    }
});

// FUNÇÃO PARA EXIBIR NA TELA LISTA DE NOMES
function exibirListaNaTela() {
    let texto = "";
    for (let i = 0; i < listaAmigos.length; i++){
       texto += listaAmigos[i] = "<li>" + listaAmigos[i][0].toUpperCase() + listaAmigos[i].substr(1) + "</li>";
    }
    document.getElementById("listaAmigos").innerHTML = texto;
} 

// FUNÇÃO PARA SORTEAR UM NOME
function sortearAmigo() {
    let indexEscolhido = parseInt(Math.random() * listaAmigos.length);
    if (listaAmigos == []) {
        alert("Lista de amigos está vazia.");
    } else {
        exibirResultado("resultado",`O amigo secreto sorteado é: ${listaAmigos[indexEscolhido]}`);
        
    }   
}
// FUNCÃO PARA IMPRIMIR O NOME SORTEADO
function exibirResultado(id,texto) {
    return document.getElementById(id).innerHTML = texto;
}

// FUNÇÃO PARA LIMPAR CAMPO
function limparCampo() {
    nome = document.querySelector("input");
    nome.value = '';
}