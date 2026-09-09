const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    let tempo = 0;
    let troco = 0;

    if (valor >= 3.0) {
        tempo = 120;
        troco = valor - 3.0;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1.0;
    }
    resp1.innerText = `Tempo: ${tempo} min`;

    if (troco > 0) {
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
});
