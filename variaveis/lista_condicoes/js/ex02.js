const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const permitida = Number(frm.inPermitida.value);
    const condutor = Number(frm.inVelocidade.value);

    const limiteLeve = permitida * 1.2;

    let situacao = "";

    if (condutor <= permitida) {
        situacao = "Sem Multa";
    } else if (condutor <= limiteLeve) {
        situacao = "Multa Leve";
    } else {
        situacao = "Multa Grave";
    }
    resp1.innerText = `Situação: ${situacao}`;
});