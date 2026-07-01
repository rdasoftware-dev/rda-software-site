// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
    iniciarCarrossel();
    iniciarMenu();
    iniciarIdiomas();
    atualizarAno();
});

function iniciarCarrossel() {
    const carrossel = document.getElementById("carrosselRDA");

    if (!carrossel) {
        return;
    }

    const imagens = carrossel.querySelectorAll(".carrossel-img");

    if (!imagens || imagens.length === 0) {
        return;
    }

    let imagemAtual = 0;
    const tempoExibicao = 6500;

    function trocarImagem() {
        imagens[imagemAtual].classList.remove("ativa");

        imagemAtual++;

        if (imagemAtual >= imagens.length) {
            imagemAtual = 0;
        }

        imagens[imagemAtual].classList.add("ativa");
    }

    setInterval(trocarImagem, tempoExibicao);
}

function iniciarMenu() {
    const botao = document.getElementById("menuBotao");
    const menu = document.getElementById("menuLateral");
    const fundo = document.getElementById("menuFundo");

    if (!botao || !menu || !fundo) {
        return;
    }

    function abrirMenu() {
        menu.classList.add("aberto");
        fundo.classList.add("aberto");
        botao.setAttribute("aria-label", traduzirTexto("ariaFecharMenu"));
        botao.setAttribute("aria-expanded", "true");
    }

    function fecharMenu() {
        menu.classList.remove("aberto");
        fundo.classList.remove("aberto");
        botao.setAttribute("aria-label", traduzirTexto("ariaAbrirMenu"));
        botao.setAttribute("aria-expanded", "false");
    }

    function alternarMenu() {
        if (menu.classList.contains("aberto")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    }

    botao.setAttribute("aria-expanded", "false");
    botao.addEventListener("click", alternarMenu);
    fundo.addEventListener("click", fecharMenu);

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            fecharMenu();
        }
    });
}

function fecharMenuHamburguer() {
    const menu = document.getElementById("menuLateral");
    const fundo = document.getElementById("menuFundo
