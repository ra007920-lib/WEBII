//usei como base os exemplos da aula 12 porque sempre me confundo nesse inicio
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    let resposta = "";

    if (isNaN(valor)) {
        resp1.innerText = "Por favor, informe um número válido.";
        return;
    }

    if (valor % 2 === 0) {
        resposta = `O número ${valor} é Par.`;
    } else {
        resposta = `O número ${valor} é Ímpar.`;
    }
    resp1.innerText = resposta;
    frm.inValor.value = "";
    frm.inValor.focus();
});
