const frm= document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)
    const total = preco * 2
    const promocao = Math.floor(total)

    resp.innerText = `Promoção: ${medicamento}`
    resp.innerText += `\nLeve 2 por apenas R$: ${promocao.toFixed(2)}`
    e.preventDefault()
})