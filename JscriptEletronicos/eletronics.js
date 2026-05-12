function salvarProdutos(){

    let produtosSelecionados = [];

    // PRODUTOS

    const produtos = document.querySelectorAll('input[name="produto"]:checked');

    for(let i = 0; i < produtos.length; i++){

        produtosSelecionados.push(produtos[i].value);

    }

    // VALIDAÇÃO

    if(produtosSelecionados.length === 0){

        alert("Selecione pelo menos um produto.");

        return;

    }

    // SALVAR

    localStorage.setItem("produtosEletronics",

        JSON.stringify(produtosSelecionados)

    );

    alert("Produtos salvos com sucesso!");

}

/* =========================
   MENU
========================= */

function abrirBusca(){

    alert("Abrir busca");

}

function abrirCarrinho(){

    window.location.href = "carrinho.html";

}