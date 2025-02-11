//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//  OBJETIVO: ADICIONAR NOMES DE PESSOAS EM UMA LISTA E SORTEAR OS NOMES ALEATORIAMENTE

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
    if (listaAmigos.length == 0) {
        alert("Lista de amigos está vazia.");
    } else if (listaAmigos.length <= 1) {
        alert("Poucos nomes para sortear, adicione mais nomes!")                
    } else {
        exibirResultado("resultado",`O amigo secreto sorteado é: <strong>${listaAmigos[indexEscolhido]}</strong>`);
        limparListaDaTela();
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
// FUNÇÃO PARA LIMPAR LISTA DE NOMES DA TELA
function limparListaDaTela() {
    return document.getElementById("listaAmigos").innerHTML = '';
}