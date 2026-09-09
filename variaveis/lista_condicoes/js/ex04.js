const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    let tipo = "Desconhecido";

    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        resp1.innerText = "Lados podem formar um triângulo.";
    } else {
        resp1.innerText = "Lados não podem formar um triângulo.";
    }
    resp2.innerText = `Tipo do triângulo: ${tipo}`;
});
