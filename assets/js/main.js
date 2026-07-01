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

function iniciarIdiomas() {
    const idiomaSalvo = localStorage.getItem("rdaIdioma") || "pt-BR";
    aplicarIdioma(idiomaSalvo);

    const botoes = document.querySelectorAll(".idioma-btn");

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const idioma = botao.getAttribute("data-lang");

            if (!idioma) {
                return;
            }

            localStorage.setItem("rdaIdioma", idioma);
            aplicarIdioma(idioma);

            document.getElementById("menuLateral").classList.remove("aberto");
            document.getElementById("menuFundo").classList.remove("aberto");
            document.getElementById("menuBotao").setAttribute("aria-expanded", "false");
            document.getElementById("menuBotao").setAttribute(
              "aria-label",
              traduzirTexto("ariaAbrirMenu")
              );
        });
    });
}

function traduzirTexto(chave) {
    const idioma = localStorage.getItem("rdaIdioma") || "pt-BR";
    const dicionario = window.RDA_I18N || {};
    const textos = dicionario[idioma] || dicionario["pt-BR"] || {};

    return textos[chave] || chave;
}

function aplicarIdioma(idioma) {
    const dicionario = window.RDA_I18N || {};
    const textos = dicionario[idioma] || dicionario["pt-BR"];

    if (!textos) {
        return;
    }

    document.documentElement.lang = idioma;

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(function (elemento) {
        const chave = elemento.getAttribute("data-i18n");

        if (textos[chave]) {
            elemento.textContent = textos[chave];
        }
    });

    const elementosAria = document.querySelectorAll("[data-i18n-aria]");

    elementosAria.forEach(function (elemento) {
        const chave = elemento.getAttribute("data-i18n-aria");

        if (textos[chave]) {
            elemento.setAttribute("aria-label", textos[chave]);
        }
    });

    const botoes = document.querySelectorAll(".idioma-btn");

    botoes.forEach(function (botao) {
        botao.classList.remove("ativo");

        if (botao.getAttribute("data-lang") === idioma) {
            botao.classList.add("ativo");
        }
    });

    const menuBotao = document.getElementById("menuBotao");

    if (menuBotao) {
        const menuAberto = menuBotao.getAttribute("aria-expanded") === "true";
        menuBotao.setAttribute("aria-label", menuAberto ? textos.ariaFecharMenu : textos.ariaAbrirMenu);
    }
}

function atualizarAno() {
    const ano = document.getElementById("anoAtual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
}
