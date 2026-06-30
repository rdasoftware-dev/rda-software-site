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
    }

    function fecharMenu() {
        menu.classList.remove("aberto");
        fundo.classList.remove("aberto");
    }

    botao.addEventListener("click", abrirMenu);
    fundo.addEventListener("click", fecharMenu);

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", fecharMenu);
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
        });
    });
}

function aplicarIdioma(idioma) {
    const textos = traducoes[idioma] || traducoes["pt-BR"];

    document.documentElement.lang = idioma;

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(function (elemento) {
        const chave = elemento.getAttribute("data-i18n");

        if (textos[chave]) {
            elemento.textContent = textos[chave];
        }
    });

    const botoes = document.querySelectorAll(".idioma-btn");

    botoes.forEach(function (botao) {
        botao.classList.remove("ativo");

        if (botao.getAttribute("data-lang") === idioma) {
            botao.classList.add("ativo");
        }
    });
}

function atualizarAno() {
    const ano = document.getElementById("anoAtual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
}

const traducoes = {
    "pt-BR": {
        menuHome: "Home",
        menuSobre: "Sobre...",
        menuApps: "Aplicativos",
        menuIdioma: "Idioma",
        menuContato: "Contato",
        menuPrivacidade: "Privacidade",
        menuTermos: "Termos de uso",

        app01: "RDAConverter",
        app02: "Aplicativo 02",
        app03: "Aplicativo 03",
        app04: "Aplicativo 04",
        app05: "Aplicativo 05",
        app06: "Aplicativo 06",
        app07: "Aplicativo 07",
        app08: "Aplicativo 08",
        app09: "Aplicativo 09",
        app10: "Aplicativo 10",
        maisApps: "Mais aplicativos em desenvolvimento...",

        heroTitulo: "Tecnologia gratuita, acessível e inteligente para todos.",
        heroSubtitulo: "Desenvolvemos aplicativos Android gratuitos, simples e eficientes, com suporte multilíngue e foco em soluções úteis para o dia a dia.",

        sobreTitulo: "Sobre a RDA Software",
        sobreTexto1: "A RDA Software é um projeto dedicado à criação de soluções digitais úteis, gratuitas e acessíveis para Android.",
        sobreTexto2: "Nosso objetivo é desenvolver aplicativos leves, objetivos e traduzidos para múltiplos idiomas, permitindo que usuários de diferentes países tenham acesso a ferramentas práticas sem barreiras.",

        cardGratisTitulo: "Aplicativos gratuitos",
        cardGratisTexto: "Soluções Android para uso gratuito por qualquer pessoa.",
        cardIdiomasTitulo: "7 idiomas",
        cardIdiomasTexto: "Português, Inglês, Francês, Espanhol, Alemão, Russo e Mandarim.",
        cardTecnologiaTitulo: "Tecnologia com propósito",
        cardTecnologiaTexto: "Ferramentas simples, úteis, acessíveis e pensadas para o dia a dia.",

        bioTexto1: "Robson Dantas de Aguiar é desenvolvedor independente e fundador da RDA Software, um projeto dedicado à criação de soluções digitais úteis, gratuitas e acessíveis para Android.",
        bioTexto2: "Seu trabalho une tecnologia, simplicidade e propósito social, com foco em ferramentas práticas que possam ajudar pessoas comuns no dia a dia.",
        bioTexto3: "A RDA Software nasce com o compromisso de desenvolver aplicativos leves, objetivos e traduzidos para múltiplos idiomas, permitindo que usuários de diferentes países tenham acesso a recursos digitais sem barreiras."
    },

    "en": {
        menuHome: "Home",
        menuSobre: "About...",
        menuApps: "Apps",
        menuIdioma: "Language",
        menuContato: "Contact",
        menuPrivacidade: "Privacy",
        menuTermos: "Terms of use",

        app01: "RDAConverter",
        app02: "App 02",
        app03: "App 03",
        app04: "App 04",
        app05: "App 05",
        app06: "App 06",
        app07: "App 07",
        app08: "App 08",
        app09: "App 09",
        app10: "App 10",
        maisApps: "More apps in development...",

        heroTitulo: "Free, accessible and intelligent technology for everyone.",
        heroSubtitulo: "We develop free, simple and efficient Android apps with multilingual support and a focus on useful everyday solutions.",

        sobreTitulo: "About RDA Software",
        sobreTexto1: "RDA Software is a project dedicated to creating useful, free and accessible digital solutions for Android.",
        sobreTexto2: "Our goal is to develop lightweight, objective and multilingual apps, allowing users from different countries to access practical tools without barriers.",

        cardGratisTitulo: "Free apps",
        cardGratisTexto: "Android solutions free for anyone to use.",
        cardIdiomasTitulo: "7 languages",
        cardIdiomasTexto: "Portuguese, English, French, Spanish, German, Russian and Mandarin.",
        cardTecnologiaTitulo: "Technology with purpose",
        cardTecnologiaTexto: "Simple, useful and accessible tools designed for everyday life.",

        bioTexto1: "Robson Dantas de Aguiar is an independent developer and founder of RDA Software, a project dedicated to creating useful, free and accessible digital solutions for Android.",
        bioTexto2: "His work combines technology, simplicity and social purpose, focusing on practical tools that can help ordinary people in daily life.",
        bioTexto3: "RDA Software was born with the commitment to develop lightweight, objective and multilingual apps, allowing users from different countries to access digital resources without barriers."
    },

    "fr": {
        menuHome: "Accueil",
        menuSobre: "À propos...",
        menuApps: "Applications",
        menuIdioma: "Langue",
        menuContato: "Contact",
        menuPrivacidade: "Confidentialité",
        menuTermos: "Conditions d'utilisation",

        app01: "RDAConverter",
        app02: "Application 02",
        app03: "Application 03",
        app04: "Application 04",
        app05: "Application 05",
        app06: "Application 06",
        app07: "Application 07",
        app08: "Application 08",
        app09: "Application 09",
        app10: "Application 10",
        maisApps: "Plus d'applications en développement...",

        heroTitulo: "Une technologie gratuite, accessible et intelligente pour tous.",
        heroSubtitulo: "Nous développons des applications Android gratuites, simples et efficaces, avec un support multilingue et des solutions utiles au quotidien.",

        sobreTitulo: "À propos de RDA Software",
        sobreTexto1: "RDA Software est un projet dédié à la création de solutions numériques utiles, gratuites et accessibles pour Android.",
        sobreTexto2: "Notre objectif est de développer des applications légères, objectives et multilingues, permettant aux utilisateurs de différents pays d'accéder à des outils pratiques sans barrières.",

        cardGratisTitulo: "Applications gratuites",
        cardGratisTexto: "Solutions Android gratuites pour tous.",
        cardIdiomasTitulo: "7 langues",
        cardIdiomasTexto: "Portugais, anglais, français, espagnol, allemand, russe et mandarin.",
        cardTecnologiaTitulo: "Technologie avec un but",
        cardTecnologiaTexto: "Des outils simples, utiles et accessibles pour le quotidien.",

        bioTexto1: "Robson Dantas de Aguiar est développeur indépendant et fondateur de RDA Software, un projet dédié à la création de solutions numériques utiles, gratuites et accessibles pour Android.",
        bioTexto2: "Son travail unit technologie, simplicité et objectif social, avec un accent sur des outils pratiques pouvant aider les personnes dans leur vie quotidienne.",
        bioTexto3: "RDA Software est né avec l'engagement de développer des applications légères, objectives et traduites en plusieurs langues."
    },

    "es": {
        menuHome: "Inicio",
        menuSobre: "Sobre...",
        menuApps: "Aplicaciones",
        menuIdioma: "Idioma",
        menuContato: "Contacto",
        menuPrivacidade: "Privacidad",
        menuTermos: "Términos de uso",

        app01: "RDAConverter",
        app02: "Aplicación 02",
        app03: "Aplicación 03",
        app04: "Aplicación 04",
        app05: "Aplicación 05",
        app06: "Aplicación 06",
        app07: "Aplicación 07",
        app08: "Aplicación 08",
        app09: "Aplicación 09",
        app10: "Aplicación 10",
        maisApps: "Más aplicaciones en desarrollo...",

        heroTitulo: "Tecnología gratuita, accesible e inteligente para todos.",
        heroSubtitulo: "Desarrollamos aplicaciones Android gratuitas, simples y eficientes, con soporte multilingüe y enfoque en soluciones útiles para el día a día.",

        sobreTitulo: "Sobre RDA Software",
        sobreTexto1: "RDA Software es un proyecto dedicado a crear soluciones digitales útiles, gratuitas y accesibles para Android.",
        sobreTexto2: "Nuestro objetivo es desarrollar aplicaciones ligeras, objetivas y traducidas a varios idiomas, permitiendo que usuarios de diferentes países accedan a herramientas prácticas sin barreras.",

        cardGratisTitulo: "Aplicaciones gratuitas",
        cardGratisTexto: "Soluciones Android gratuitas para cualquier persona.",
        cardIdiomasTitulo: "7 idiomas",
        cardIdiomasTexto: "Portugués, inglés, francés, español, alemán, ruso y mandarín.",
        cardTecnologiaTitulo: "Tecnología con propósito",
        cardTecnologiaTexto: "Herramientas simples, útiles y accesibles pensadas para el día a día.",

        bioTexto1: "Robson Dantas de Aguiar es desarrollador independiente y fundador de RDA Software, un proyecto dedicado a crear soluciones digitales útiles, gratuitas y accesibles para Android.",
        bioTexto2: "Su trabajo une tecnología, simplicidad y propósito social, con foco en herramientas prácticas que puedan ayudar a las personas en su día a día.",
        bioTexto3: "RDA Software nace con el compromiso de desarrollar aplicaciones ligeras, objetivas y traducidas a varios idiomas."
    },

    "de": {
        menuHome: "Startseite",
        menuSobre: "Über...",
        menuApps: "Apps",
        menuIdioma: "Sprache",
        menuContato: "Kontakt",
        menuPrivacidade: "Datenschutz",
        menuTermos: "Nutzungsbedingungen",

        app01: "RDAConverter",
        app02: "App 02",
        app03: "App 03",
        app04: "App 04",
        app05: "App 05",
        app06: "App 06",
        app07: "App 07",
        app08: "App 08",
        app09: "App 09",
        app10: "App 10",
        maisApps: "Weitere Apps in Entwicklung...",

        heroTitulo: "Kostenlose, zugängliche und intelligente Technologie für alle.",
        heroSubtitulo: "Wir entwickeln kostenlose, einfache und effiziente Android-Apps mit mehrsprachiger Unterstützung und Fokus auf nützliche Alltagslösungen.",

        sobreTitulo: "Über RDA Software",
        sobreTexto1: "RDA Software ist ein Projekt zur Entwicklung nützlicher, kostenloser und zugänglicher digitaler Lösungen für Android.",
        sobreTexto2: "Unser Ziel ist es, leichte, klare und mehrsprachige Apps zu entwickeln, damit Nutzer aus verschiedenen Ländern praktische Werkzeuge ohne Barrieren nutzen können.",

        cardGratisTitulo: "Kostenlose Apps",
        cardGratisTexto: "Android-Lösungen zur kostenlosen Nutzung für alle.",
        cardIdiomasTitulo: "7 Sprachen",
        cardIdiomasTexto: "Portugiesisch, Englisch, Französisch, Spanisch, Deutsch, Russisch und Mandarin.",
        cardTecnologiaTitulo: "Technologie mit Zweck",
        cardTecnologiaTexto: "Einfache, nützliche und zugängliche Werkzeuge für den Alltag.",

        bioTexto1: "Robson Dantas de Aguiar ist unabhängiger Entwickler und Gründer von RDA Software, einem Projekt zur Entwicklung nützlicher, kostenloser und zugänglicher digitaler Lösungen für Android.",
        bioTexto2: "Seine Arbeit verbindet Technologie, Einfachheit und sozialen Zweck mit Fokus auf praktische Werkzeuge für den Alltag.",
        bioTexto3: "RDA Software entstand mit dem Ziel, leichte, klare und mehrsprachige Apps zu entwickeln."
    },

    "ru": {
        menuHome: "Главная",
        menuSobre: "О проекте...",
        menuApps: "Приложения",
        menuIdioma: "Язык",
        menuContato: "Контакт",
        menuPrivacidade: "Конфиденциальность",
        menuTermos: "Условия использования",

        app01: "RDAConverter",
        app02: "Приложение 02",
        app03: "Приложение 03",
        app04: "Приложение 04",
        app05: "Приложение 05",
        app06: "Приложение 06",
        app07: "Приложение 07",
        app08: "Приложение 08",
        app09: "Приложение 09",
        app10: "Приложение 10",
        maisApps: "Больше приложений в разработке...",

        heroTitulo: "Бесплатные, доступные и интеллектуальные технологии для всех.",
        heroSubtitulo: "Мы создаем бесплатные, простые и эффективные Android-приложения с многоязычной поддержкой и полезными решениями для повседневной жизни.",

        sobreTitulo: "О RDA Software",
        sobreTexto1: "RDA Software — это проект, посвященный созданию полезных, бесплатных и доступных цифровых решений для Android.",
        sobreTexto2: "Наша цель — разрабатывать легкие, понятные и многоязычные приложения, чтобы пользователи из разных стран могли пользоваться практичными инструментами без барьеров.",

        cardGratisTitulo: "Бесплатные приложения",
        cardGratisTexto: "Android-решения для бесплатного использования всеми.",
        cardIdiomasTitulo: "7 языков",
        cardIdiomasTexto: "Португальский, английский, французский, испанский, немецкий, русский и мандаринский.",
        cardTecnologiaTitulo: "Технологии со смыслом",
        cardTecnologiaTexto: "Простые, полезные и доступные инструменты для повседневной жизни.",

        bioTexto1: "Робсон Дантас де Агиар — независимый разработчик и основатель RDA Software, проекта, посвященного созданию полезных, бесплатных и доступных цифровых решений для Android.",
        bioTexto2: "Его работа объединяет технологии, простоту и социальную цель, уделяя внимание практическим инструментам для повседневной жизни.",
        bioTexto3: "RDA Software создана с целью разработки легких, понятных и многоязычных приложений."
    },

    "zh-CN": {
        menuHome: "首页",
        menuSobre: "关于...",
        menuApps: "应用程序",
        menuIdioma: "语言",
        menuContato: "联系",
        menuPrivacidade: "隐私",
        menuTermos: "使用条款",

        app01: "RDAConverter",
        app02: "应用 02",
        app03: "应用 03",
        app04: "应用 04",
        app05: "应用 05",
        app06: "应用 06",
        app07: "应用 07",
        app08: "应用 08",
        app09: "应用 09",
        app10: "应用 10",
        maisApps: "更多应用正在开发中...",

        heroTitulo: "为所有人提供免费、易用、智能的技术。",
        heroSubtitulo: "我们开发免费、简单、高效的 Android 应用，支持多语言，专注于日常实用解决方案。",

        sobreTitulo: "关于 RDA Software",
        sobreTexto1: "RDA Software 是一个致力于为 Android 创建实用、免费且易用数字解决方案的项目。",
        sobreTexto2: "我们的目标是开发轻量、明确、多语言的应用，让不同国家的用户都能无障碍地使用实用工具。",

        cardGratisTitulo: "免费应用",
        cardGratisTexto: "任何人都可以免费使用的 Android 解决方案。",
        cardIdiomasTitulo: "7 种语言",
        cardIdiomasTexto: "葡萄牙语、英语、法语、西班牙语、德语、俄语和中文普通话。",
        cardTecnologiaTitulo: "有意义的技术",
        cardTecnologiaTexto: "为日常生活设计的简单、实用、易用工具。",

        bioTexto1: "Robson Dantas de Aguiar 是一名独立开发者，也是 RDA Software 的创始人。该项目致力于为 Android 创建实用、免费且易用的数字解决方案。",
        bioTexto2: "他的工作结合了技术、简洁和社会价值，专注于能够帮助普通人日常生活的实用工具。",
        bioTexto3: "RDA Software 致力于开发轻量、明确并支持多语言的应用，让不同国家的用户都能无障碍访问数字资源。"
    }
};
