function carregarPagina(pagina, event) {
    if (event) event.preventDefault();

    fetch(pagina)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar: " + response.statusText);
            return response.text();
        })
        .then(data => {
            document.getElementById("conteudo").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("conteudo").innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}

// Carregar 'lancamentos.html' quando abrir a página
document.addEventListener("DOMContentLoaded", function () {
    carregarPagina("lançamentos.html");

    // Evento de clique nos links da segunda navbar
    document.querySelectorAll("nav.nav-imoveis a").forEach(link => {
        link.addEventListener("click", function (event) {
            let pagina = this.innerText.trim().toLowerCase();

            if (pagina === "lançamentos") {
                carregarPagina("lançamentos.html", event);
            } else if (pagina === "imóveis") {
                carregarPagina("imoveis-fetch.html", event);
            }
        });
    });

    // Evento para a primeira navbar (Imóveis -> carrega Lançamentos)
    document.querySelectorAll(".navbar-nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.innerText.trim().toLowerCase() === "imóveis") {
                carregarPagina("lançamentos.html", event);
            }
        });
    });
});

//Voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//Redirecionar para a página descrição.html
function descricao() {
    window.location.href = 'descrição.html';
}

document.querySelectorAll('.col').forEach(col => {
    col.addEventListener('click', descricao);
});