function salvarRoupas(){

    let camisaSelecionada;
    let calcaSelecionada;

    // CAMISA

    const camisa = document.getElementsByName("camisa");

    for(let i = 0; i < camisa.length; i++){

        if(camisa[i].checked){

            camisaSelecionada = camisa[i].value;

        }

    }

    // CALÇA

    const calca = document.getElementsByName("calca");

    for(let i = 0; i < calca.length; i++){

        if(calca[i].checked){

            calcaSelecionada = calca[i].value;

        }

    }

    // VALIDAÇÃO

    if(camisaSelecionada == null || calcaSelecionada == null){

        alert("Selecione uma camisa e uma calça.");

        return;

    }

    // SALVA

    localStorage.setItem("perfilAtlon", JSON.stringify({

        camisa: camisaSelecionada,
        calca: calcaSelecionada

    }));

    alert("Preferências salvas com sucesso!");

}

/* =========================
   NAVEGAÇÃO
========================= */

function abrirBusca(){

    alert("Abrir busca");

}

function abrirCarrinho(){

    window.location.href = "carrinho.html";

}