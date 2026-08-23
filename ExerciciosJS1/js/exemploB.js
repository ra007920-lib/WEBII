const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
   const valor = Number(frm.inValor.value)
   const tempo = Number(frm.inTempo.value)
   const periodo = Math.ceil(tempo / 15)
   const total = periodo * valor

   resp.innerText = `Total a Pagar R$: ${total.toFixed(2)}`
   e.preventDefault()
})