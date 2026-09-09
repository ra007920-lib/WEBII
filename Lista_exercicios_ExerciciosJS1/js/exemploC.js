const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value) 
    const total = preco * 3
    const desconto = preco * 0.50
    const promocao = total - desconto 

    resp.innerText = `Produto: ${produto}`
    resp.innerText += `\nLeve 3 por R$: ${promocao.toFixed(2)}`
    e.preventDefault()
})